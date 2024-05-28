import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Flag from 'react-flagkit';
import logo from "../assets/Images/logo/muhasLogo4.jpg"
import "./styles/Header.css"

const Header = () => {
  return (
    <>
      <header className="main-header">
        <div className="information">
            <div className="location"><FontAwesomeIcon icon={faLocationDot} size="2xl"/><h3>Slavinovickog odreda b.b.</h3></div>
            <div className="number"><FontAwesomeIcon icon={faPhoneVolume} size="2xl"/><h3>+38762532542</h3></div>
            <div className="email"><FontAwesomeIcon icon={faEnvelope} size="2xl"/><h3>elektrotettnang@gmail.com</h3></div>
           <div className="flags">
            <div className="bosnian-flag"><Flag country="BA" role="button" onClick={() =>{
                alert("You have clicked bosnian flag")
            }} /></div>
            <div className="german-flag"><Flag country="DE"/></div>
            <div className="english-flag"><Flag country="GB"/></div>
        </div>
        </div>
        <div className="main-header__logo"><img src={logo} alt="logo" height={80} width={100}/></div>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Our Work</li>
            <li>Galery</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
