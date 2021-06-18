import "./ExpenseDate.css"

const ExpenseDate = (props) => {
    return (
        <div className="expense-date">
            <div className="expense-date__month">July</div>
            <div className="expense-date__year">2021</div>
            <div className="expense-date__day">18</div>
        </div>
    );
}

export default ExpenseDate;