import AddUser from './components/AddUser';
import React, { Component }  from 'react';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';


// import logo from './logo.svg';
import './App.css';


// function App() {
//   return (

//     <BrowserRouter>

//       <Switch>

//         <Route path = "/" exact component ={<AddUser/>}/>
//       </Switch>
//     </Router>
//     // <div className="App">
      
      
      
//     //  <br></br>
//     //  {/* <br></br>
//     //  <br>
//     //  </br>
//     //  <br></br>
//     //  <br></br>
//     //  <br>
//     //  </br>
//     //  <br></br>
//     //  <br></br>
//     //  <br>
//     //  </br>
//     //   <h1>Welcome to Wells Fargo</h1>
//     //   <input type="button" value ="Let's Start!"></input>
//     // </div> */}
    
    

  
//   );
// }



function App() {
  // y
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
// export default App;
