import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import Input from "./Input";
import AllSubmitBtn from "../../../utils/AllSubmitBtn";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import WinWidthContext from "../../../context/WinWidthContext";

const Main = () => {
    const baseURL = "http://localhost:9080/saveCustomer";
    const navigate = useNavigate();
    const windowWidth = WinWidthContext();
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

        if (user.password.length < 8 || user.password.length > 20) {
            toast.error("Password must be between 8 and 20 characters", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return; // Stop the submission if the validation fails
        }

        if (user.mobile.toString().length !== 10) {
            toast.error("Mobile number must be 10 digits long", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return; // Stop the submission if the validation fails
        }

        if (user.aadhar.toString().length !== 12) {
            toast.error("Aadhar number must be 12 digits long", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return; // Stop the submission if the validation fails
        }

        // if age is less than 18 years, then fail
        const today = new Date();
        const birthDate = new Date(user.dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        const month = today.getMonth() - birthDate.getMonth();
        if (
            month < 0 ||
            (month === 0 && today.getDate() < birthDate.getDate())
        ) {
            age--;
        }

        if (age < 18) {
            toast.error("Age must be greater than 18 years", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return; // Stop the submission if the validation fails
        }

        if (age > 120) {
            toast.error("Age must be less than 120 years", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return; // Stop the submission if the validation fails
        }

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
        <Container windowWidth={windowWidth}>
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
                    type="number"
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
    margin-left: ${(props) => (props.windowWidth >= 900 ? "16rem" : "5rem")};
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
