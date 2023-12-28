import React, { useState } from "react";
import styled from "styled-components";
import logo from "../../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import Input from "../Input";
import axios from "axios";
import { toast } from "react-toastify";

const Sidebar = () => {
    const baseURL = `http://${process.env.REACT_APP_API_URL}/saveAdmin`;
    const navigate = useNavigate();
    const [user, setUser] = useState({
        userid: "",
        password: "",
    });

    const submitFormHandler = (e) => {
        e.preventDefault();
        axios
            .post(baseURL, user)
            .then((res) => {
                toast.success(
                    `The Admin User ${user.userid} has been successfully created`,
                    {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    }
                );
                sessionStorage.setItem("userID", user.userid);
                sessionStorage.setItem("jwtToken", "Bearer " + res.data.token);
                navigate("/admin/dashboard");
            })
            .catch((error) => {
                console.log(error);
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
                <h3>Admin Sign Up</h3>
                <Input
                    type="text"
                    placeholder="Username"
                    value="userid"
                    obj={user}
                    handleInputChange={setUser}
                />
                <Input
                    type="password"
                    placeholder="Password"
                    value="password"
                    obj={user}
                    handleInputChange={setUser}
                />
                <button>Sign Up</button>
            </Form>
            <div>
                <Terms>
                    By signing up, I agree to the Privacy Policy <br /> and
                    Terms of Service
                </Terms>
                <h4>
                    Already have an admin account?{" "}
                    <Link to="/admin/login">Login</Link>
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
