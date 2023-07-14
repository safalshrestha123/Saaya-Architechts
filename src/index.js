import React from 'react';
import ReactDOM  from 'react-dom/client';

import './index.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import App from './App';
import Header from './container/Header/Header';
import Work from './container/Work/Work';
import About from './container/About/About';
import Contact from './container/Footer/Footer';
import Testimonial from './container/Testimonial/Testimonial';
import SinglePost from './components/SinglePost';
import Post from './components/Post';
import Product from './components/Product';
import WorkDetails from './container/Work/[slug]';
import ProductDetails from './components/[slug]';
import { Loader } from '@react-three/drei';
import Service from './container/Services/Service';


//ReactDOM.render(<App/>, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
      {/* <Navbar/> */}
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path="/post" element={<Post />} />
    <Route path="/post/:slug" element={<SinglePost />} />
      <Route path="/" element={<Header/>}  />
      <Route path="/about" element={<About />} />
      <Route path="/service" element={<Service />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/testimonial" element={<Testimonial />} />
      <Route path="/project" element={<Work />} />
      <Route path="/project/:slug" element={<WorkDetails />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path='/product' element={<Product />} />
      <Route path="/product/:slug" element={<ProductDetails />} />
      <Route path='/loader' element={<Loader />} />



      
  
    </Routes>
  </Router>
);


