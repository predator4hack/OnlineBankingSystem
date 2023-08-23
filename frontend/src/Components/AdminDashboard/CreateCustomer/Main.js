import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import Input from "./Input";
import AllSubmitBtn from "../../../utils/AllSubmitBtn";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Main = () => {
    const baseURL = "http://localhost:9080/saveCustomer";
    const date = new Date();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        userId: "",
        password: "",
        name: "",
        email: "",
        mobile: 0,
        aadhar: "",
        dob: "",
    });

    const submitFormHandler = (e) => {
        e.preventDefault();
        axios
            .post(baseURL, user)
            .then((res) => {
                toast.success(
                    `The User ${user.name} has been successfully created`,
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
            <Form onSubmit={submitFormHandler}>
                <h3>Add Customer</h3>
                <Input
                    type="text"
                    placeholder="Full Name"
                    value="name"
                    obj={user}
                    handleInputChange={setUser}
                />
                <Input
                    type="text"
                    placeholder="Username"
                    value="userId"
                    obj={user}
                    handleInputChange={setUser}
                />
                <Input
                    type="email"
                    placeholder="Email"
                    value="email"
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
                <Input
                    type="number"
                    placeholder="Mobile Number"
                    value="mobile"
                    obj={user}
                    handleInputChange={setUser}
                />
                <Input
                    type="text"
                    placeholder="Aadhar Number"
                    value="aadhar"
                    obj={user}
                    handleInputChange={setUser}
                />
                <Input
                    type="date"
                    placeholder="Date of Birth"
                    value="dob"
                    obj={user}
                    handleInputChange={setUser}
                />
                <button>Add Customer</button>
            </Form>
        </Container>
    );
};

const Container = styled.div`
    width: auto;
    margin-left: 16rem;
    position: relative;
    padding: 5rem 4rem;
    min-width: 400px;
    backdrop-filter: blur(35px);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

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

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
        margin-bottom: 2rem;
        font-weight: 500;
        color: ${({ theme }) => theme.textColor};
        font-size: 1.5rem;
        display: flex;
        align-items: center;
    }

    button {
        text-transform: uppercase;
        width: 20%;
        margin: 2rem;
        font-size: 0.6rem;
        font-weight: 700;
        background-image: ${({ theme }) => theme.gradient};
        color: #fff;
        border-radius: 5rem;
        padding: 0.7rem;
        display: flex;
        justify-content: center;
        cursor: pointer;
        transition: all ease-in-out 300ms;
        border: none;

        &:hover {
            box-shadow: 0px 0px 7px rgba(128, 74, 216, 0.6);
        }
    }
`;

export default Main;
