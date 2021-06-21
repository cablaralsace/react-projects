import React, {useState } from "react"; // react hooks
import "./Expenses.css"
import Card from "../UI/Card"
import ExpensesList from "./ExpensesList"
import ExpensesFilter from "./ExpensesFilter"


const Expenses = (props) => {
    // console.log(props.items)
    const [filteredYear, setSelectedYear] = useState("2019"); //[value,function] = useState(index0)
    const filterChangeHandler = (selectedValue) => {
        setSelectedYear(selectedValue);
    }
    const filteredExpenses = props.expenses.filter(expense => {
        return(expense.date.getFullYear().toString() === filteredYear);
    });

    return (
        <div>
            <Card className = "expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}  />
                <ExpensesList items={filteredExpenses}/>
            </Card>
        </div>
    )
} 

export default Expenses;    