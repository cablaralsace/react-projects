import "./App.css"
import Header from "./Header/Header";
import AvailableBalance from "./Balance/AvailableBalance";
import IncomeBalance from "./Balance/IncomeBalance";
import ExpenseBalance from "./Balance/ExpenseBalance";



const App = (props) => {
    return (
        <div className="App">
            <Header/>
            <AvailableBalance/>
            <IncomeBalance/>
            <ExpenseBalance/>
        </div>
    )
}

export default App;