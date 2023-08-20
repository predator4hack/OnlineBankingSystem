import React from "react";
import styled from "styled-components";
import SortingBar from "./SortingBar";
import AllSubmitBtn from "../../../../utils/AllSubmitBtn";
import Account from "./Account";

const Container = styled.div``;

const Title = styled.h1`
    font-weight: 500;
    color: ${({ theme }) => theme.textColor};
    font-size: 1.3rem;
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

const Accounts = ({ title, data, count }) => {
    return (
        <Container>
            <Title>
                {title}
                <AccountsCount>{count}</AccountsCount>
            </Title>
            <SortingBar />
            {data.map((account) => (
                <Account data={account} key={account.accno} />
            ))}
            {/* <AllSubmitBtn title={title} /> */}
        </Container>
    );
};

export default Accounts;
