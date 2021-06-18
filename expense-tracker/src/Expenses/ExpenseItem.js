import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";


//class-based approach use render
//function-based approach use return
const ExpenseItem = (props) => {
    return ( 
        <Card>
            <div className="expense-item">
            <ExpenseDate/>
            <h2>Car Insurance</h2>
                <div className="expense-item-description">
                    <div className="expense-item__price">
                    $ 100,000.00    
                    </div>
                </div> 
            </div>
        </Card>
    );
};

export default ExpenseItem;