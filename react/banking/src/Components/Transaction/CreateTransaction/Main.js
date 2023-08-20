import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import DropDownInput from "./DropDownInput";
import axios from "axios";
import { toast } from "react-toastify";

const Main = () => {
    const baseURL = "http://localhost:9080";
    const userId = sessionStorage.getItem("userID");
    // const date = new Date();
    // const openingDate = date.toLocaleString("default", {
    //     day: "numeric",
    //     month: "long",
    //     year: "numeric",
    // });
    // const timeTransfer = date.toLocaleTimeString();
    const [transTypeOpn, setTransType] = useState("");
    const [accFromOpn, setAccFrom] = useState("");
    const transOptions = ["IMPS", "NEFT", "RTGS"];
    const [accOptions, setAccOptions] = useState([]);
    const [transaction, setTransaction] = useState({
        accFrom: "",
        accTo: "",
        transType: "",
        amount: 0,
        // date: openingDate,
        // time: timeTransfer,
    });
    useEffect(() => {
        axios
            .get(`${baseURL}/fetchAccounts/${userId}`)
            .then((res) => {
                setAccOptions(res.data.map((obj) => obj.accno));
            })
            .catch((err) => {
                alert("Error fetching the accounts!");
            });
    }, []);
    useEffect(() => {
        setTransaction((prev) => ({
            ...prev,
            accFrom: accFromOpn,
            transType: transTypeOpn,
        }));
    }, [accFromOpn, transTypeOpn]);

    const submitFormHandler = (e) => {
        e.preventDefault();
        axios
            .post(`${baseURL}/transact`, transaction)
            .then((res) => {
                toast.success("Funds Transferred Successfully!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
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
        <Container>
            <Form onSubmit={submitFormHandler}>
                <h2>Create Transaction</h2>
                <Input
                    type="text"
                    obj={transaction}
                    value={"userId"}
                    placeholder={`${userId}`}
                    handleInputChange={setTransaction}
                    read={true}
                />
                <DropDownInput
                    title="Transaction Type"
                    val={transTypeOpn}
                    setVal={setTransType}
                    options={transOptions}
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
                    value={"accTo"}
                    placeholder="Reciever's Account Number"
                    handleInputChange={setTransaction}
                />
                <Input
                    type="text"
                    obj={transaction}
                    value={"amount"}
                    placeholder="Amount"
                    handleInputChange={setTransaction}
                />
                <button>Transfer Funds</button>
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
