import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {Button, Form, FormGroup, Input, Label, Row, Col, Card, CardBody, CardHeader} from 'reactstrap';

const Home = () => {
    var username = localStorage.getItem("UserID");
    if (username == null)
    {
        username = "Anonymous";
    }
    
    return(
        <div>
            Hello, {username}!
        </div>
    )
}

export default Home;