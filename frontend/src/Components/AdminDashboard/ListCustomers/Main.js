import React, { useEffect, useReducer, useState } from "react";
import styled from "styled-components";
import Nav from "./Nav";

import depositData from "../../../assets/DepositData.json";
import NewSubmitBtn from "../../../utils/NewSubmitBtn";
import Accounts from "./Customers/Customers";
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
    const [data, setData] = useState([]);
    const baseURL = "http://localhost:9080";

    useEffect(() => {
        async function fetchAccounts() {
            try {
                const res = await axios.get(
                    `${baseURL}/getAllCustomers`
                );
                setData(res.data)
            } catch (e) {
                console.log(e);
            }
        }
        fetchAccounts();
    }, []);
    
    return (
        <ActiveContext.Provider
        >
            <Container>
                <Nav />
                <Accounts
                    title="Customers"
                    count={data.length}
                    data={data}
                />
            </Container>
        </ActiveContext.Provider>
    );
};

export default Main;
