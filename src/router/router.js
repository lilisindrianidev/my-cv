import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from '../screens/Page/page.js';
import Home from "../screens/Page/hello.js"
import Base from "../components/base64.js"
class Router extends Component{

  render(){
    return(
      <BrowserRouter >
      {/* basename={window.location.pathname || '*'} */}
        <Routes>
          <Route path='/' element={<Page/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="/base" element={<Base/>}/>
        </Routes>
      </BrowserRouter>
    )  
  }
}
export default Router;