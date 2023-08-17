import React, {useState, useEffect} from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import {Button, Form, FormGroup, Input, Label, Row, Col, Card, CardBody, CardHeader, CardFooter} from 'reactstrap';

const Home = () => {
    const navigate = useNavigate();
    const username = sessionStorage.getItem("UserID");
    const [accounts, setAccounts] = useState([]);
    const fetchURL = "http://localhost:9080/fetchAccounts/" + username;

    const logoutHandler = () => {
        sessionStorage.clear();
        navigate("/login");
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
            <div className="container mt-4 mb-4">
                <Row className="row justify-content-center">
                    <Col className="col-md-8">
                        <Card>
                            <CardHeader>
                                <h2>Hi, {username}!</h2>
                            </CardHeader>
                            <CardBody>
                                <h3>Account List</h3>
                                <ul>
                                    {accounts.map((account) => (
                                    <li key={account.accno}>
                                        <Link to={`/transactionHistory/${account.accno}`}>
                                        {account.accno}
                                        </Link> - Rs. {account.balance}
                                    </li>
                                    ))}
                                </ul>
                            </CardBody>
                            <CardFooter>
                                <Link to="/newAccount"><Button color="primary">Create New Account</Button></Link>
                                <Link to="/withdraw"><Button color="warning">Withdraw Funds</Button></Link>
                                <Link to="/fundtransfer"><Button color="secondary">Transfer Funds</Button></Link>
                                <Button onClick={() => logoutHandler()} color="danger">Logout</Button>
                            </CardFooter>
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

export default Home;