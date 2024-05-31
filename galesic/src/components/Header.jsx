import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Flag from "react-flagkit";
import logo from "../assets/Images/logo/muhasLogo4.jpg";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import "./styles/Header.css";

const Header = () => {
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
                alert("You have clicked bosnian flag");
              }}
            />
          </div>
          <div className="german-flag">
            <Flag country="DE" />
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
            <a href="/">Početna</a>
          </li>
          <li className="main-nav__item">
            <a href="#o-nama">O nama</a>
          </li>
          <li className="main-nav__item">
            <div className="dropdown">
              <button className="dropbtn">Naše Usluge</button>
              <FontAwesomeIcon icon={faCaretDown} className="dropDown"/>
              <div className="dropdown-content">
                <a href="#">Adaptacije</a>
                <a href="#">Elektroinstalaterski radovi</a>
                <a href="#">Vodoinstalaterski radovi</a>
                <a href="#">Uređenje vrta</a>
              </div>
            </div>
          </li>
          <li className="main-nav__item">
            <a href="/galerija">Galerija</a>
          </li>
          <li className="main-nav__item">
            <a href="/kontakt">Kontakt</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
