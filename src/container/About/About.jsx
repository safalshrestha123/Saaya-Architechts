import React, { useEffect, useState } from 'react';
import { color, motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
 import './About.scss';
 import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import 'bootstrap/dist/css/bootstrap.min.css';

import { client, urlFor } from '../../client'; 
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Shop from "../../components/3d/Shop"
import { Carousel } from 'react-bootstrap';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const style = {
  
  width: 897,
  height: 396,

};

  




const About = ({  }) => {
  const [products, setProducts]= useState([]);
  const [posts, setPosts]= useState([]);

  useEffect (()=>{
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
 
  },[]);


 
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });


  const navigate = useNavigate();
  

  const handleClick = () => {
    // 👇️ navigate programmatically
    navigate('/projects');
  };


  return(

<>  



{/*  
<button onClick={handleClick}>product
</button> */}
 {/* <div className="model_shop">  
         <Canvas camera={{ fov: 50, position:[5,5,5]}}>
        <OrbitControls enableZoom={false} autoRotate/>
        <ambientLight intensity={1}/>
        <directionalLight position={[3,2,1]}/>
       <Shop/>
       
      </Canvas>
      </div> */}
<div className='head-text'> <span>About</span> Us</div>
    
<div className='youtube'>
  
<iframe width="507" height="310"  src="https://www.youtube.com/embed/XoTk64E_x60" title="THE KALYANI COMPLEX, KOLHABI!!! First mixed use high rise commercial complex in the district!!!" frameborder="0" 
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
  allowfullscreen></iframe>
</div>



<div className="app__header app__flex">

    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp app__flex">
          
 
          <div style={{ marginLeft: -5, fontSize:20, marginTop:-35}}>
            <p className="welcome" style={{fontSize:27}}>Hello, Welcome To </p>
            <h1 className="head-text" style={{fontSize:27, marginTop:-20}}>SAAYA <span style={{fontSize:30}}>Architects</span> </h1>
          </div>
        </div>

        <div className="tag-cmp app__flex">
          <p className="p-text" style={{marginTop:-90}}>We Design Places, Not Projects <br/> <p style={{fontSize:23, marginTop:39, marginLeft:-20}}>Why Choose Us ???</p></p>
         
        <div style={{marginTop:-20}}>
        <li>Work In Time </li>
          <li>Fast Execution</li>
          <li>Exact Budget Estimation</li>
          <li>Great Materials Guarantee</li>
          <li>Creative Design Consultation</li>
          <li>Guaranteed Client Satisfaction</li>
        </div>
          
        </div>
       
        <div
      className="tag-cmpp app__flex">
      
        <div className="who"style={{}}>
          <p className="who" style={{fontSize:30, fontWeight:700}}>WHO ARE WE ??</p>
          <p className="p-text" style={{fontSize:16}}>Founded in <span style={{fontSize:20, fontWeight:600}}>2019</span>, Saaya Architects is a forward-thinking architectural office 
          that has rapidly established its reputation in the field. Built on the vision of delivering <span style={{fontSize:20, fontWeight:600}} >innovative
           and sustainable design solutions</span>, Saaya Architects has made a name for itself with its progressive 
           design philosophy and comprehensive service offering. With a focus on the integration of architecture 
           and construction, the company provides a seamless one-stop solution for clients, managing the entire process
            from design conception through to construction completion. Our motto,<span style={{fontSize:20, fontWeight:600}}>"A one-step door solution"</span> underlines 
            our commitment to simplifying the building process for our clients, ensuring a streamlined, efficient experience that 
            brings visionary architectural ideas to life with the highest quality of construction. This distinctive blend of 
            creative design and practical construction has cemented Saaya Architects' place as comprehensive studio in just a few 
            short years.</p>
        </div>
        </div>
      </div>
    </motion.div>
    

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      
      {/* <img src={images.profile} alt="profile_bg" /> */}
      {/* <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
      /> */}
       

    </motion.div>
    

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {/* {[images.h1, images.h3, images.h2].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))} */}
      {/* <motion.img
        whileInView={{ scale: [0, 1] }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        src={images.circle}
        alt="profile_circle"
        className="overlay_circle"
        
      />  */}
    </motion.div>
    <div className="model_shop">  
         <Canvas camera={{ fov: 50, position:[5,5,5]}}>
        <OrbitControls enableZoom={false} autoRotate/>
        <ambientLight intensity={1}/>
        <directionalLight position={[3,2,1]}/>
       <Shop/>
       
      </Canvas>
      </div> 

     <div style={{marginTop:380}}>
     <Carousel fade={true} pause={false} >
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src={images.ab1}
          alt="First slide"
          width="300px"
          height="300px"
          content='fit'
          
          
        />
       
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100"
          src={images.ab2}
          alt="Third slide"
          width="300px"
          height="300px"
        />
    
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block x-100"
          src={images.ab3}
          alt="Third slide"
          width="300px"
          height="300px"
        />
  
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block x-100"
          src={images.ab4}
          alt="Third slide"
          width="300px"
          height="300px"
          
        />
      
      </Carousel.Item>
    </Carousel>

     </div>
  

  </div>
 
</>
  
  );
  
};


export default AppWrap(About, 'about');
