import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        // console.log(enteredExpenseData);
        const expenseData = {
            ...enteredExpenseData, //... spread operator -> nirereassign niya yung value sa current array
            id: Math.random().toString(), //magiging unique identifier 
        }

        props.onAddExpense(expenseData);
    }
    return (
        <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
        </div>
    )
}

export default NewExpense;