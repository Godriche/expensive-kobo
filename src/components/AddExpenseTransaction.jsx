import React, {useContext, useState} from 'react'
import { Container, Button, Modal} from 'react-bootstrap'
import { v4 as uuidv4} from 'uuid'
import { GlobalContext } from '../context/GlobalState';


const AddExpenseTransaction = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
      // update expense state

   const {addExpense} = useContext(GlobalContext)

  const [expense, setExpense] = useState({
    expenseText: "",
    expenseAmount: ""
  })

  const {expenseAmount, expenseText} = expense

  const updateExpense = e => {
    setExpense({...expense, [e.target.name]: e.target.value})
  }

  const submitExpenseUpdate = e => {
    e.preventDefault()
      
    const newExpenseTransaction = {
      id: uuidv4(),
      expenseText,
      expenseAmount: parseFloat(expenseAmount)
    }
    addExpense(newExpenseTransaction)
    setExpense({
      expenseText: "",
      expenseAmount: ""
    })
  }

  return (
    <Container className="text-center">
     <div className="row">
     <div className=" col expense-group">
       <Button variant="danger" className="add-btn" onClick={handleShow}>
        Add Expense +
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>New Expense Transaction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={submitExpenseUpdate}>
        <div className="input-group expense">
          <input 
          required
          type="text" 
          name='expenseText'
          value={expenseText}
          placeholder="Add Expense" 
          autoComplete="off"
          onChange = {updateExpense}
          />
          <input 
          required
          type="number" 
          name='expenseAmount'
          value={expenseAmount}
          placeholder="Enter Amount" 
          autoComplete="off"     
          onChange = {updateExpense}      
          />
          <input type="submit" value="Submit"/>
        </div>
      </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
      </div>
     </div>     
    </Container>
  )

}

export default AddExpenseTransaction
