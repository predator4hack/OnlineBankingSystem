import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddCustomer from './Components/addCustomer';
import Login from './Components/login';
import Home from './Components/home';
import React, { Component }  from 'react';
import AccountCreate from './Components/accountCreate';
import Withdraw from './Components/withdraw';
import FundTransfer from './Components/fundTransfer';
import AccountDetails from './Components/accountDetails';
import TransactionHistory from './Components/transactionHistory';
import ChangePassword from './Components/changePassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/signup" element={<AddCustomer/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/newAccount" element={<AccountCreate/>}/>
        <Route path="/withdraw" element={<Withdraw/>}/>
        <Route path="/fundtransfer" element={<FundTransfer/>}/>
        <Route path="/accountDetails/:accno" element={<AccountDetails/>}/>
        <Route path="/transactionHistory/:accno" element={<TransactionHistory/>}/>
        <Route path="/changePassword" element={<ChangePassword/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
