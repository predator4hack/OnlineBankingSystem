import React, { useEffect, useState, useReducer } from "react";
import styled from "styled-components";
import Nav from "./Nav";
import Accounts from "./Accounts/Accounts";
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
    const [selectedAccount, setSelectedAccount] = useState(null);
    const [data, setData] = useState([]);
    const [tdata, setTdata] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const baseURL = "http://localhost:9080";
    const userid = sessionStorage.getItem("userID");
    const windowWidth = WinWidthContext();

    useEffect(() => {
        async function fetchAccounts() {
            try {
                const res = await axios.get(
                    `${baseURL}/getAllAccounts/${userid}`
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
        fetchAccounts();
    }, []);

    useEffect(() => {
        const filtered = data.filter((account) => {
            return account.accno.toString().includes(searchQuery);
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
                    placeholder="Search by Account Number"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />
                <Accounts
                    title="Active Accounts"
                    count={filteredData.length}
                    data={filteredData}
                />
            </Container>
        </ActiveContext.Provider>
    );
};

export default Main;
