import React, { Component, useState } from "react";
import "./navbar.css";
import { NavLink } from 'react-router-dom';
import {FaBars, FaTimes} from "react-icons/fa";
import { ToggleButton } from "react-bootstrap";

export default function Nav()  {
  const [ismobile,Setismobile]=useState(false);
  // const dropdown=document.querySelector(".toggler");
  
  // const navMenu=document.querySelector(".nav-menu");
  // dropdown?.addEventListener("click",()=>{
  //   console.log("clicked");
  //   dropdown.classList.toggle("active");
  //   navMenu.classList.toggle("active");
  // })
  // document.querySelectorAll(".nav-Link").forEach(n=>n
  //   .addEventListener("click",()=>{
  //     dropdown?.classList.remove("active");
  //     navMenu?.classList.remove('active');
  //   }))
  
  
  
 
 
    return <><header>
    <nav className="navbar">
     <a href="#" className="nav-Branding">Welcome To Dashboard</a>
     <ul className={`nav-menu ${ismobile ? 'active':'inactive'}`}>
      <li className="nav-item">
        <a href="/chart1" className="nav-Link">Chart1</a></li>
      <li className="nav-item">
        <a href="/chart2" className="nav-Link">Chart2</a>
      </li>
      <li className="nav-item">
        <a href="/chart3" className="nav-Link">Chart3</a>
      </li></ul>
      <button className="toggler" onClick={()=>{Setismobile(!ismobile)}}><FaBars/></button>
    <div className={`toggler1`} >
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </div>

    </nav>
    </header>
    </>
  }
