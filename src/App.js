import React from 'react';
import Header from './components/Header';
import AccountBalance from './components/AccountBalance';
import AddTransactions from './components/AddTransactions';
import IncomeList from './components/IncomeList';
import { Container} from 'react-bootstrap'
import { GlobalContextProvider } from './context/GlobalState';
import ExpenseList from './components/ExpenseList';
import Footer from './components/Footer';



function App() {
  return (
    <GlobalContextProvider>
    <div className="">
      <Header />
      <AccountBalance />
      <AddTransactions />
      <Container fluid className="transaction-history">
      <h3 className=" text-center text-light mt-3 pt-3"><strong>Transaction <span className="">History</span></strong></h3>
      <IncomeList />
      <ExpenseList />
      </Container>
    </div>
    <Footer/>
    </GlobalContextProvider>
  );
}

export default App;
