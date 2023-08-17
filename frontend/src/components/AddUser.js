import React, {useState } from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";

const AddUser =()=>{
    const baseURL="http://localhost:9965/saveUsers";
    const navigate = useNavigate();
    const [userid,setUserid] = useState('');
    const [name,setName]= useState('');
    const [aadhaar,setAadhaar]=useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword]= useState('');
    const [mobile,setMobile]=useState('');
    
    
    const useridChangeHandler = (event)=>{
        //alert(event.target.value);
        setUserid(event.target.value);
    };

    const nameChangeHandler = (event)=>{
        setName(event.target.value);
    };

    const aadhaarChangeHandler = (event)=>{
        setAadhaar(event.target.value);
    };

       
    const emailChangeHandler = (event)=>{
        //alert(event.target.value);
        setEmail(event.target.value);
    };
    
    const passwordChangeHandler = (event)=>{
        setPassword(event.target.value);
    };

    const mobileChangeHandler = (event)=>{
        setMobile(event.target.value);
    };

    const submitActionHandler = (event)=>{
        event.preventDefault();
        axios.post(baseURL,{
            userid:userid,
            name:name,
            aadhaarno:aadhaar,
            email :email,
            password:password,
        phoneno: mobile
        })
.then((response)=>{
    alert("Customer "+ name+ " added!");

}).catch(error=>{
    alert("error === "+ error);
});  

};


const cancelHandler =()=>{
    setName('');
    setUserid('');
    setAadhaar('');
    setEmail('');
    setPassword('');
    setMobile('');
}

return(
    <form onSubmit={submitActionHandler}>
        Customer ID:
        <input type="text" value ={userid} onChange={useridChangeHandler} placeholder="Enter Customer ID" required/>

        <br></br>
        Name: 
        <input type="text" value = {name} onChange={nameChangeHandler} placeholder="Enter name" required/>
        
    <br></br>
    
    Aadhaar No:
    <input type="text" value ={aadhaar} onChange = {aadhaarChangeHandler} placeholder = "Enter Aadhaar No" required/>
    <br></br>

Email:
    <input type="email" value ={email} onChange = {emailChangeHandler} placeholder = "Enter E-mail Id" required/>
    <br></br>


Password:
    <input type="password" value ={password} onChange = {passwordChangeHandler} placeholder = "Enter Password" required/>
    <br></br>




Mobile No :
    <input type="text" value ={mobile} onChange = {mobileChangeHandler} placeholder = "Enter Mobile Number" required/>
    <br></br>

    <br></br>
 
 
 
 <button type='submit' >Add Customer </button> 
 
 {/* &nbsp &nbsp &nbsp &nbsp   */}
 
 <button type='submit' onClick = {()=>cancelHandler()}>Cancel</button>       </form>
);

}
export default AddUser;