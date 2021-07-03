import React, {useState} from "react";
import "./NewTransaction.css"
import uniqueId from "../utils";


//pass onNewTransaction props
const NewTransaction = ({onNewTransaction}) => {
    
     // CONTROLLED VARIABLES
    const [titleValue, setTitleValue] = useState('');
    const titleChangeHandler = (e) => {
        setTitleValue(e.target.value);
    }

    const [amountValue, setAmountValue] = useState('');
    const amountChangeHandler = (e) => {
        setAmountValue(e.target.value);
    }
    const [dateValue, setDateValue] = useState('');
    const dateChangeHandler = (e) => {
        setDateValue(e.target.value);
    }

    const addTransaction = (type, e) => {
        e.preventDefault();
        const budgetData =
            {id: uniqueId(),
            title: titleValue,
            amount: parseFloat(amountValue),
            date: new Date(dateValue),
            type: type}

        // error validation for the form
        if (titleValue ==='' || amountValue === '' || dateValue === '') {
            alert ('Please complete the form.');
        } else (
            onNewTransaction(budgetData)
        )

        //empty ulit yung fields after submit
        setTitleValue('');
        setAmountValue('');
        setDateValue('');
    }

    return (
        <div className="new-transaction-form">
            <h1>New Transaction Form</h1>
            <form>
                <div className="form">
                    <label>Title</label>
                    <input
                        type="text"
                        placeholder="Enter title of transaction"
                        autoComplete="off"
                        value={titleValue}
                        onChange={titleChangeHandler}/>
                    
                    <label>Amount</label>
                    <input
                        type="number"
                        placeholder="Enter amount of transaction"
                        min="0.01"
                        step="0.01"
                        autoComplete="off"
                        value={amountValue}
                        onChange={amountChangeHandler}/>

                    <label>Date of Transaction</label>
                    <input
                        type="date"
                        min="2018-01-01"
                        max="2022-12-31"
                        value={dateValue}
                        onChange={dateChangeHandler}/>
            
                    <div className="form-actions">
                        <label>Transaction Type: </label>
                        <button
                            type="submit"
                            className="income-btn"
                            onClick={(e) => addTransaction('Income', e)}>
                            Income
                        </button>

                        <button
                            type="submit"
                            className="expense-btn"
                            onClick={(e) => addTransaction('Expense', e)}>
                            Expense
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default NewTransaction;