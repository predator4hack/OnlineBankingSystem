import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../../assets/logo.png";
import Input from "../Input.js";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Sidebar = () => {
    const baseURL = `http://${process.env.REACT_APP_API_URL}/changePassword`;
    const navigate = useNavigate();
    const [user, setUser] = useState({
        userId: "",
        password: "",
        otp: "",
    });
    const submitFormHandler = (e) => {
        e.preventDefault();
        axios
            .put(`${baseURL}/${user.otp}`, {
                userId: user.userId,
                password: user.password,
            })
            .then((res) => {
                console.log(res);
                toast.success(res.data.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                navigate("/login");
            })
            .catch((error) => {
                toast.error(`Error: ${error.message}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            });
    };

    return (
        <Container>
            <LogoWrapper>
                <img src={logo} alt="" />
                <h3>
                    Online <span>Banking System</span>
                </h3>
            </LogoWrapper>
            <Form onSubmit={submitFormHandler}>
                <h3>Forgot Password</h3>
                <Input
                    type="test"
                    placeholder="Username"
                    value="userId"
                    obj={user}
                    handleInputChange={setUser}
                />
                <Input
                    type="password"
                    placeholder="New Password"
                    value="password"
                    obj={user}
                    handleInputChange={setUser}
                />
                <Input
                    type="password"
                    placeholder="OTP"
                    value="otp"
                    obj={user}
                    handleInputChange={setUser}
                />
                <button>Change Password</button>
            </Form>
            <div>
                <h4>
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                    <br />
                    <br />
                    Are you an admin? <Link to="/admin/login">Admin Login</Link>
                </h4>
            </div>
        </Container>
    );
};

const Terms = styled.p`
    padding: 0 1rem;
    text-align: center;
    font-size: 10px;
    color: #808080;
    font-weight: 300;
`;

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
        color: #666666;
        margin-bottom: 2rem;
    }

    button {
        width: 75%;
        max-width: 350px;
        min-width: 250px;
        height: 40px;
        border: none;
        margin: 1rem 0;
        box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        background-color: #70edb9;
        color: #fff;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease-in;

        &:hover {
            transform: translateY(-3px);
        }
    }
`;

const LogoWrapper = styled.div`
    img {
        height: 6rem;
        width: 14rem;
    }

    h3 {
        color: #ff8d8d;
        text-align: center;
        font-size: 22px;
    }

    span {
        color: #5dc399;
        font-weight: 300;
        font-size: 18px;
    }
`;

const Container = styled.div`
    min-width: 400px;
    backdrop-filter: blur(35px);
    background-color: rgba(255, 255, 255, 0.8);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 0 2rem;

    @media (max-width: 900px) {
        width: 100vw;
        position: absolute;
        padding: 0;
    }

    h4 {
        color: #808080;
        font-weight: bold;
        font-size: 13px;
        margin-top: 2rem;

        a {
            color: #ff8d8d;
            cursor: pointer;
            text-decoration: none;
        }
    }
`;

export default Sidebar;
