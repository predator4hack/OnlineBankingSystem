import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {Button, Form, FormGroup, Input, Label, Row, Col, Card, CardBody, CardHeader} from 'reactstrap';

const Login = () => {
    const baseURL = "http://localhost:9080/login";
    const navigate = useNavigate();
    const [userid, setUserid] = useState("");
    const [password, setPassword] = useState("");

    const useridChangeHandler = (event) => {
        setUserid(event.target.value);
    }

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    }

    const submitActionHandler = (event) => {
        event.preventDefault();
        axios.post(baseURL, {
            userId: userid,
            password: password,
        })
        .then((response) => {
            alert(response.data);
            if(response.data === 'Login success') {
                sessionStorage.setItem('UserID', userid);
                navigate("/");
            }
            else {
                sessionStorage.clear();
            }
        }).catch(error => {
            alert("error == " + error);
            sessionStorage.clear();
        })
    }

    const cancelHandler =() =>  {
        setUserid("");
        setPassword("");
    }

    return(
        <div className="container mt-4 mb-4">
            <Row className="row justify-content-center">
                <Col className="col-md-8">
                    <Card>
                        <CardHeader>
                            <h2>Login</h2>
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
                                <Button type="submit" color="primary">Login</Button>
                                <Button type="submit" color="danger" onClick={() => cancelHandler()}>Cancel</Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Login;