import React from "react";
import styled from "styled-components";
import SortingBar from "./SortingBar";
import Customer from "./Customer";

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
                    <Customer data={account} key={account.userId} />
                ))}
            </ScrollingContainer>
        </Container>
    );
};

export default Accounts;
