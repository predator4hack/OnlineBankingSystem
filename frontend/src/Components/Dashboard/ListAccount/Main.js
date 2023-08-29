import React, { useEffect, useReducer, useState } from "react";
import styled from "styled-components";
import Nav from "./Nav";

import depositData from "../../../assets/DepositData.json";
import NewSubmitBtn from "../../../utils/NewSubmitBtn";
import Accounts from "./Accounts/Accounts";
import ListTransaction from "../ListTransaction/ListTransaction";
import axios from "axios";
import WinWidthContext from "../../../context/WinWidthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Container = styled.div`
    width: auto;
    margin-left: ${(props) => (props.windowWidth >= 900 ? "16rem" : "5rem")};
    position: relative;
    padding: 0 4rem;
`;

export const ActiveContext = React.createContext();

const Main = () => {
    const reducer = (state, action) => {
        return action;
    };
    const [selectedAccount, setSelectedAccount] = useState(null);
    const [data, setData] = useState([]);
    const [tdata, setTdata] = useState([]);
    const [tlength, setTlength] = useState(0);
    const userId = sessionStorage.getItem("userID");
    const baseURL = "http://localhost:9080";
    const windowWidth = WinWidthContext();
    const navigate = useNavigate();
    useEffect(() => {
        async function fetchAccounts() {
            try {
                const user = await axios.get(`${baseURL}/fetchUser/${userId}`);
                console.log(user);
                if (user.data.permanentAddress === null) {
                    toast.info("Please update the user details!", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    navigate("/settings");
                    return;
                }
                const res = await axios.get(
                    `${baseURL}/fetchAccounts/${userId}`
                );
                setData(res.data);
                if (res.data.length > 0) {
                    setSelectedAccount(res.data[0].accno);
                }
            } catch (e) {
                console.log(e);
            }
        }
        fetchAccounts();
    }, []);
    const [activeAcc, dispatch] = useReducer(reducer, selectedAccount);
    useEffect(() => {
        async function fetchTransactions() {
            if (selectedAccount) {
                console.log(activeAcc);
                try {
                    const res = await axios.get(
                        `${baseURL}/fetchTransactions/${
                            activeAcc ? activeAcc : selectedAccount
                        }`
                    );
                    setTdata(res.data.slice(-3).reverse());
                    setTlength(res.data.length);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        fetchTransactions();
    }, [selectedAccount, activeAcc]);
    return (
        <ActiveContext.Provider
            value={{
                actAccount: activeAcc ? activeAcc : selectedAccount,
                actDispatch: dispatch,
            }}
        >
            <Container windowWidth={windowWidth}>
                <Nav />
                <NewSubmitBtn to="/createAccount" />
                <Accounts
                    title="Active Accounts"
                    count={data.length}
                    data={data}
                />
                <ListTransaction
                    title="Transactions"
                    count={tlength}
                    data={tdata}
                />
            </Container>
        </ActiveContext.Provider>
    );
};

export default Main;
