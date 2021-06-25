import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
import Expenses from "./Expenses";

const ExpensesList = (props) => {
    // console.log(props.items);
    
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Found No Expenses.</h2>
    }
    
    return (
        
        <ul className = "expenses-list">
            {props.items.map((item, index)=>(
                <ExpenseItem
                key={index}
                title= {item.title}
                date= {item.date}
                amount= {item.amount} />
            ))}
        </ul>
    )
}

export default ExpensesList;