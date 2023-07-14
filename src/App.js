import React, { useEffect, useState } from 'react';

import { About, Contact, Header, Skills, Testimonial, Work } from './container';
import  Navbar  from './components/Navbar/Navbar';
import './App.scss';
import Loader from './container/Loader/Loader';
import Foot from './container/Footer/Foot';
import Service from './container/Services/Service';
import Founder from './container/Testimonial/Founder';



const App = () => {
const[loading, setLoading]= useState(false);
useEffect(()=>{
  setLoading(true)
  setTimeout(()=>{
    setLoading(false)
  }, 8000)
},[])


  return( 
    <>


    <Loader/>
      <Navbar />
      <Loader/>
      <Header />
      <About />
      <Service/>
      <Work/>
      <Testimonial />
     
      <Contact />
      <Founder/>

      <Foot/>

    </>

    );


}





export default App;


// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import Header from './container/Header/Header';
// import Navbar from './components/Navbar/Navbar';
// import Work from './container/Work/Work';
// import About from './container/About/About';
// import Skills from './container/Skills/Skills';
// import Contact from './container/Contact/Contact';
// import Testimonial from './container/Testimonial/Testimonial';

// function App() {
//   return (




//     <Router>
//       <Navbar/>
//       <Routes>
//         <Route path="/" element={<Header/>}  />
//         <Route path="/about" element={<About />} />
//         <Route path="/Contact" element={<Contact />} />
//         <Route path="/skills" element={<Skills />} />
//         <Route path="/testimonial" element={<Testimonial />} />
//         <Route path="/project" element={<Work />} />
//         <Route path="/Contact" element={<Contact />} />

//       </Routes>
//     </Router>

     
//       );
// }

// export default App;

