import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddCustomer = () => {
    const baseURL = "http://localhost:9080/saveCustomer";
    const navigate = useNavigate();
    const [userid, setUserid] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [aadhar, setAadhar] = useState("");

    const useridChangeHandler = (event) => {
        setUserid(event.target.value);
    }

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    }

    const mobileChangeHandler = (event) => {
        setMobile(event.target.value);
    }

    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    }

    const aadharChangeHandler = (event) => {
        setAadhar(event.target.value);
    }

    const submitActionHandler = (event) => {
        event.preventDefault();
        axios.post(baseURL, {
            userId: userid,
            password: password,
            name: name,
            email: email,
            mobile: mobile,
            aadhar: aadhar
        })
        .then((response) => {
            alert("Customer " + name + " added!");
        }).catch(error => {
            alert("error == " + error);
        })
    }

    const cancelHandler =() =>  {
        setUserid("");
        setName("");
        setPassword("");
        setEmail("");
        setMobile("");
        setAadhar("");
    }

    return(
        <form onSubmit={submitActionHandler}>
            UserId:
            <input type="text" value={userid} onChange={useridChangeHandler} placeholder="Enter User ID here" required/><br/>
            Password:
            <input type="password" value={password} onChange={passwordChangeHandler} placeholder="Enter Password here" required/><br/>
            Name:
            <input type="text" value={name} onChange={nameChangeHandler} placeholder="Enter name" required/><br/>
            Email:
            <input type="email" value={email} onChange={emailChangeHandler} placeholder="Enter email" required/><br/>
            Mobile:
            <input type="text" value={mobile} onChange={mobileChangeHandler} placeholder="Enter mobile" required/><br/>
            Aadhar:
            <input type="text" value={aadhar} onChange={aadharChangeHandler} placeholder="Enter aadhar" required/><br/>
            
            <button type="submit">Sign Up</button>
            <button type="submit" onClick={() => cancelHandler()}>Cancel</button>
        </form>
    );
}

export default AddCustomer;