import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {Button, Form, FormGroup, Input, Label, Row, Col, Card, CardBody, CardHeader} from 'reactstrap';

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
            localStorage.setItem('UserID', userid);
            window.location.href = '/';
        }).catch(error => {
            alert("error == " + error);
            localStorage.clear();
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
        <div className="container mt-4 mb-4">
            <Row className="row justify-content-center">
                <Col className="col-md-8">
                    <Card>
                        <CardHeader>
                            <h2>Register</h2>
                        </CardHeader>
                        <CardBody>
                            <Form onSubmit={submitActionHandler} className="form">
                                <FormGroup>
                                    <Label>User ID</Label>
                                    <Input type="text" value={userid} onChange={useridChangeHandler} placeholder="Enter User ID here" required></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Password</Label>
                                    <Input type="password" value={password} onChange={passwordChangeHandler} placeholder="Enter Password here" required></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Name</Label>
                                    <Input type="text" value={name} onChange={nameChangeHandler} placeholder="Enter name" required></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Email</Label>
                                    <Input type="email" value={email} onChange={emailChangeHandler} placeholder="Enter email" required></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Mobile</Label>
                                    <Input type="text" value={mobile} onChange={mobileChangeHandler} placeholder="Enter mobile" required></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label>Aadhar</Label>
                                    <Input type="text" value={aadhar} onChange={aadharChangeHandler} placeholder="Enter aadhar" required></Input>
                                </FormGroup>
                                <Button type="submit" color="primary">Sign Up</Button>
                                <Button type="submit" color="danger" onClick={() => cancelHandler()}>Cancel</Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default AddCustomer;