import React, {useState, useEffect} from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import {Button, Form, FormGroup, Input, Label, Row, Col, Card, CardBody, CardHeader, CardFooter} from 'reactstrap';

const FundTransfer = () => {
    const navigate = useNavigate();
    const userid = sessionStorage.getItem("UserID");
    const [accounts, setAccounts] = useState([]);
    const [amount, setAmount] = useState(0.0);
    const [accno, setAccno] = useState(0);
    const [accto, setAccto] = useState(0);
    const [transType, setTransType] = useState('IMPS');
    const types = ['IMPS', 'NEFT', 'RTGS'];
    const fetchURL = "http://localhost:9080/fetchAccounts/" + userid;
    const baseURL = "http://localhost:9080/transact";

    const fetchAccounts = () => {
        axios.get(fetchURL).then((response) => {
            setAccounts(response.data);
            setAccno(response.data[0].accno);
        }).catch(error => {
            alert('Error fetching the accounts!');
        })
    }

    useEffect(() => {
        fetchAccounts();
    }, []);

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    }

    const accnoChangeHandler = (event) => {
        setAccno(event.target.value);
    }

    const acctoChangeHandler = (event) => {
        setAccto(event.target.value);
    }

    const transTypeChangeHandler = (event) => {
        setTransType(event.target.value);
    }

    const submitActionHandler = (event) => {
        event.preventDefault();
        axios.post(baseURL, {
            accFrom: accno,
            accTo: accto,
            amount: amount,
            transType: transType
        })
        .then((response) => {
            alert(response.data);
            navigate("/");
        }).catch(error => {
            alert("error == " + error);
        })
    }

    const cancelHandler =() =>  {
        setAmount(0);
        setAccno(accounts[0]);
        setAccto(0);
        setTransType("IMPS");
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
                                <h2>Withdraw Funds</h2>
                            </CardHeader>
                            <CardBody>
                                <Form onSubmit={submitActionHandler} className="form">  
                                    <FormGroup>
                                        <Label>User ID</Label>
                                        <Input value={userid} disabled></Input>
                                    </FormGroup>                 
                                    <FormGroup>
                                        <Label>Select your Account</Label>
                                        <select id="account" value={accno} onChange={accnoChangeHandler}>
                                            {accounts.map((account) => (
                                            <option key={account.accno} value={account.accno}>
                                                {account.accno}
                                            </option>
                                            ))}
                                        </select>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Select Transaction Type</Label>
                                        <select id="transType" value={transType} onChange={transTypeChangeHandler}>
                                            {types.map((trans) => (
                                            <option key={trans} value={trans}>
                                                {trans}
                                            </option>
                                            ))}
                                        </select>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>Receiver's Account Number</Label>
                                        <Input type="number" value={accto} onChange={acctoChangeHandler} placeholder="Enter receiver's account number" required></Input>
                                    </FormGroup> 
                                    <FormGroup>
                                        <Label>Amount</Label>
                                        <Input type="number" value={amount} onChange={amountChangeHandler} placeholder="Enter amount" required></Input>
                                    </FormGroup>      
                                    <Button type="submit" color="primary">Transfer Funds</Button>
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

export default FundTransfer;