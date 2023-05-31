import { Component } from "react";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import Page from '../screens/Page/page.js';
import Home from "../screens/Page/hello.js"

class Router extends Component{

  render(){
    return(
      <HashRouter basename={window.location.pathname || '*'}>
        <Routes>
          <Route path='/' element={<Page/>}/>
          <Route path="home" element={<Home/>}/>
          
        </Routes>
      </HashRouter>
    )  
  }
}
export default Router;