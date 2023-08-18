import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {Button, Form, FormGroup, Input, Label, Row, Col, Card, CardBody, CardHeader} from 'reactstrap';

const ChangePassword = () => {
    const base = "http://localhost:9080/changePassword/";
    const navigate = useNavigate();
    const [userid, setUserid] = useState("");
    const [password, setPassword] = useState("");
    const [otp, setOtp] = useState("");

    const useridChangeHandler = (event) => {
        setUserid(event.target.value);
    }

    const passwordChangeHandler = (event) => {
        setPassword(event.target.value);
    }

    const otpChangeHandler = (event) => {
        setOtp(event.target.value);
    }

    const submitActionHandler = (event) => {
        event.preventDefault();
        const baseURL = base + otp;
        axios.put(baseURL, {
            userId: userid,
            password: password,
        })
        .then((response) => {
            alert(response.data);  
            if(response.data === 'Success!')          
                navigate('/login');
        }).catch(error => {
            alert("error == " + error);
            console.log(baseURL);
        })
    }

    const cancelHandler =() =>  {
        setUserid("");
        setPassword("");
        setOtp("");
    }

    return(
        <div className="container mt-4 mb-4">
            <Row className="row justify-content-center">
                <Col className="col-md-8">
                    <Card>
                        <CardHeader>
                            <h2>Change Password</h2>
                        </CardHeader>
                        <CardBody>
                            <Form onSubmit={submitActionHandler} className="form">
                                <FormGroup>
                                    <Label>User ID</Label>
                                    <Input type="text" value={userid} onChange={useridChangeHandler} placeholder="Enter User ID here" required></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label>New Password</Label>
                                    <Input type="password" value={password} onChange={passwordChangeHandler} placeholder="Enter Password here" required></Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label>OTP</Label>
                                    <Input type="number" value={otp} onChange={otpChangeHandler} placeholder="Enter OTP here" required></Input>
                                </FormGroup>
                                <Button type="submit" color="primary">Change Password</Button>
                                <Button color="danger" onClick={() => cancelHandler()}>Cancel</Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default ChangePassword;