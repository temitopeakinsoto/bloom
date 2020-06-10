import React from "react";
import profile from "../images/profile.jpg";

export default function Header() {
  return (
    <header className="header-section">
      <div className="header-content">
        <div className="header-logo">
          <h1>BLOOMBERG</h1>     
        </div>  
        <p>Software Engineer - 2020 Graduate/Entry Level</p>
        <p>London</p>
      </div>
      <div className="header-profile">
        <img src={profile} alt=""/>
      </div>      
    </header>
  );
}
