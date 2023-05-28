import {Component} from "react";
import '../../assets/scss/allPages.scss'
import Address from './../../assets/images/address.png'
import Phone from './../../assets/images/phone.png'
import Mail from './../../assets/images/mail.png'
import Burger from '../../components/burger.js'
import Surat from './../../assets/images/surat.png'
import Godot from './../../assets/images/godot.png'
import Desty from '../../assets/images/desty.png'
import SD from './../../assets/images/sd.png'
import SMP from './../../assets/images/smp.png'
import SMA from '../../assets/images/sma.png'
import Uni from '../../assets/images/uni.png'
import Aboutme from './aboutme.js'

class Page extends Component{
  render(){
    return(
      <div className="page"> 
        <div className="header">
          <div className="menu" id="moreinfo2">
            <Burger/>
            <div className="write_menu">
              <a href="#home" className="write"> Home</a>
              <a href="#education" className="write"> Ediucation</a>
              <a href="#skills" className="write"> Skills</a>
              <a href="#moreinfo"  className="write"> More Info</a>
            </div>
          </div>
          <div className="cover_head">
            <div className="me">
              <h1 className="title_name"> Lilis Indriani</h1>
              <h2 className="title_status"> Fresh Graduated
              </h2>
              
            </div>
            {/* <div className="back_mypic">
              <img src={Mypic} className="lilis"/>
            </div> */}
          </div>
          
            
          
        </div>
        <Aboutme/>
        <div className="education" id="education">
          <h2 className="write_education"> EDUCATION</h2>
          <div className="school">
            <div className="sd">
              <h1 className="write_sd">
                Primary School
              </h1>
              {/* <img src={SD} className="sd_image"/> */}
              <h1 className="name_sd">
                SDN Tanggeran
              </h1>
              <li className="list_sd">
                Graduated : 2006- 2012
              </li>
            </div>
          
            <div className="smp">
              <h1 className="write_smp">
                Middle School
              </h1>
              <h2 className="name_smp">
                SMP N 1 Paninggaran
              </h2>
              <li className="list_smp">
                Graduated : 2015
              </li>
              <li className="list_smp">
                Second winner of english speech Contest in SMP N 1 Paninggaran birthday
              </li>
            </div>
            <div className="sma">
              <h1 className="write_sma">
                High School
              </h1>
              <h2 className="name_sma">
                SMA N Paninggaran
              </h2>
              <li className="list_sma">
                Graduated : 2018
              </li>
              <li className="list_sma">
                Study focus : Science
              </li>
              <li className="list_sma">
                School Club : Theater
              </li>
              <li className="list_sma">
                Contributor of short fiction ,Bahasa Rembulan book , Pbi division of UPS Tegal
              </li>
            </div>
            <div className="university">
              <h1 className="write_university">
                University
              </h1>
              <h2 className="name_university">
                Universitas Teknologi Digital Indonesia
              </h2>
              <li className="list_university">
                Graduated : 2023
              </li>
              <li className="list_university">
                Bachelor of Informatics enginering 
              </li>
              <li className="list_university">
                GPA : 3.64 
              </li>
              <li className="list_university">
                Joined in Art Organization of Universitas Teknologi Digital Indonesia
              </li>
              <li className="list_university">
                Band Vocalist in the ivent of Stikes Guna Bangsa, Gathering music in University Sanata Dharma, Akprind.  
              </li>
            </div>
          </div>
          
        </div>
        <div className="skills" id="skills">
          <h1 className="title_skills"> SKILLS</h1>
          <div className="wrap_skills">
            <div className="ability"> 
              <h1 className="write_ability">Ability</h1>
              <h3 className="write_ability1">Web Developer for frontend with language programming:</h3>
              <div className="btn_abl_1">
                <div className="wrap_abl">
                  <btn className="btn_abl">JavaScript</btn>
                </div>
                <div className="wrap_abl">
                  <btn className="btn_abl">ReactJs</btn>
                </div>
                <div className="wrap_abl">
                  <btn className="btn_abl">HTML</btn>
                </div>
                <div className="wrap_abl">
                  <btn className="btn_abl">SCSS</btn>
                </div>
              </div>
              
            </div>
            <div className="other_ability">
              <h2 className="title_write_ability">Organization</h2>
              <ul className="other_write_ability"> i have ability work on team
                <li className="other_write_ability"> Lead of Theater Division Universitas Teknologi Digital Indonesia</li>
                <li className="other_write_ability"> panitia acara di study pentas musik dan theater</li>
              </ul>
            </div>
            <div className="other_ability2">
              <div className="title_write_ability2"> Projects: 
                <div className="img_abil">
                  <img src={Surat} className="img_a"/>
                  <h3 className="other_write_ability2"> Government Correspondent service using Naive bayes metode</h3>
                </div>
                <div className="img_abil">
                  <img src={Godot} className="img_a"/>
                  <h3 className="other_write_ability2"> Meniru aplikasi Godot</h3>
                </div>
                <div className="img_abil">
                  <img src={Desty} className="img_a"/>
                  <h3 className="other_write_ability2"> Meniru aplikasi Desty</h3>
                </div>
                
               
                
              </div>
            </div>
            <div className="other_ability">
              <ul className="title_write_ability"> Language
                <li className="other_write_ability"> Indonesian Language : Native</li>
                <li className="other_write_ability"> English: Intermediate</li>
                
              </ul>
            </div>
          </div>
        </div>
        <div className="footer" >
          <div className="cover_footer">
          
            <div className="address">
              <h3 className="write_add"> Address:</h3>
              <div className="wrap_img_add">
                <div className="second_wrap">
                  <img src={Address} className="add_img"/>
                  <h3 className="add_write">
                    RT1 RW1, Dukuh Brunyah, Desa Taggeran, Kecamatan Paninggaran,
                    Kabupaten Pekalongan, Jawa Tengah, Indonesia
                  </h3>
                </div>
                
                <div className="second_wrap">
                  <img src={Phone} className="add_img"/>
                  <h3 className="add_write">
                  0812345678
                  </h3>
                </div>
                
                <div className="second_wrap">
                  <img src={Mail} className="add_img"/>
                  <h3 className="add_write">
                  lilisindriani.blog@gmail.com
                  </h3>
                </div>
                
              </div> 
              <div className="explain_footer">
                <a href="#moreinfo2" className="ex_write" id="moreinfo"> Home</a>
              </div>
            </div> 
          </div>
           
            
        
        </div>
      </div>
    )
  }
}
export default Page;