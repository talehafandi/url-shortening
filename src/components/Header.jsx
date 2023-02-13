import React, { useRef } from "react";
import "../styles/header.sass";
import logo from "../assets/logo.svg";
import illustration from "../assets/illustration-working.svg";

const Header = () => {
    const menu = useRef(null);

    const toggleMenu = () => {
        menu.current.classList.toggle("active");
    };
  return (
    <header>
      <nav>
        <img src={logo} alt="Shortly - Logo" />
        <div className="hamburger-button" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="menu" ref={menu}>
          <ul>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
          </ul>
          <div className="login">
            <button className="btn">Login</button>
            <button className="btn btn--signup">Sign Up</button>
          </div>
        </div>
      </nav>
      <img className="illustration" src={illustration} />
      <div className="header-text"> 
          <h1>More than just shorter links</h1>
          <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
          <button className="btn btn--signup">Get Started</button>
      </div>
    </header>
  );
};

export default Header;
