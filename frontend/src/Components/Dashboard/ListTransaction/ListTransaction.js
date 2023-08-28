import React, { useContext, useEffect } from "react";
import SortingBar from "./SortingBar";
import Transaction from "./Transaction";
import AllSubmitBtn from "../../../utils/AllSubmitBtn";
import styled from "styled-components";
import { ActiveContext } from "../ListAccount/Main";

const Container = styled.div``;

const Title = styled.h1`
    font-weight: 500;
    color: ${({ theme }) => theme.textColor};
    font-size: 1.2rem; /* Adjust font size */
    margin-top: 3rem;
    display: flex;
    align-items: center;
`;

const TransactionsCount = styled.div`
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

const ListTransaction = ({ title, data, count }) => {
    const activeContext = useContext(ActiveContext);
    return (
        <Container>
            <Title>
                {title}
                <TransactionsCount>{count}</TransactionsCount>
            </Title>
            <ScrollingContainer>
                <SortingBar />
                {data.map((transaction) => (
                    <Transaction
                        data={transaction}
                        key={transaction.transactionId}
                        accNo={activeContext.actAccount}
                    />
                ))}
            </ScrollingContainer>
            <AllSubmitBtn
                title={title}
                to={`/accountDashboard/${activeContext.actAccount}`}
            />
        </Container>
    );
};

export default ListTransaction;
