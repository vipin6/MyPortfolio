import React from "react";
import "./sidebar.css";
import about from "../../assets/images/about.png";
import logo from"../../assets/images/logo.png"
import conatct from"../../assets/images/conatct.jpg"
import home from"../../assets/images/home.png"
import portfoli from"../../assets/images/portfoli.png"  
import {Link} from 'react-router-dom';

function SideBar() {
  return (
    <div className="side-bar">
     
      <div className="sidebarone">
      <div className="logo">
        <span className="logo-image">
          <img className="vip" src={logo} alt="logo" />
        </span>
        <span className="text">VIPIN</span>
      </div>
     <hr className="line" />
      <div className="itemnames">
        <ul>
          <li className="item">
            <img src={home} alt="" className="hmpic" /><br />
            
            <Link to="/" className="linktext">Home</Link>
          </li>
          <li className="item">
            <img className="hmpic" src={about} alt="" /><br></br>
            
            <Link to="/about" className="linktext">About</Link>
          </li>
          <li className="item">
            <img src={portfoli} alt="" className="hmpic" /><br />
            <Link to="/portfolio" className="linktext">Portfolio</Link>
          </li>
          <li className="item">
            <img src={conatct} alt="" className="hmpic" /><br />
            <Link to="/contact" className="linktext">Contact</Link>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
}
export default SideBar;
