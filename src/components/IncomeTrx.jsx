import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const IncomeTrx = ({incomeTransaction}) => {
  const {deleteTransaction} = useContext(GlobalContext)
  return (
    <div>
       <li className="income-items text-success bg-light mt-2">
          <span className="income-text">{incomeTransaction.incomeText}</span>
          <span className="income-amount">${incomeTransaction.incomeAmount}</span>
          <button 
          className="delete-btn" 
          onClick={()=>deleteTransaction(incomeTransaction.id)}> <FontAwesomeIcon icon={faTrash} /></button>
        </li>
    </div>
  )
}

export default IncomeTrx
