import React from "react";
import logo from "../images/lime_logo.png";

export default function Header() {
  return (
    <header className="header-section">
      <div className="header-content">
        <div className="header-logo">
          <img src={logo} alt="lime technologies logo" />
        </div>  
        <p>European Trainee Program</p>
        <p>Location: <span>Luna</span></p>
      </div>      
    </header>
  );
}
