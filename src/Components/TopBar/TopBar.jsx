import { Link } from "react-router-dom";
import "./TopBar.css";
import image43 from "../../images/image43.jpg"

function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <a
          href="https://www.facebook.com/profile.php?id=100055157615513"
          target="_blank"
        >
          <i className="topIcon fa-brands fa-square-facebook"></i>
        </a>
        <a href="https://www.instagram.com/priyaaxo__/" target="_blank">
          <i className="topIcon fa-brands fa-square-instagram"></i>
        </a>
        <a href="" target="_blank">
          <i className="topIcon fa-brands fa-square-snapchat"></i>
        </a>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/story" className="link">
              STORY
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/gallery" className="link">
              GALLERY
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/future" className="link">
              FUTURE
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        <Link to="/" className="link">
          <img
            className="topImg"
            src={image43}
            alt="cute"
          />
        </Link>
      </div>
    </div>
  );
}

export default TopBar; 
