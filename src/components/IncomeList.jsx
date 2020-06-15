import React, {useContext} from 'react'
import { Container} from 'react-bootstrap'
import { GlobalContext } from '../context/GlobalState'
import IncomeTrx from './IncomeTrx'

const IncomeList = () => {
  const {incomeTransactions} = useContext(GlobalContext)
  console.log(incomeTransactions)

  return (
    <Container className="income-transaction">
      <ul className="income-list m-1"  >
        {incomeTransactions.map(incomeTransaction => (
         <IncomeTrx key={incomeTransaction.id} incomeTransaction={incomeTransaction} />
        ))}
      </ul>
    </Container>
  )
}

export default IncomeList
