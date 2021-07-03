import React, { useState, useEffect } from "react";
import "./App.css"
import Header from "./Header/Header";
import Balance from "./Balance/Balance";
import NewTransaction from "./NewTransaction/NewTransaction";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import Clock from "./Clock/Clock";
import uniqueId from "./utils";


const transactionData = [
    {id: uniqueId(),
        title: "Salary",
        amount: 10000,
        date: new Date(2020, 0, 11),
        type: "Income"},

    {id: uniqueId(),
        title: "Grocery",
        amount: 1000,
        date: new Date(2020, 2, 8),
        type: "Expense"},

    {id: uniqueId(),
        title: "Gadgets",
        amount: 4000,
        date: new Date(2020, 2, 11),
        type: "Expense"}
];


const App = () => {

    // initialization of states
    const [income, setIncome] = useState (0);
    const [expense, setExpense] = useState (0);
    const [transactions, setTransactions] = useState (transactionData);

    const calculateBudget = () => {
        let income = 0, expense = 0;

        // reflects on balance.js
        transactions.forEach((data)=> { 
            if (data.type==="Income") { //if type is income, add siya sa income
                income += data.amount; 
            } else if (data.type==="Expense") { //else sa expense papasok
                expense += data.amount;
            }
        });

        setIncome(income);
        setExpense(expense);
    }

    const handleAddNewTransaction = data => {
        let newTransactions = [...transactions, data]; // clone transactionData and add new data
        setTransactions(newTransactions); //update transaction history
    }

    const handleDeleteTransaction = id => {
        //if data id is not yung id nung dinelete mo, yun yung items na ididisplay sa record
        const newTransactions = transactions.filter((data)=> data.id !== id);
        setTransactions(newTransactions); //update transaction history
        console.log(newTransactions);
    }

    // useEffect - para hindi mag-infinite loop / too many re-renders

    // first-time rendering, isang beses lang mangyayari
    useEffect(() => {
        calculateBudget();
    }, []);

    //and once the state of transactions change or get updated, calls calculateBudget() function again
    useEffect(() => {
        calculateBudget();
    }, [transactions]);

    return (
        <div className="App">
            <div className="header-main-container">
                <div className="header-container">
                    <Header/>
                </div>
                <div className="clock-container">
                    <Clock/>
                </div>
            </div>
            <div className="app-container">
                <div className="app-balance">
                    <Balance
                        income={income}
                        expense={expense}/>
                </div>
                <div className="history-container">
                    <h1>Transactions Record</h1>
                    <TransactionHistory
                        transactions={transactions}
                        onDeleteTransaction={handleDeleteTransaction}/>`
                </div>
                <div className="form-container">
                    <NewTransaction
                        onNewTransaction={handleAddNewTransaction}/>
                </div>
            </div>
        </div>
    )
}

export default App;