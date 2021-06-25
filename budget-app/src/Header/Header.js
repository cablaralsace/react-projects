import "./Header.css"
import icon1 from "../img/budget-app-icon.png"

const Header = (props) => {
    return (
        <div className="header">
        <img src={icon1}/>
        <h1>GGMoney Expense Tracker</h1>
        </div>
    )
}

export default Header;