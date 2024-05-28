import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Flag from 'react-flagkit';

const Header = () => {
  return (
    <>
      <header>
        <div className="information">
            <div className="location"><FontAwesomeIcon icon={faLocationDot} size="2xl"/><h3>Momanovo b.b.</h3></div>
            <div className="number"><FontAwesomeIcon icon={faPhoneVolume} size="2xl"/><h3>+38762532542</h3></div>
            <div className="email"><FontAwesomeIcon icon={faEnvelope} size="2xl"/><h3>elektrotettnang@gmail.com</h3></div>
            <div><Flag country="BA" role="button" onClick={() =>{
                alert("You have clicked bosnian flag")
            }}/></div>
            <div><Flag country="DE"/></div>
            <div><Flag country="GB"/></div>
        </div>
        <div>Logo</div>
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
