import React, {useContext} from 'react'
import { Container} from 'react-bootstrap'
import { GlobalContext } from '../context/GlobalState'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ExpenseList = () => {
  const {deleteTransaction} = useContext(GlobalContext)
  const {expenseTransactions} = useContext(GlobalContext)
  
  return (
    <Container className="expense-transaction">
      <ul className="expense-list m-1"  >
        {expenseTransactions.map(expenseTransaction => (
          <li className="expense-items text-danger bg-light mt-2" key={expenseTransaction.id}>
          <span className="expense-text">{expenseTransaction.expenseText}</span>
          <span className="expense-amount">${expenseTransaction.expenseAmount}</span>
          <button className="delete-btn"  onClick={()=>deleteTransaction(expenseTransaction.id)}>
          <FontAwesomeIcon icon={faTrash} />
          </button>
        </li>
        ))}
      </ul>
    </Container>
  )
}

export default ExpenseList
