import React, { useState, useEffect } from "react";
import { styled } from "styled-components";
import Input from "./Input";
import DropDownInput from "./DropDownInput";
import AllSubmitBtn from "../../../utils/AllSubmitBtn";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Main = () => {
    const baseURL = "http://localhost:9080/createAccount";
    const userId = sessionStorage.getItem("userID");
    const date = new Date();
    const navigate = useNavigate();
    const openingDate = date.toLocaleString("default", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const [account, setAccount] = useState({
        userId,
        acctype: "",
        balance: 1000,
        branch: "",
        openingDate,
    });

    const typeOptions = ['Savings', 'Salary', 'Current'];
    const branchOptions = ['Bangalore', 'Hyderabad', 'Chennai', 'Mumbai', 'Delhi', 'Kolkata', 'Pune'];

    const [accType, setAccType] = useState("");
    const [branchType, setBranchType] = useState("");

    useEffect(() => {
        setAccount((prev) => ({
            ...prev,
            acctype: accType,
            branch: branchType,
        }));
    }, [accType, branchType]);

    const submitFormHandler = (e) => {
        e.preventDefault();
        axios
            .post(`${baseURL}/${userId}`, account)
            .then((res) => {
                toast.success(
                    `Account created. Please check the dashboard for more info!`,
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
                setTimeout(() => {
                    navigate("/dashboard");
                  }, 2000);
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
                <h2>Create Account</h2>
                <Input
                    type="text"
                    obj={account}
                    value={"userId"}
                    placeholder={`${userId}`}
                    handleInputChange={setAccount}
                    read={true}
                />
                <DropDownInput
                    title="Account Type"
                    val={accType}
                    setVal={setAccType}
                    options={typeOptions}
                />
                <Input
                    type="text"
                    obj={account}
                    value={"balance"}
                    placeholder="Balance"
                    handleInputChange={setAccount}
                />
                <DropDownInput
                    title="Branch"
                    val={branchType}
                    setVal={setBranchType}
                    options={branchOptions}
                />
                <Input
                    type="text"
                    obj={account}
                    value={"openingDate"}
                    placeholder={`${openingDate}`}
                    handleInputChange={setAccount}
                    read={true}
                />
                <button>create account</button>
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
