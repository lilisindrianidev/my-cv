import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page from '../screens/Page/page.js';

class Router extends Component{

  render(){
    return(
      // basename={window.location.pathname || '*'}
      basename={import.meta.env.DEV ? '/' : '/react-vite-gh-pages/'}
      <BrowserRouter 
      >
        <Routes>
          <Route path='/' element={<Page/>}/>

          
        </Routes>
      </BrowserRouter>
    )  
  }
}
export default Router;