import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub, AiFillYoutube } from 'react-icons/ai';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Work.scss';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Product from '../../components/Product';


const Work2 = () => {
  const [postData,setPost] = useState(null);
  const [works, setWorks] = useState([]);
  const [filterWork, setFilterWork] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [products, setProducts]= useState([]);
  const [posts, setPosts]= useState([]);
  const { slug } = useParams();

  useEffect(() => {
    const query = '*[_type == "works"]';

    client.fetch(query).then((data) => {
      setWorks(data);
      setFilterWork(data);
    

      client.fetch(`*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url
          },
          alt,
        }
  
    }`)
        .then((data)=> setPost(data))
      .catch(console.error)

      const fetchProducts = async()=>{
        const query = '*[_type == "product"]';
        const fetchedProducts = await client.fetch(query);
        setProducts(fetchedProducts);
  
      }
      const fetchedPost = async()=>{
        const queryP = '*[_type == "post"]';
        const fetchedPost = await client.fetch(queryP);
        setPosts(fetchedPost);
      }
      fetchProducts();
      fetchedPost();
    });
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };
  const navigate = useNavigate();
  





  return (
    <>
      <h2 className="head-text">SAAYA  <span>Portfolio</span> Section</h2>

      <div className="app__work-filter">
        {['Interior', 'Exterior', 'Construction', 'Renovation', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
      </div>

 


      


      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map((work, index) => (
             <>
 
         

          <div className="app__work-item app__flex" key={index} >
            <div
              className="app__work-img app__flex"
            >
              {/* <img src={urlFor(work.image)} alt={work.name} /> */}
              <img
          src={urlFor(work.image && work.image[0])}
          alt={work.name}
          width={250}
          height={250}
          className="product-image"
        />
        

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={work.slug} target="_blank" rel="noreferrer">
                <Link to={"/project/" + work.slug.current} key={work.slug.current}>


                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                  </Link>
                </a>
                <a href={work.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillYoutube />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <Link to={"/project/" + work.slug.current} key={work.slug.current}>
            <div className="app__work-content app__flex">
              <h4 className="bold-text"  >{work.title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{work.details} </p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{work.tags[0]}</p>
              </div>
            </div>
            </Link>
          </div>
        
          </>

        ))}
      </motion.div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Work2, 'app__works'),
  'work',
  'app__primarybg',
);
