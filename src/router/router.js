import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from '../component/Page/page.js';

class Router extends Component{

  render(){
    return(
      <BrowserRouter basename={window.location.pathname || '*'}>
        <Routes>
          <Route path='/' element={<Page/>}/>

          
        </Routes>
      </BrowserRouter>
    )  
  }
}
export default Router;