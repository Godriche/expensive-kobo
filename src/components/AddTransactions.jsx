import React from 'react'
import { Container} from 'react-bootstrap'
import AddIncomeTransaction from './AddIncomeTransaction'
import AddExpenseTransaction from './AddExpenseTransaction'

const AddTransactions = () => {
  return (
    <Container className="add-transaction mt-4 d-flex"> 
      <AddIncomeTransaction />
      <AddExpenseTransaction />
    </Container>
  )
  }

export default AddTransactions
