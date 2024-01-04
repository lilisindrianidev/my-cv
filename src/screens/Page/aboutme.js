import { Component } from "react";
import '../../assets/scss/allPages.scss'
import Me from './../../assets/images/lilis.png'
import Fb from './../../assets/images/facebook.png'

import Wa from './../../assets/images/whatsapp.png'

import Ig from './../../assets/images/instagram.png'
import Li from './../../assets/images/linkedin.png'

class About extends Component{
  render(){
    return(
      <div className="aboutme">
        <h1 className="title_me"> ABOUT ME</h1>
        <div className="wrap_me">
          <h3 className="write_me">
           
            <p>
              My name is Lilis Indriani, i was born on April 24th, 2000. I am frontend developer for web apps. I am from Pekalongan based in Yogyakarta over 4 years.
             
            </p>
            <br/>
            <p>
                 I am a critical thinker, work creatively, able to work on team, and able to create new innovations using code that hopefully will bring the best progress in the future. 
            </p>
        
            <div className="social_media">
              <h3 className="write_social"> Contact Me:</h3>
              <div className="media_images">
                <a  target='_blank'>
                  <img src={Fb} className="media_img"/>
                </a>
                <a href="https://wa.me/6282124457564" target='_blank'>
                  <img src={Wa} className="media_img"/>
                </a>
                <a href="https://www.instagram.com/lilis.indrii/" target='_blank'>
                  <img src={Ig} className="media_img"/>
                </a>
                <a href="https://www.linkedin.com/in/lilisindriani?trk=contact-info" target='_blank'>
                  <img src={Li} className="media_img"/>
                </a>
              </div>
            </div>
          </h3>
          <div className="image_me">
            <img src={Me} className="me"/>
          </div>
          
        </div>
         
      </div>
    )
  }
}
export default About;