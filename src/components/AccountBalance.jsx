import React, { useContext} from 'react'
import { Container} from 'react-bootstrap'
import { GlobalContext } from '../context/GlobalState'

const AccountBalance = () => {
  const {incomeTransactions, expenseTransactions} = useContext(GlobalContext)
  const allIncomeAmounts = incomeTransactions.map(incomeTransaction => (incomeTransaction = incomeTransaction.incomeAmount

  ))

  const allExpenseAmounts = expenseTransactions.map(expenseTransaction => (expenseTransaction = expenseTransaction.expenseAmount

    ))

  const incomeTotal = 
  allIncomeAmounts.reduce((acc, item) => 
  (acc += item), 0).toFixed(2)

  const expenseTotal = 
  allExpenseAmounts.reduce((acc, item) => 
  (acc += item), 0).toFixed(2)

  const percentageGrowth =(expenseTotal/incomeTotal) * 100
  console.log(percentageGrowth)

  
  return (
    <Container className=" account-balance pt-2 mt-5">
      <div className="row text-center">
        <div className="col income">
          <p>Income</p>
          <p><strong>+${incomeTotal}</strong></p>
        </div>
        <div className="col expense">
          <p>Expenses</p>
          <p><strong>-${expenseTotal}</strong></p>
        </div>
        <div className="col growth-rate">
          <p>%Growth</p>
          <p><strong>{percentageGrowth.toFixed(2)}%</strong></p>
        </div>
      </div>
      <div className="row balance">
       <div className="col">
       <h3 className="text-light text-center bg-success font-weight-bolder p-3">
       Bal: ${(incomeTotal - expenseTotal).toFixed(2)}</h3>
       </div>
      </div>
    </Container>
  )
}

export default AccountBalance
