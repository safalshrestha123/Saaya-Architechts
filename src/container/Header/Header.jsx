import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
 import './Header.scss';
 import { useNavigate } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import { client, urlFor } from '../../client'; 


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

  




const Header = ({  }) => {
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

<Carousel fade={true} pause={false} >
      <Carousel.Item interval={10000}>
        <img
          className="d-block w-100"
          src={images.saof}
          alt="First slide"
          width="1000px"
          height="848px"
          
          
        />
        <Carousel.Caption>
          <h3>Saaya Office</h3>
          <p>Chakrapath, Kathmandu.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={10000}>
        <img
          className="d-block w-100"
          src={images.damk}
          alt="Third slide"
          width="1000px"
          height="848px"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={10000}>
        <img
          className="d-block x-100"
          src={images.news}
          alt="Third slide"
          width="1000px"
          height="848px"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={10000}>
        <img
          className="d-block x-100"
          src={images.nada}
          alt="Third slide"
          width="1000px"
          height="848px"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


 

</>
  
  );
  
};


export default AppWrap(Header, 'home');
