import React from "react";


import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/navbar/Navbar";
import About from "./components/Aboutus/About";
import Menu from "./components/menu/Menu";
import Login from "./components/Login/Login";
import Signup from "./components/signup/Signup";
import Contact from "./components/contactus/Contact";




function App() {

  return (
    <Router>
   
            <Routes>
            <Route path="/navbar" element={   <Navbar/>} />
            
              <Route path="/about-us" element={<About />} />
              <Route path="/" element={<Menu/>} />
              <Route path="/Login" element={<Login/>} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/contact-us" element={<Contact/>} />
            </Routes>
         
         
      <Footer/> 
    </Router>
  );
}

export default App;
