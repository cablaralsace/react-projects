import React, { useState } from "react";
import "./App.css";
import Expenses from "./Expenses/Expenses";
import NewExpense from "./NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    title: "Car Insurance",
    amount: "150",
    date: new Date(2020, 0, 11),
  },
  {
    title: "House Insurance",
    amount: "500",
    date: new Date(2021, 1, 12),
  },
  {
    title: "Computer Insurance",
    amount: "800",
    date: new Date(2019, 2, 13),
  },
  {
    title: "Phone Insurance",
    amount: "500",
    date: new Date(2021, 3, 14),
  },
]


const App = () => {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  return (
  <div className="App">
    <NewExpense
    onAddExpense = {addExpenseHandler}/>

    {/* pinapasa na as property */}
   <Expenses expenses={expenses}/> 
  </div>
  );
};

export default App;