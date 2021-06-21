import { useState } from "react"; // gagamitin para maginput ng data para sa forms
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState("");
    const titleChangeHandler = (e) => {
        setEnteredTitle(e.target.value);
        // console.log(enteredTitle);
    }

    const [enteredAmount, setEnteredAmount] = useState("");
    const amountChangeHandler = (e) => {
        setEnteredAmount(e.target.value);
        // console.log(enteredAmount);
    }

    const [enteredDate, setEnteredDate] = useState("");
    const dateChangeHandler = (e) => {
        setEnteredDate(e.target.value);
        // console.log(enteredDate);
    }

    const submitHandler = (e) => {
        e.preventDefault(); // hindi mareredirect sa ibang pange pag nagsubmit yung form
    
    const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date (enteredDate)
        }

    props.onSaveExpenseData(expenseData);

    //clears form after submit
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    }

    return (
        <form onSubmit={submitHandler}>
            <div className = "new-expense__controls">
                <div className = "new-expense__control">
                    <label>Title</label>
                    <input
                    type="text"
                    value={enteredTitle}
                    onChange={titleChangeHandler}/>
                </div>

                <div className = "new-expense__control">
                    <label>Amount</label>
                    <input
                    type="number"
                    min="0.01"
                    step="0.01"
                    value={enteredAmount}
                    onChange={amountChangeHandler}/>
                </div>

                <div className = "new-expense__control">
                    <label>Date</label>
                    <input
                    type="date"
                    min="2019-01-01"
                    max="2022-12-31"
                    value={enteredDate}
                    onChange={dateChangeHandler}/>
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="button"> Cancel </button>
                <button type="submit"> Add Expense </button>
            </div>
        </form>
    )
}

export default ExpenseForm;