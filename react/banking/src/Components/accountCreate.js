import React, {useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import {Button, Form, FormGroup, Input, Label, Row, Col, Card, CardBody, CardHeader, CardFooter} from 'reactstrap';

const AccountCreate = () => {
    const navigate = useNavigate();
    const userid = sessionStorage.getItem("UserID");
    const [accType, setAccType] = useState("Savings");
    const tempDate = new Date();
    const openingDate = tempDate.getDate() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getFullYear(); 
    const [branch, setBranch] = useState("Bangalore");
    const [balance, setBalance] = useState(1000);
    const baseURL = "http://localhost:9080/createAccount/" + userid;
    const typeOptions = ['Savings', 'Salary', 'Checking'];
    const branchOptions = ['Bangalore', 'Hyderabad', 'Chennai', 'Mumbai', 'Delhi', 'Kolkata', 'Pune'];

    const accTypeChangeHandler = (event) => {
        setAccType(event.target.value);
    }

    const branchChangeHandler = (event) => {
        setBranch(event.target.value);
    }

    const balanceChangeHandler = (event) => {
        setBalance(event.target.value);
    }

    const submitActionHandler = (event) => {
        event.preventDefault();
        axios.post(baseURL, {
            acctype: accType,
            balance: balance,
            openingDate: openingDate,
            branch: branch
        })
        .then((response) => {
            alert("Account created!");
            navigate("/");
        }).catch(error => {
            alert("error == " + error);
        })
    }

    const cancelHandler =() =>  {
        setAccType("Savings");
        setBalance(1000);
        setBranch("Bangalore");
    }

    return(
        <div>
            {userid == null && 
                <div className="container">
                    <Row className="row justify-content-center">
                        <Col className="col-md-8">
                            <Card>
                                <CardHeader>
                                    <h2>Hi, you are not logged in!</h2>
                                </CardHeader>
                                <CardFooter>
                                    <Link to="/login"><Button color="primary">Login</Button></Link>
                                    <Link to="/signup"><Button color="warning">Signup</Button></Link>
                                </CardFooter>
                            </Card>
                        </Col>
                    </Row>
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
                                        <select id="accType" value={accType} onChange={accTypeChangeHandler}>
                                            {typeOptions.map((op) => (
                                            <option key={op} value={op}>
                                                {op}
                                            </option>
                                            ))}
                                        </select>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Balance</Label>
                                        <Input type="number" value={balance} onChange={balanceChangeHandler} placeholder="Enter balance" required></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Date of Opening</Label>
                                        <Input type="text" value={openingDate} disabled></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Branch</Label>
                                        <select id="branch" value={branch} onChange={branchChangeHandler}>
                                            {branchOptions.map((op) => (
                                            <option key={op} value={op}>
                                                {op}
                                            </option>
                                            ))}
                                        </select>
                                    </FormGroup>
                                    <Button type="submit" color="primary">Create Account</Button>
                                    <Button color="danger" onClick={() => cancelHandler()}>Cancel</Button>
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