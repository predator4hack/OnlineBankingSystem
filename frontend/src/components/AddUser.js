
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';

const AddUser = () => {
    const baseURL = "http://localhost:9080/saveUser";
    const navigate = useNavigate();
    const [userid, setUserid] = useState("");
    const[name, setName] = useState("");
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[aadharno, setAadharno] = useState("");
    const[phoneno, setPhoneno] = useState("");

    const nameChangeHandler = (event) => {

        setName(event.target.value);
    };

    const useridChangeHandler = (event) => {
        setUserid(event.target.value);
    };

    const emailChangeHandler = (event) => {
        setEmail(event.target.value);

    };

    
    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);

    };

    
    const aadharnoChangeHandler = (event) => {
        setAadharno(event.target.value);

    };

    const phonenoChangeHandler = (event) => {
        setPhoneno(event.target.value);

    };

    const submitActionHandler = (event) => {
        event.preventDefault();
        axios.post(baseURL, {
                userid:userid,
                name:name,
                aadharno:aadharno,                
                email:email,
                password:password,
                phoneno:phoneno
            })
            .then((response) => {
                alert("User"+ name + " account created!");

            })
            .catch (error => {
                alert("error===="+error);
            });
    };

    const cancelHandler = () => {
        setUserid("");
        setName("");
        setAadharno("");
      
       
        setEmail("");
        setPassword("");
        setPhoneno("");
        

    }


    return(


        <form onSubmit={submitActionHandler}>

            User ID: 
            <input type="text" value={userid} onChange={useridChangeHandler} placeholder="Enter User ID" required/> <br>
            </br>

            
            Name: 
            <input type="text" value={name} onChange={nameChangeHandler} placeholder="Enter Name" required/> <br>
            </br>

            Aadhar No.: 
            <input type="text" value={aadharno} onChange={aadharnoChangeHandler} placeholder="Enter AADHAR number" required/> <br>
            </br>
            

            
            Email: 
            <input type="email" value={email} onChange={emailChangeHandler} placeholder="Enter Email" required/> <br>
            </br>

            Password: 
            <input type="password" value={password} onChange={passwordChangeHandler} placeholder="Enter Password" required/> <br>
            </br>

            
            Phone No: 
            <input type="text" value={phoneno} onChange={phonenoChangeHandler} placeholder="Enter Phone Number" required/> <br>
            </br>

            <button type='submit' >Add User</button>

            <button type='submit' onClick={()=>cancelHandler()}>Cancel</button>
        </form>
    );

}

export default AddUser;

// const UserList = () => {
//     const [users, setUsers] = useState([]);


//     useEffect(() => {
//         axios.get('http://localhost:9080/saveCustomer')
//     })
// }
