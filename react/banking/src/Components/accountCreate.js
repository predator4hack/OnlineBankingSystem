import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {Button, Form, FormGroup, Input, Label, Row, Col, Card, CardBody, CardHeader} from 'reactstrap';

const AccountCreate = () => {
    const navigate = useNavigate();
    const userid = sessionStorage.getItem("UserID");
    const [accType, setAccType] = useState("");
    const balance = 0; 
    const baseURL = "http://localhost:9080/createAccount/" + userid;

    const accTypeChangeHandler = (event) => {
        setAccType(event.target.value);
    }

    const submitActionHandler = (event) => {
        event.preventDefault();
        axios.post(baseURL, {
            accType: accType,
            balance: balance
        })
        .then((response) => {
            alert("Account created!");
            navigate("/");
        }).catch(error => {
            alert("error == " + error);
            sessionStorage.clear();
        })
    }

    const cancelHandler =() =>  {
        setAccType("");
    }

    const LoginHandler = () => {
        navigate("/login");
    }

    const SignupHandler = () => {
        navigate("/signup");
    }

    return(
        <div>
            {userid == null && 
                <div className="container">
                    <h2>Hi, you are not logged in!</h2>
                    <Button onClick={() => LoginHandler()} color="primary">Login</Button>
                    <Button onClick={() => SignupHandler()} color="primary">Signup</Button>
            </div>
            }
            {userid != null &&
            <div className="container mt-4 mb-4">
                <Row className="row justify-content-center">
                    <Col className="col-md-8">
                        <Card>
                            <CardHeader>
                                <h2>Create Account</h2>
                            </CardHeader>
                            <CardBody>
                                <Form onSubmit={submitActionHandler} className="form">  
                                    <FormGroup>
                                        <Label>User ID</Label>
                                        <Input value={userid} disabled></Input>
                                    </FormGroup>                 
                                    <FormGroup>
                                        <Label>Account Type</Label>
                                        <Input type="text" value={accType} onChange={accTypeChangeHandler} placeholder="Enter account type" required></Input>
                                    </FormGroup>
                                    <Button type="submit" color="primary">Create Account</Button>
                                    <Button type="submit" color="danger" onClick={() => cancelHandler()}>Cancel</Button>
                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
            }
        </div>
    );
}

export default AccountCreate;