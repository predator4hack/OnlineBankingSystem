import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {Button, Form, FormGroup, Input, Label, Row, Col, Card, CardBody, CardHeader} from 'reactstrap';

const Home = () => {
    const navigate = useNavigate();
    const username = sessionStorage.getItem("UserID");
    const [accounts, setAccounts] = useState([]);
    const fetchURL = "http://localhost:9080/fetchAccounts/" + username;
    
    const newAccountGeneration = () => {
        navigate("/newAccount");
    }

    const LoginHandler = () => {
        navigate("/login");
    }

    const SignupHandler = () => {
        navigate("/signup");
    }

    const fetchAccounts = () => {
        axios.get(fetchURL).then((response) => {
            setAccounts(response.data);
        }).catch(error => {
            alert('Error fetching the accounts!');
        })
    }

    useEffect(() => {
        fetchAccounts();
    }, []);
    
    return(
        <div>
            {username != null && 
            <div className="container">
                <h2>Hi, {username}!</h2>
                <h3>Account List</h3>
                <ul>
                {accounts.map((account) => (
                    <li>{account}</li>
                ))}
                </ul>
                <Button onClick={() => newAccountGeneration()} color="primary">Create New Account</Button>
            </div>
            }
            {username == null && 
            <div className="container">
                <h2>Hi, you are not logged in!</h2>
                <Button onClick={() => LoginHandler()} color="primary">Login</Button>
                <Button onClick={() => SignupHandler()} color="primary">Signup</Button>
            </div>
            }
        </div>
    )
}

export default Home;