import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddUser from './components/AddUser';
import './App.css';

function App() {

    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AddUser/>}/>
        </Routes>
      </BrowserRouter>
    );
    // <div className="App">
    //   <h3>Our Banking App</h3>
    //   Username<input type="text"></input>
    // </div>
  
}

export default App;
