// import React from 'react'
// import { BsQuote } from 'react-icons/bs'
// import { images } from '../../constants'
// import './Founder.scss'

// const Founder = () => {
//   return (
//     <div className='wrapper'>
//     <h1>  Founders</h1>
//     <h5>message</h5>

//     <div className='cards'>
//       <img src={images.yash}/>
//       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates eveniet soluta, nesciunt libero corporis vel obcaecati eius eligendi, quod at rerum unde sequi modi asperiores nisi amet temporibus, nostrum aliquam.</p>
//       <h2> Yash Shrestha</h2>
//       <h4> CEO</h4>
//       <i className='fa fa-quote-left'><BsQuote/></i>
//     </div>
//     <div className='cards'>
//       <img src={images.sacar}/>
//       <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates eveniet soluta, nesciunt libero corporis vel obcaecati eius eligendi, quod at rerum unde sequi modi asperiores nisi amet temporibus, nostrum aliquam.</p>
//       <h2> Sacar Khadka</h2>
//       <h4> CEO</h4>
//       <i className='fa fa-quote-left'><BsQuote/></i>
//     </div>
//   </div>
//   )
// }

// export default Founder

import React from 'react'
import { BsFacebook, BsInstagram, BsQuote, BsTwitter, BsYoutube } from 'react-icons/bs'
import './Founder.scss'
import { images } from '../../constants'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
const Founder = () => {
  return (
    <body>
      <section>
        <div className='heading'>Our Founders</div>
        <div className='wrapper'>
          <div className='container'>
            <div className='profile'>
              <div className='imgBox'>
                <img src={images.f1}/>
              </div>
              <h2> Yash Shrestha</h2>
        
            </div>
            <p><span className='left'><FaQuoteLeft/></span> At SAAYA, we take an integrated approach to our projects as 
            a professional service firm. Our teams across all in-house disciplines of architectural design: urban design,
             research, planning and consulting, work collaboratively to deliver better solutions 
             for clients.<span className='right'><FaQuoteRight/></span></p>
             <div className="social">
             <a href='https://www.instagram.com/_yash1925_/'><i><BsInstagram/></i></a>
              <a href='https://www.facebook.com/profile.php?id=100082812052770'><i><BsFacebook/></i></a>
              <a href='https://www.youtube.com/@saayaarchitectsconsultancy6377'><i><BsYoutube/></i></a>
             </div>
          </div>
          <div>
          <p className='head-text' style={{fontWeight:100, marginTop:59}}>  our vision</p>
            <p style={{marginTop:30}}><span>    Saaya Architects, we are focused on our vision <br/> of creating innovative  designs that  <br/>are both aesthetically 
            pleasing and technically souna. <br/> We steven elements with traditional craftsmanship. <br/> We believe that this 
            approach allows us to<br/> create truly unique spaces for our clients. <br/>
We look forward to working with you and <br/>helping you bring your vision for your project to life. <br/> Please do not 
hesitate to reach out if<br/> you have any questions or need any assitance!
</span></p>
        
          </div>

          <div className='container'>
            <div className='profile'>
              <div className='imgBox'>
                <img src={images.f2}/>
              </div>
              <h2> Sacar Khadgi</h2>
            </div>
            <p><span className='left'><FaQuoteLeft/></span> SAAYA is committed to intensifying our endeavors in order to gain the trust of society 
            through surpassing the expectations of our clients and communities. We eagerly anticipate your ongoing support and encouragement in this pursuit.<span className='right'><FaQuoteRight/></span></p>
             <div className="social">
              <a href='https://www.instagram.com/saynerzy/'><i><BsInstagram/></i></a>
              <a href='https://www.facebook.com/sakar.khadgi'><i><BsFacebook/></i></a>
              <a href='https://www.youtube.com/@saayaarchitectsconsultancy6377'><i><BsYoutube/></i></a>
             </div>
          </div>
        </div>
      </section>
    </body>
  )
}

export default Founder