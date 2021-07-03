import "./Header.css"
import icon1 from "../img/pink-bank.png"

const Header = () => {
    return (
        <div className="header">
        <img src={icon1}/>
        <h1>Budget Tracker</h1>
        </div>
    )
}

export default Header;