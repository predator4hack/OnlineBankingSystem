import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddCustomer from './Components/addCustomer';
import Login from './Components/login';
import Home from './Components/home';
import React, { Component }  from 'react';
import AccountCreate from './Components/accountCreate';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/signup" element={<AddCustomer/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/newAccount" element={<AccountCreate/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
