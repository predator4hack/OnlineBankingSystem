import React, {useState, useEffect} from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";
import {Button, Table, Row, Col, Card, CardBody, CardHeader, CardFooter, Form, FormGroup, Input, Label} from 'reactstrap';

const AccountStatement = () => {
    const navigate = useNavigate();
    const username = sessionStorage.getItem("UserID");    
    const { accno } = useParams();
    const [transactions, setTransactions] = useState([]);
    const baseURL = "http://localhost:9080/accountStatement/" + accno;
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const logoutHandler = () => {
        sessionStorage.clear();
        navigate("/login");
    }

    const startDateChangeHandler = (event) => {
        setStartDate(event.target.value);
    }

    const endDateChangeHandler = (event) => {
        setEndDate(event.target.value);
    }

    const submitActionHandler = (event) => {
        event.preventDefault();
        axios.post(baseURL, {
            startDate: startDate,
            endDate: endDate
        }).then((response) => {
            setTransactions(response.data.reverse());
        }).catch(error => {
            alert('Error fetching the account statement');
        })
    }
    
    return(
        <div>
            {username != null && 
            <div className="container mt-4 mb-4">
                <Row className="row justify-content-center">
                    <Col className="col-md-8">
                        <Card>
                            <CardHeader>
                                <h2>Account Summary for {accno}</h2>
                            </CardHeader>
                            <CardBody>
                            <Form onSubmit={submitActionHandler} className="form">
                                    <FormGroup>
                                        <Label>Start Date</Label>
                                        <Input type="date" value={startDate} onChange={startDateChangeHandler} required></Input>
                                    </FormGroup>
                                    <FormGroup>
                                        <Label>End Date</Label>
                                        <Input type="date" value={endDate} onChange={endDateChangeHandler} required></Input>
                                    </FormGroup>
                                    <Button type="submit" color="primary">See Account Statement</Button>
                                </Form>
                                <Table>
                                    <thead>
                                        <tr>
                                        <th>From</th>
                                        <th>To</th>
                                        <th>Amount</th>
                                        <th>TimeStamp</th>
                                        <th>Type</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {transactions.map((transaction) => (
                                        <tr key={transaction.id}>
                                            <td>{transaction.accFrom}</td>
                                            {transaction.transType !== 'withdraw' && (
                                            <td>{transaction.accTo}</td>
                                            )}
                                            {transaction.transType === 'withdraw' && (
                                            <td>-</td>
                                            )}
                                            <td style={{ color: transaction.accFrom === Number(accno) ? 'red' : 'green' }}>
                                            {transaction.amount}
                                            </td>
                                            <td>{transaction.timestamp}</td>
                                            <td>{transaction.transType}</td>
                                        </tr>
                                        ))}
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
            }
            {username == null && 
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
        </div>
    )
}

export default AccountStatement;