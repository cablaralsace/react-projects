import "./Balance.css"


//pass income and expense props
const Balance = ( {income, expense} ) => {
    return (
        <div className="balance">
            <div className="available-balance">
                <h1>Available Balance</h1>
                <h3> ₱ {income - expense} </h3>
            </div>
            <div className="total-income">
                <h1>Total Income</h1>
                <h3> ₱ {income} </h3>
            </div>
            <div className="total-expenses">
                <h1>Total Expenses</h1>
                <h3> ₱ {expense} </h3>
            </div>

        </div>
    )
}

export default Balance;