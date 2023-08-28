import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Nav from "./Nav";
import Accounts from "./Customers/Customers";
import axios from "axios";
import WinWidthContext from "../../../context/WinWidthContext";

const Container = styled.div`
    width: auto;
    margin-left: ${(props) => (props.windowWidth >= 900 ? `16rem` : `5rem`)};
    position: relative;
    padding: 0 4rem;
`;

export const ActiveContext = React.createContext();

const Main = () => {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const windowWidth = WinWidthContext();

    const baseURL = "http://localhost:9080";
    const userid = sessionStorage.getItem("userID");

    useEffect(() => {
        async function fetchAccounts() {
            try {
                const res = await axios.get(
                    `${baseURL}/getAllCustomers/${userid}`
                );
                setData(res.data);
                setFilteredData(res.data);
            } catch (e) {
                console.log(e);
            }
        }
        fetchAccounts();
    }, []);

    useEffect(() => {
        const filtered = data.filter((account) => {
            const { name, userId, email, mobile } = account;
            const lowerSearchQuery = searchQuery.toLowerCase();
            return (
                name.toLowerCase().includes(lowerSearchQuery) ||
                userId.toLowerCase().includes(lowerSearchQuery) ||
                email.toLowerCase().includes(lowerSearchQuery) ||
                mobile.toString().includes(lowerSearchQuery)
            );
        });
        setFilteredData(filtered);
    }, [data, searchQuery]);

    return (
        <ActiveContext.Provider>
            <Container windowWidth={windowWidth}>
                <Nav />
                <input
                    type="text"
                    placeholder="Search by name, customer id, email or mobile"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />
                <Accounts
                    title="Customers"
                    count={filteredData.length}
                    data={filteredData}
                />
            </Container>
        </ActiveContext.Provider>
    );
};

export default Main;
