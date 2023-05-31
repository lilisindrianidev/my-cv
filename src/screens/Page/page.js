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
import Ai from './../../assets/images/other/ai.png'
import Gimp from './../../assets/images/other/gimp.png'
import Git from '../../assets/images/other/git.png'
import Github from '../../assets/images/other/github.png'
import Java from './../../assets/images/other/java.jpg'
import Krita from './../../assets/images/other/krita.png'
import Laravel from '../../assets/images/other/laravel.svg'
import Mysql from '../../assets/images/other/mysql.png'
import React from '../../assets/images/other/react.png'
import Ad from '../../assets/images/other/ad.png'
import Vs from '../../assets/images/other/vs.png'
import Js from '../../assets/images/other/js.png'
import Sass from '../../assets/images/other/sass.png'
import Css from '../../assets/images/other/css.png'
import Php from '../../assets/images/other/php.png'

import { Link } from "react-router-dom";

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
              <h2 className="title_status"> Front End Developerfor Web Applications
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
                SMA N 1 Paninggaran
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
              <h1 className="write_ability">Programming Skills</h1>
              <h3 className="write_ability1">Web Developer for frontend with language programming:</h3>
              <div className="btn_abl_1">
                <div className="wrap_abl">
                  <img src={Js} className="wrap_abl_img"/>
                  <h3 className="btn_abl">JavaScript
                    <h3 className="btn_abl_in">Expert</h3>
                  </h3>
                </div>
                <div className="wrap_abl">
                  <img src={Sass} className="wrap_abl_img"/>
                  <h3 className="btn_abl">Sass
                    <h3 className="btn_abl_in">Expert</h3>
                  </h3>
                </div>
                <div className="wrap_abl">
                  <img src={Css} className="wrap_abl_img"/>
                  <h3 className="btn_abl">CSS
                    <h3 className="btn_abl_in">Expert</h3>
                  </h3>
                </div>
                <div className="wrap_abl">
                  <img src={Java} className="wrap_abl_img"/>
                  <h3 className="btn_abl">Java
                    <h3 className="btn_abl_in">Beginner</h3>
                  </h3>
                </div>
                <div className="wrap_abl">
                  <img src={Mysql} className="wrap_abl_img"/>
                  <h3 className="btn_abl">MySql
                    <h3 className="btn_abl_in">Intermediet</h3>
                  </h3>
                </div>
                 <div className="wrap_abl">
                  <img src={Php} className="wrap_abl_img"/>
                  <h3 className="btn_abl">PHP
                    <h3 className="btn_abl_in">Intermediet</h3>
                  </h3>
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
                  <h3 className="other_write_ability2"> Government Correspondent service web app using Naive bayes metode</h3>
                </div>
                <div className="img_abil">
                  <img src={Godot} className="img_a"/>
                  <h3 className="other_write_ability2"> Duplicat fIrst Page for Godot Application</h3>
                </div>
                <div className="img_abil">
                  <img src={Desty} className="img_a"/>
                  <h3 className="other_write_ability2"> Duplicat fIrst Page for Desty Application</h3>
                </div>
                
               
                
              </div>
            </div>
            <div className="other_ability">
              <ul className="title_write_ability"> Languages
                <li className="other_write_ability"> Java : Native or bilingual proficiency</li>
                <li className="other_write_ability"> Indonesian Language : Native or bilingual proficiency</li>
                <li className="other_write_ability"> English: Professional working proficiency</li>
                
              </ul>
            </div>
            <div className="ability"> 
              <h1 className="write_ability">Framework Skills</h1>
              <h3 className="write_ability1">Framework i ised to know:</h3>
              <div className="btn_abl_1">
                <div className="wrap_abl">
                  <img src={Laravel} className="wrap_abl_img"/>
                  <h3 className="btn_abl">Laravel
                    <h3 className="btn_abl_in">Beginner</h3>
                  </h3>
                </div>
                <div className="wrap_abl">
                <img src={React} className="wrap_abl_img"/>
                  <h3 className="btn_abl">ReactJs
                    <h3 className="btn_abl_in">Expert</h3>
                  </h3>
                </div>
              </div>
            </div>
            <div className="ability3"> 
              <h1 className="write_ability3">Tools Skills</h1>
              <h3 className="write_ability13">The tools for my skills :</h3>
              <div className="btn_abl_13">
                <div className="wrap_abl3">
                   <img src={Vs} className="wrap_abl3_img"/>
                  <h3 className="btn_abl3">Visual Studio Code
                    <h3 className="btn_abl_in3">Expert</h3>
                  </h3>
                </div>
                <div className="wrap_abl3">
                   <img src={Mysql} className="wrap_abl3_img"/>
                  <h3 className="btn_abl3">MySql
                    <h3 className="btn_abl_in3">Intermediet</h3>
                  </h3>
                </div>
                <div className="wrap_abl3">
                <img src={Git} className="wrap_abl3_img"/>
                  <h3 className="btn_abl3">Git
                    <h3 className="btn_abl_in3">Intermediet</h3>
                  </h3>
                </div>
                <div className="wrap_abl3">
                   <img src={Gimp} className="wrap_abl3_img"/>
                  <h3 className="btn_abl3">Gimp
                    <h3 className="btn_abl_in3">Intermediet</h3>
                  </h3>
                </div>
                <div className="wrap_abl3">
                <img src={Krita} className="wrap_abl3_img"/>
                  <h3 className="btn_abl3">Krita
                    <h3 className="btn_abl_in3">Intermediet</h3>
                  </h3>
                </div>
                <div className="wrap_abl3">
                  <img src={Ad} className="wrap_abl3_img"/>
                  <h3 className="btn_abl3">Android Studio
                    <h3 className="btn_abl_in3">Beginner</h3>
                  </h3>
                </div>
                <div className="wrap_abl3">
                  <img src={Ai} className="wrap_abl3_img"/>
                  <h3 className="btn_abl3">Adobe Ilustrator
                    <h3 className="btn_abl_in3">Intermediet</h3>
                  </h3>
                </div>
              </div>
              
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
                <Link to="/home">hello</Link>
              </div>
            </div> 
          </div>
           
            
        
        </div>
      </div>
    )
  }
}
export default Page;