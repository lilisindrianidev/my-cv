import { Component } from "react";
import './../router/router.js'
import Burgerr from './../assets/images/burger.png';
import WBurgerr from './../assets/images/white_burger.png';


class Burgers extends Component{
  constructor(props){
    super(props)
    this.state = {
      burger:false
    }
  }
  hamburger = () => {
    if(this.state.burger === true){
      this.setState({burger:false})
    }else{
      this.setState({burger:true})
    }
    
  }
  render(){
    return(

      <div >
        <>
          {this.state.burger == false &&
            <a className="burger">
            <img src={WBurgerr} className="image_burger" onClick={this.hamburger}/>
            </a>
          }

        </>
       
        {this.state.burger &&
          <div className="burger" onClick={this.hamburger}>
            <div className="color">
              <img src={Burgerr} className="image_burger2"/>
              <div className="write_menu2">
              <a href="#home" className="write2"> Home</a>

            </div>
            <div className="write_menu2">
              <a href="#education" className="write2"> Ediucation</a>
            </div>
            <div className="write_menu2">
              <a href="#skills" className="write2"> Skills</a>
            </div>
            <div className="write_menu2">
              <a href="#moreinfo"  className="write2"> More Info</a>
            </div>
            </div>
            
          </div>
        }
       
        
      
      </div>
      
    )
  }
}
export default Burgers;
