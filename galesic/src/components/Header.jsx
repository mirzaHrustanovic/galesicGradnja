import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Flag from "react-flagkit";
import logo from "../assets/Images/logo/muhasLogo4.jpg";
import {Link} from "react-router-dom";
import "./styles/Header.css";
import { useState } from "react";
import { languages } from "./languages";

const Header = () => {
  const [currentLanguage,setCurrentLanguage] = useState("bs");
  const lang = languages[currentLanguage];

  return (
    <header className="main-header">
      <div className="information">
        <div className="location">
          <FontAwesomeIcon icon={faLocationDot} size="2xl" />
          <h3>Slavinovickog odreda b.b.</h3>
        </div>
        <div className="number">
          <FontAwesomeIcon icon={faPhoneVolume} size="2xl" />
          <h3>+38762532542</h3>
        </div>
        <div className="email">
          <FontAwesomeIcon icon={faEnvelope} size="2xl" />
          <h3>elektrotettnang@gmail.com</h3>
        </div>
        <div className="flags">
          <div className="bosnian-flag">
            <Flag
              country="BA"
              role="button"
              onClick={() => {
                setCurrentLanguage("bs")
              }}
            />
          </div>
          <div className="german-flag">
            <Flag country="DE" onClick={() => {
                setCurrentLanguage("de")
              }}/>
          </div>
          <div className="english-flag">
            <Flag country="GB" />
          </div>
        </div>
      </div>

      <nav className="main-nav">
        <div className="main-header__logo">
          <a href="/">
            <img src={logo} alt="logo" height={80} width={90} />
          </a>
        </div>
        <ul className="main-nav__items">
          <li className="main-nav__item">
            <a href="/">{lang.navbar.home}</a>
          </li>
          <li className="main-nav__item">
            <Link to="#o-nama">{lang.navbar.about}</Link>
          </li>
          <li className="main-nav__item">
          <Link to="#naše-usluge"></Link>
            <div className="dropdown">
              <button className="dropbtn">{lang.navbar.naseUsluge}</button>
              
              <div className="dropdown-content">
                <Link to="/adaptacije">Adaptacije</Link>
                <a href="#">Elektroinstalaterski radovi</a>
                <a href="#">Vodoinstalaterski radovi</a>
                <a href="#">Suha gradnja</a>
                <a href="#">Molerski radovi</a>
                <a href="#">Uređenje vrta</a>
              </div>
            </div>
          </li>
          <li className="main-nav__item">
            <Link to="/galerija">{lang.navbar.galerija}</Link>
          </li>
          <li className="main-nav__item">
            <Link to="#kontakt">{lang.navbar.contact}</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
