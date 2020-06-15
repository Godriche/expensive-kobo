import React, {useContext, useState} from 'react'
import { Container, Button, Modal} from 'react-bootstrap'
import { v4 as uuidv4} from 'uuid'
import { GlobalContext} from '../context/GlobalState';


const AddIncomeTransaction = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
      // update income state

  const {addIncome} = useContext(GlobalContext)

  const [income, setIncome] = useState({
    incomeText: "",
    incomeAmount: ""
  })

  const {incomeAmount, incomeText} = income

  const updateIncome = e => {
    setIncome({...income, [e.target.name]: e.target.value})
    console.log(income)
  }

  const submitIncomeUpdate = e => {
    e.preventDefault()
    const newIncomeTransaction = {
      id: uuidv4(),
      incomeText,
      incomeAmount: parseFloat(incomeAmount)
    }
    addIncome(newIncomeTransaction)

    setIncome({
      incomeText: "",
      incomeAmount: ""
    })
  }

  return (
    <Container className="text-center">
     <div className="row">
     <div className=" col income-group">
       <Button variant="success" className="add-btn" onClick={handleShow}>
        Add Income +
      </Button>
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title className="text-success font-weight-bold font-italic">New Income Transaction</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={submitIncomeUpdate}>
        <div className="input-group income">
          <input 
          required
          type="text" 
          name='incomeText'
          value={incomeText}
          placeholder="Add Income" 
          autoComplete="off"
          onChange = {updateIncome}
          />
          <input 
          required
          type="number" 
          name='incomeAmount'
          value={incomeAmount}
          placeholder="Enter Amount" 
          autoComplete="off"     
          onChange = {updateIncome}      
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

export default AddIncomeTransaction
