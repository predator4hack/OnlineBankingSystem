import React from "react";
import styled from "styled-components";
import SortingBar from "./SortingBar";
import AllSubmitBtn from "../../../../utils/AllSubmitBtn";
import Account from "./Account";

const Container = styled.div``;

const Title = styled.h1`
    font-weight: 500;
    color: ${({ theme }) => theme.textColor};
    font-size: 1.2rem; /* Adjust font size */
    margin-top: 1rem; /* Add margin for better spacing */
    display: flex;
    align-items: center;
`;

const AccountsCount = styled.div`
    margin-left: 1rem;
    font-size: 1rem;
    background-color: ${({ theme }) => theme.header};
    color: ${({ theme }) => theme.headerNumber};
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
`;

const ScrollingContainer = styled.div`
    overflow-x: auto;
    white-space: nowrap;
`;

const Accounts = ({ title, data, count }) => {
    return (
        <Container>
            <Title>
                {title}
                <AccountsCount>{count}</AccountsCount>
            </Title>
            <ScrollingContainer>
                <SortingBar />
                {data.map((account) => (
                    <Account data={account} key={account.accno} />
                ))}
            </ScrollingContainer>
            {/* <AllSubmitBtn title={title} /> */}
        </Container>
    );
};

export default Accounts;
