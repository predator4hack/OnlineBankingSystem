import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import DropDownInput from "./DropDownInput";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import WinWidthContext from "../../../context/WinWidthContext";

const Main = () => {
    const baseURL = `http://${process.env.REACT_APP_API_URL}:9080`;
    const userId = sessionStorage.getItem("userID");
    const navigate = useNavigate();
    const windowWidth = WinWidthContext();
    const [accFromOpn, setAccFrom] = useState("");
    const [accOptions, setAccOptions] = useState([]);
    const [transaction, setTransaction] = useState({
        accFrom: "",
        accTo: "",
        transType: "Withdraw",
        amount: 0,
    });
    useEffect(() => {
        axios
            .get(`${baseURL}/fetchAccounts/${userId}`)
            .then((res) => {
                setAccOptions(res.data.map((obj) => obj.accno));
            })
            .catch((err) => {
                toast.error("No accounts found!", {
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
    }, []);
    useEffect(() => {
        setTransaction((prev) => ({
            ...prev,
            accFrom: accFromOpn,
            accTo: accFromOpn,
        }));
    }, [accFromOpn]);

    const submitFormHandler = (e) => {
        e.preventDefault();
        axios
            .post(`${baseURL}/transact`, transaction)
            .then((res) => {
                if (res.data === "Transaction Success") {
                    toast.success("Money Withdrawn Successfully!", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    setTimeout(() => {
                        navigate("/dashboard");
                    }, 2000);
                } else {
                    toast.error("Withdraw Failed", {
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
            .catch((e) => {
                console.log(e);
                toast.error(`Error: ${e.message}`, {
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
                <h2>Withdraw Funds</h2>
                <Input
                    type="text"
                    obj={transaction}
                    value={"userId"}
                    placeholder={`${userId}`}
                    handleInputChange={setTransaction}
                    read={true}
                />
                <DropDownInput
                    title="Select Account"
                    val={accFromOpn}
                    setVal={setAccFrom}
                    options={accOptions}
                />
                <Input
                    type="text"
                    obj={transaction}
                    value={"amount"}
                    placeholder="Amount"
                    handleInputChange={setTransaction}
                />
                <button>Withdraw</button>
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
