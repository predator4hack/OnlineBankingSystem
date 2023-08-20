import React, { useEffect, useReducer, useState } from "react";
import styled from "styled-components";
import Nav from "./Nav";

import depositData from "../../../assets/DepositData.json";
import NewSubmitBtn from "../../../utils/NewSubmitBtn";
import Accounts from "./Accounts/Accounts";
import ListTransaction from "../ListTransaction/ListTransaction";
import axios from "axios";

const Container = styled.div`
    width: auto;
    margin-left: 16rem;
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
    const userId = sessionStorage.getItem("userID");
    const baseURL = "http://localhost:9080";

    useEffect(() => {
        async function fetchAccounts() {
            try {
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
                    setTdata(res.data);
                } catch (e) {
                    console.log(e);
                }
            }
        }
        fetchTransactions();
    }, [selectedAccount, activeAcc]);

    return (
        <ActiveContext.Provider
            value={{ actAccount: activeAcc, actDispatch: dispatch }}
        >
            <Container>
                <Nav />
                <NewSubmitBtn to="/createAccount" />
                <Accounts
                    title="Active Accounts"
                    count={data.length}
                    data={data}
                />
                <ListTransaction
                    title="Transactions"
                    count={tdata.length}
                    data={tdata}
                />
            </Container>
        </ActiveContext.Provider>
    );
};

export default Main;
