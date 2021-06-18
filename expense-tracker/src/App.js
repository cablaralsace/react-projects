import React, { useState } from "react";
import "./App.css";
import ExpenseItem from "./Expenses/ExpenseItem";
import Card from "./UI/Card";
// const DUMMY_EXPENSES = [
//   {
//     title: "Car Insurance",
//     amount: "294.67",
//     date: new Date(2020, 2, 28),
//   },
//   {
//     title: "Car Insurance",
//     amount: "294.67",
//     date: new Date(2021, 2, 28),
//   },
//   {
//     title: "Car Insurance",
//     amount: "294.67",
//     date: new Date(2019, 2, 28),
//   },
//   {
//     title: "Car Insurance",
//     amount: "294.67",
//     date: new Date(2022, 11, 28),
//   },
// ]

const App = () => {
  return (
  <div className="App">
    <Card className="expenses">
      <ExpenseItem/>
      <ExpenseItem/>
    </Card>
  </div>
  );
};

export default App;