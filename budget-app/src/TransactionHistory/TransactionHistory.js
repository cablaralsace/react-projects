import "./TransactionHistory.css"
import {TiTrash, TiWarning} from "react-icons/ti";

//pass transactions and onDeleteTransaction props
const TransactionHistory = ({transactions, onDeleteTransaction}) => {

    //pag empty yung transactions list
    if (transactions.length === 0) {
        return (
            <h3 className="no-transactions">
                <TiWarning/> No transactions found.
            </h3>
        )
    }

    //date sorter
    const sortByDate = (a, b) => {
        return a.date-b.date;
    }

    return (
        <div className="transaction-history-container">
            <ul className="transaction-list">
                {
                transactions.sort(sortByDate).map((data)=>
                    <li className="transactions" key={data.id}>
                        {/* each child on the list should have a unique key prop*/}
                        <p>
                            {data.date.toLocaleString('default', {month: 'short'})}-
                            {data.date.getDate()}-
                            {data.date.getFullYear()}
                        </p>
                        <p>{data.type}</p>
                        <p>{data.title}</p>
                        <p>₱ {data.amount}</p>
                        
                        <button
                            type="button"
                            className="transaction-delete-btn"
                            onClick={() => onDeleteTransaction(data.id)}>
                        <TiTrash/>
                        </button>
                    </li>
                    )
                }
            </ul>
        </div>
    )
}

export default TransactionHistory;