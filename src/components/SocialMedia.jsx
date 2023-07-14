import React from 'react';
import { BsTwitter, BsInstagram, BsYoutube } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  
  <div className="app__social">
    <a href='https://www.youtube.com/watch?v=Z7iBFklVU_I'>
    <div >
      <BsInstagram />
    </div>
    </a>
    <a href='https://www.facebook.com/saaya.architects'>
    <div >
      <FaFacebookF />
    </div>
    </a>
   <a href='https://www.youtube.com/@saayaarchitectsconsultancy6377'>
     <div >
      <BsYoutube />
    </div>
   </a>
   
  </div>
);

export default SocialMedia;
