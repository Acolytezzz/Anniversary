import "./Header.css"
import image14 from "../../images/image14.jpg"

function Header() {
  return (
    <div className='header'>
      <div className="headerTitles">
        <span className="headerTitleSm">Priya & Aman</span>
        <span className="headerTitleLg">Aniversary</span>
      </div>
      <img className="headerImg" src={image14} alt="Priya" />
    </div>
  )
}

export default Header 