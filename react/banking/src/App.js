import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddCustomer from './Components/addCustomer';
import React, { Component }  from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddCustomer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
