import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";
import Home from './components/Home';
import About  from "./components/About";
import Contact  from "./components/Contact";
import React from "react"; 
import { Component } from "react";

class App extends Component {
  render(){
    // let activeStyle = {
    //   backgroundColor: 'white',
    //   color : 'red'
    // };
    // let activeClassName = 'active111'
    return (
      <Router>
        <div>
        <nav className="navbar navbar-default">
            <ul className="nav navbar-nav">
              <li>
                <NavLink  
              //   style={({ isActive }) => ({
              //   ...(isActive ? activeStyle : null),
              // })} 
              to="/"  
            //   className={({ isActive }) =>
            //   isActive ? activeClassName : undefined
            // } 
             >Trang chủ</NavLink>
              </li>
              <li>
              <NavLink 
              // style={({ isActive }) => ({
              //   ...(isActive ? activeStyle : null),
              // })}
              to="/about" 
            //   className={({ isActive }) =>
            //   isActive ? activeClassName : undefined
            // }
            >About</NavLink>
              </li>
              <li>
              <NavLink 
              // style={({ isActive }) => ({
              //   ...(isActive ? activeStyle : null),
              // })} 
            //   className={({ isActive }) =>
            //   isActive ? activeClassName : undefined
            //  }
             to="/contact">Liên hệ</NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes> 
          
        </div>
       
          
        
      </Router>
    );
  }
 
}

export default App;
