import React , {useState} from "react";
import "../assets/scss/allPages.scss"
import '../assets/scss/allPages.scss'
import images from "../data/picture1.json"
import images3 from "../data/picture3.json"
import images2 from "../data/picture2.json"
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs"
//import im from "../assets/images/desa/1.JPG"
export const Slide2 = ({ hehe }) => {
  console.log(images)
  var imagee = "./desa/1.JPG";
 const  [slide, setSlide]=useState(0);

 const nextSlide=()=>{
  setSlide(slide+1)
 }
 const prevSlide=()=>{
  setSlide(slide-1)
 }

 const  [slide2, setSlide2]=useState(0);

 const nextSlide2=()=>{
  setSlide2(slide2+1)
 }
 const prevSlide2=()=>{
  setSlide2(slide2-1)
 }
 const  [slide3, setSlide3]=useState(0);

 const nextSlide3=()=>{
  setSlide3(slide3+1)
 }
 const prevSlide3=()=>{
  setSlide3(slide3-1)
 }
  return (
    <div className="wrap-scroll">

      <div className="wrap">
        <div className="scroll">
            <BsArrowLeftCircleFill className="arrow arrow-left" onClick={nextSlide}/>
          {images.map((item, index) => {
            return <img src={item.image} alt={item.alt} key={index} className={slide===index? "slide" : "slide slide-hidden"}/>
          })}
            <BsArrowRightCircleFill className="arrow arrow-right" onClick={prevSlide} />
          <span className="indicators">
            {images.map((_, idx) => {
              return <button key={idx} onClick={null} className={slide===idx ? "indicator" : "indicator indicator-inactive"}></button>
            })}
          </span>

        </div>
        <p1 className="write">
        Government Correspondent service web app using Naive bayes metode
        </p1>
      </div>

      <div className="wrap2">
        <div className="scroll2">
          <BsArrowLeftCircleFill className="arrow2 arrow-left2" onClick={nextSlide2}/>
        
          {images2.map((item, index) => {
          // var images2 =require([item.url])
            return <img src={item.image} alt={item.alt} key={index} className={slide2===index? "slide2" : "slide2 slide-hidden2"}/>

          })}
    
          <BsArrowRightCircleFill className="arrow2 arrow-right2" onClick={prevSlide2} />
          <span className="indicators2">
            {images2.map((_, idx) => {
              return <button key={idx} onClick={null} className={slide2===idx ? "indicator2" : "indicator2 indicator-inactive2"}></button>
            })}
          </span>

        </div>
        <p1 className="write2">
          Duplicate first Page for Desty Application
        </p1>
      </div>
      <div className="wrap3">
        <div className="scroll3">
          <BsArrowLeftCircleFill className="arrow3 arrow-left3" onClick={nextSlide3}/>
        
          {images3.map((item, index) => {
          // var images2 =require([item.url])
            return <img src={item.image} alt={item.alt} key={index} className={slide3===index? "slide3" : "slide3 slide-hidden3"}/>

          })}
    
          <BsArrowRightCircleFill className="arrow3 arrow-right3" onClick={prevSlide3} />
          <span className="indicators3">
            {images3.map((_, idx) => {
              return <button key={idx} onClick={null} className={slide3===idx ? "indicator3" : "indicator3 indicator-inactive3"}></button>
            })}
          </span>
           
        </div>
        <p1 className="write3">
          Duplicat first Page for Godot Application
        </p1>
      </div>
      
    </div>
  )
}   
