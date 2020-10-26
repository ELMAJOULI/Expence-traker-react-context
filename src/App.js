import React from 'react';
import './App.css';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomExpences from './components/IncomExpences';
import TransactionList from './components/TransactionList';
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
     <GlobalProvider>
      <div className="container">
         <Header/>
         <Balance/>
         <IncomExpences/>
         <TransactionList/>
         <AddTransaction/>
      </div>
     </GlobalProvider>
    
   
  );
}

export default App;
