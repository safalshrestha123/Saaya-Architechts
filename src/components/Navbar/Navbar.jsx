import React, { useState, useEffect } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const navigate = useNavigate();
  

  const handleClick = () => {
    // 👇️ navigate programmatically
    navigate('/');
  };


  return (
    // <nav className="app__navbar">
         <nav className={`app__navbar `}>
      <div className="app__navbar-logo" >
        <img src={images.logopn} alt="logo" onClick={handleClick}/>
      </div>
      <ul className="app__navbar-links">
        {['home', 'about','service', 'work', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}

      </ul>

      

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'service','work', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(true)}>
                    {item}
                  </a>
                </li>
              ))}
              
            </ul>
          </motion.div>
        )}
      </div>
    </nav>

  //   <nav className={`app__navbar `}>
  //   <div className="app__navbar-logo" >
  //     <img src={images.logo1} alt="logo" onClick={handleClick}/>
  //   </div>

  //   <ul className="app__navbar-links">
  //     <li className="app__flex p-text">
  //       <NavLink to="/">Home</NavLink>
  //     </li>
  //     <li className="app__flex p-text">
  //       <NavLink to="/about">About</NavLink>
  //     </li>
  //     <li className="app__flex p-text">
  //       <NavLink to="/contact">Contact</NavLink>
  //     </li>



  //   </ul>
  //   {/* <ul className="app__navbar-links">
  //     {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
  //       <li className="app__flex p-text" key={`link-${item}`}>
  //         <div />
  //         <a href={`#${item}`}>{item}</a>
  //       </li>
  //     ))}
  //   </ul> */}

  //   <div className="app__navbar-menu">
  //     <HiMenuAlt4 onClick={() => setToggle(true)} />

  //     {toggle && (
  //       <motion.div
  //         whileInView={{ x: [300, 0] }}
  //         transition={{ duration: 0.85, ease: 'easeOut' }}
  //       >
  //         <HiX onClick={() => setToggle(false)} />
  //         <ul>
  //           {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
  //             <li key={item}>
  //               <a href={`#${item}`} onClick={() => setToggle(false)}>
  //                 {item}
  //               </a>
  //             </li>
  //           ))}
            
  //         </ul>
  //       </motion.div>
  //     )}
  //   </div>
  // </nav>
  );
};

export default Navbar;
