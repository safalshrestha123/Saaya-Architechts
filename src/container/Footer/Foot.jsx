import React from 'react'
import './Foot.scss'
import { BsFacebook, BsInstagram, BsLock, BsMailbox, BsMap, BsPhone, BsSend, BsTiktok, BsTwitter, BsYoutube } from 'react-icons/bs'
import { images } from '../../constants'

const Foot = () => {
  return (

     <footer>
        <div class="foo__container">
            <div class="row">
                  <div class="col" id="company">
                      <img src={images.logopn} alt="" class="logo"/>
                      <p>
                        Saaya Architects & Consultancy, <br/> Complete solutions for your designes
                      </p>
                      <h3 className='col h3'>Follow us</h3>
                      <div class="social">
                        <a href="https://www.facebook.com/profile.php?id=100082812052770"><i class="fab fa-facebook"><BsFacebook/></i></a>
                        <a href="https://www.instagram.com/_yash1925_/"><i class="fab fa-instagram"><BsInstagram/></i></a>
                        <a href="https://www.youtube.com/@saayaarchitectsconsultancy6377"><i class="fab fa-youtube"><BsYoutube/></i></a>
                        <a href="https://www.youtube.com/@saayaarchitectsconsultancy6377"><i class="fab fa-youtube"><BsTwitter/></i></a>

                        
                      </div>
                  </div>
   

                  <div class="col" id="services">
                     <h3>Services</h3>
                     <div class="links">
                        <a href="#service">Interior</a>
                        <a href="#service">Construction</a>
                        <a href="#service">Site Planning</a>
                        <a href="#service">Vastu</a>
                     </div>
                  </div>

                  <div class="col" id="useful-links">
                     <h3>Links</h3>
                     <div class="links">
                        <a href="#about">About</a>
                        <a href="#service">Services</a>
                        <a href="#work">Work</a>
                        <a href="#contact">Contact</a>
                     </div>
                  </div>

                  <div class="col" id="contact">
                      <h3>Contact</h3>
                      <div class="contact-details">
                         <i class="fa fa-location"></i>
                         <p><BsMap/>Chakrapath, <br/> Kathmandu, Nepal <br/><BsMailbox/> Saaya@gmail.com</p>
                       
                      </div>
                      <div class="contact-details">
                         <i class="fa fa-phone"></i>
                         <p><BsPhone/>+977 9860238507</p>
                      </div>

                   
                  </div>
                  <div>
                     <h2  style={{fontSize:20}}> © 2023Designed & Developed By Safal Shrestha</h2>   
                        
                      </div>
            </div>
            

            {/* <div class="row">
                  <div class="form">
                    <form action="">
                        <input type="text" placeholder="Email here..."/>
                        <button><i class="fa fa-paper-plane"><BsSend/></i></button>
                    </form>
                  </div>
            </div> */}

        </div>
     </footer>


  )
}

export default Foot