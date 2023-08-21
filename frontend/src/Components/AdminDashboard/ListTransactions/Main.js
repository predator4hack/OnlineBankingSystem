import React, { useEffect, useReducer, useState } from "react";
import styled from "styled-components";
import Nav from "./Nav";
import Accounts from "./Transactions/Transactions";
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
    const baseURL = "http://localhost:9080";

    useEffect(() => {
        async function fetchAccounts() {
            try {
                const res = await axios.get(
                    `${baseURL}/getAllTransactions`
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
    return (
        <ActiveContext.Provider
            value={{
                actAccount: activeAcc ? activeAcc : selectedAccount,
                actDispatch: dispatch,
            }}
        >
            <Container>
                <Nav />
                <Accounts
                    title="Transactions"
                    count={data.length}
                    data={data}
                />
            </Container>
        </ActiveContext.Provider>
    );
};

export default Main;
