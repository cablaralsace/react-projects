import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"
import { useState } from "react"

const NewExpense = (props) => {

    //new state for button, mainly for UI
    const [isFormActive, setFormActive] = useState (false); // DEFAULT useState (false) meaning hindi kita yung form

    const formActiveHandler = () => { //STATE: makikita yung form
        setFormActive (true);
    }
    
    const formInactiveHandler = () => { //STATE: hidden yung form
        setFormActive (false);
    }

    // for saving data
    const saveExpenseDataHandler = (enteredExpenseData) => {
        // console.log(enteredExpenseData);
        const expenseData = {
            ...enteredExpenseData, //... spread operator -> nirereassign niya yung value sa current array
            id: Math.random().toString(), //magiging unique identifier 
        }

        props.onAddExpense(expenseData);
        setFormActive(false); //after mag-submit ng bagong expenseData, hindi ulit makikita  yung form
    }
    return (
        <div className="new-expense">
            {!isFormActive && //SCENARIO 1: kung hindi active yung form, button lang ang makikita
            <button onClick={formActiveHandler}> Add New Expense </button>}

            {isFormActive && //SCENARIO 2: kung active, makikita yung mismong form na may submit and cancel button, pero pagpindot ng cancel, magiging inactive ulit yung form
            <ExpenseForm
            onSaveExpenseData={saveExpenseDataHandler}
            onCancel={formInactiveHandler}/>}
        </div>
    )
}

export default NewExpense;