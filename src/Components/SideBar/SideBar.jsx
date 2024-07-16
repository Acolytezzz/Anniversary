import "./SideBar.css";
import image21 from "../../images/image21.jpg";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">🌟 Meet Priya 🌟</span>
        <img className="sidebarImg" src={image21} alt="21" />
        <p>
          Priya is the heart of the story. Her energetic spirit and sweet nature
          make every day brighter. She is incredibly kind and deeply emotional,
          adding a touch of adventure to our lives.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitie">CHARACTER TRAITS</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Happy</li>
          <li className="sidebarListItem">Sad</li>
          <li className="sidebarListItem">Angry</li>
          <li className="sidebarListItem">Cute</li>
          <li className="sidebarListItem">Stressed</li>
          <li className="sidebarListItem">Excited</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitie">FOLLOW PRIYA</span>
        <div className="sidebarSocial">
          <a
            href="https://www.facebook.com/profile.php?id=100055157615513"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/priyaaxo__/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <i className="sidebarIcon fa-brands fa-square-instagram"></i>
          </a>
          <a
            href="https://www.snapchat.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            <i className="sidebarIcon fa-brands fa-square-snapchat"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
