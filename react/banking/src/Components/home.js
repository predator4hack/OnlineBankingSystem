import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {Button, Form, FormGroup, Input, Label, Row, Col, Card, CardBody, CardHeader} from 'reactstrap';

const Home = () => {
    const navigate = useNavigate();
    const username = sessionStorage.getItem("UserID");
    
    const newAccountGeneration = () => {
        navigate("/newAccount");
    }

    const LoginHandler = () => {
        navigate("/login");
    }

    const SignupHandler = () => {
        navigate("/signup");
    }
    
    return(
        <div>
            {username != null && 
            <div className="container">
                <h2>Hi, {username}!</h2>
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