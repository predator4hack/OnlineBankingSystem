import React, { useEffect, useReducer, useState } from "react";
import styled from "styled-components";
import Nav from "./Nav";
import Accounts from "./Transactions/Transactions";
import axios from "axios";
import WinWidthContext from "../../../context/WinWidthContext";

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
    const windowWidth = WinWidthContext();
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedAccount, setSelectedAccount] = useState(null);
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const baseURL = "http://localhost:9080";
    const userid = sessionStorage.getItem("userID");

    useEffect(() => {
        async function fetchTransactions() {
            try {
                const res = await axios.get(
                    `${baseURL}/getAllTransactions/${userid}`
                );
                setData(res.data);
                setFilteredData(res.data);
                if (res.data.length > 0) {
                    setSelectedAccount(res.data[0].accno);
                }
            } catch (e) {
                console.log(e);
            }
        }
        fetchTransactions();
    }, []);

    useEffect(() => {
        const filtered = data.filter((transaction) => {
            return (
                transaction.accFrom.toString().includes(searchQuery) ||
                transaction.accTo.toString().includes(searchQuery) ||
                transaction.transactionId.toString().includes(searchQuery) ||
                transaction.transType.includes(searchQuery)
            );
        });
        setFilteredData(filtered);
    }, [data, searchQuery]);

    const [activeAcc, dispatch] = useReducer(reducer, selectedAccount);
    return (
        <ActiveContext.Provider
            value={{
                actAccount: activeAcc ? activeAcc : selectedAccount,
                actDispatch: dispatch,
            }}
        >
            <Container windowWidth={windowWidth}>
                <Nav />
                <input
                    type="text"
                    placeholder="Search by transaction details"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />
                <Accounts
                    title="Transactions"
                    count={filteredData.length}
                    data={filteredData}
                />
            </Container>
        </ActiveContext.Provider>
    );
};

export default Main;
