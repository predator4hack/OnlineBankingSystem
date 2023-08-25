import React, { useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Settings = () => {
    const baseURL = "http://localhost:9080/changePassword";
    const userId = sessionStorage.getItem("userID");
    const navigate = useNavigate();
    const [data, setData] = useState({
        userId,
        password: "",
        otp: "",
    });
    const submitFormHandler = (e) => {
        e.preventDefault();
        axios
            .put(`${baseURL}/${data.otp}`, {
                userId: data.userId,
                password: data.password,
            })
            .then((res) => {
                if(res.data == "Success!")
                {
                    toast.success(res.data, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    navigate("/dashboard");
                }
                else {
                    toast.error(res.data, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
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
            <Form onSubmit={submitFormHandler}>
                <h2>Change Password</h2>
                <Input
                    type="text"
                    obj={data}
                    value={"userId"}
                    placeholder={`${userId}`}
                    handleInputChange={setData}
                    read={true}
                />
                <Input
                    type="password"
                    obj={data}
                    value={"password"}
                    placeholder="New Password"
                    handleInputChange={setData}
                />
                <Input
                    type="text"
                    obj={data}
                    value={"otp"}
                    placeholder="OTP"
                    handleInputChange={setData}
                />
                <button>Change Password</button>
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

export default Settings;
