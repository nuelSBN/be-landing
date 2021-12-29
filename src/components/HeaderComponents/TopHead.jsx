import { useState } from "react";
import "../cssFiles/topHead.css";
import Logo from "../../assets/logo.png";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";

function TopHead() {
  const [click, setclick] = useState(false);
  const handleClick = () => setclick(!click);

  const closeMobileMenu = () => setclick(false);

  return (
    <div className="topHeader">
      <img className="logo" src={Logo} alt="logo" onClick={closeMobileMenu} />
      <div className="menuIcon">
        <i
          class={click ? "fas fa-times" : "fas fa-bars"}
          onClick={handleClick}
        ></i>
      </div>
      <ul className={click ? "navbar active" : "navbar"}>
        <li onClick={closeMobileMenu}>
          <a href="#aboutUs" className="navLinks">
            What We Do
          </a>
        </li>
        <li onClick={closeMobileMenu}>
          <a href="#services" className="navLinks">
            Services
          </a>
        </li>
        <li onClick={closeMobileMenu}>
          <a href="#aboutUs" className="navLinks">
            Our Goal
          </a>
        </li>
        <li>
          <div className="social-icon" onClick={closeMobileMenu}>
            <FacebookIcon className="icons" />
          </div>
          <div className="social-icon" onClick={closeMobileMenu}>
            <InstagramIcon className="icons" />
          </div>
          <div className="social-icon" onClick={closeMobileMenu}>
            <TwitterIcon className="icons" />
          </div>
        </li>
      </ul>
      <button>Visit Our Store</button>
    </div>
  );
}

export default TopHead;
