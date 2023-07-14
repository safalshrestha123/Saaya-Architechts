import React, { useState, useEffect } from 'react';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Link, useParams,useNavigate, Navigate } from 'react-router-dom';

import { client, urlFor } from '../../client';
import { Loader } from '@react-three/drei';
import Product from '../../components/Product';
import { images } from '../../constants';
import { Navbar } from 'react-bootstrap';


export default function WorkDetails() {
  const [product, setProduct] = useState(null);
  const[singlePost, setSinglePost]= useState(null);
  const[work, setWork]= useState(null);
  const [works, setWorks] = useState([]);
  const { slug } = useParams();

  const [index, setIndex] = useState(0);


  useEffect(() => {
    const fetchWork = async () => {
      const query = `*[_type == "works" && slug.current == '${slug}'][0]`;
      const worksQuery = `*[_type == "works"]`;

      const fetchedWork = await client.fetch(query);
      const fetchedWorks = await client.fetch(worksQuery);

      setWork(fetchedWork);
      setWorks(fetchedWorks);

      client.fetch(`*[slug.current == "${slug}"]{
        title,
        image,
        _id,
        slug,
  
        details,
        mainImage{
          asset->{
            _id,
            url
          }
        },
        body,
        "authname": author-> name, "authorImage": author-> image,"autbio": author-> bio     
       
      }`).then((data)=> setSinglePost(data[0]))
      .catch(console.error);
    };
    fetchWork();
  }, [slug]);

  if (!work || !works.length) return <Loader/>;

  const { image, details, title,location,description,area, style, features} = work;
  const handleClick = () => {
    // 👇️ navigate programmatically
    navigator('/');
  };

  
  return (
    
    <div className='work-details'>
           <h1><br/></h1>
           {/* <div className="app__navbar-logo" style={{height:1, width:1}} >
        <img src={images.logopn} alt="logo" onClick={handleClick}/>
      </div> */}
    <div className="product-detail-container">
 
      <div>
        <div className="image-container">
          <img src={urlFor(image && image[index])} className="product-detail-image" />
        </div>
        <div className="small-images-container">
          {image?.map((item, i) => (
            <img 
              key={i}
              src={urlFor(item)}
              className={i === index ? 'small-image selected-image' : 'small-image'}
              onMouseEnter={() => setIndex(i)}
            />
          ))}
        </div>
      </div>

      <div className="product-detail-desc">
        <h1>{title}</h1>
        <div className="reviews">
          <div>
          
          </div>
        
        </div>
        {/* <h4>Details: </h4> */}
        <p>{description}</p>
        <br />
        <br />
        
     



        <h5>Site Details</h5>
        <li>Location: {location}</li>
        <li>Area: {area}</li>
        <li>Architectural Style: {style}</li>
        <li>Special Features: {features}</li>
       

 
      </div>
    </div>

    <div className="maylike-products-wrapper">
        <h2>Featured Works</h2>
        <Link to={"/project/" +slug.current} key={slug.current}>

        <div className="marquee">
          <div className="maylike-products-container track">
            {works.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
        </Link>
    </div>
  </div>
  )

};


