import React from "react";
import SortingBar from "./SortingBar";
import Transaction from "./Transaction";
import AllSubmitBtn from "../../../utils/AllSubmitBtn";
import styled from "styled-components";

const Container = styled.div``;

const Title = styled.h1`
    font-weight: 500;
    color: ${({ theme }) => theme.textColor};
    font-size: 1.3rem;
    display: flex;
    margin-top: 3rem;
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

const ListTransaction = ({ title, data, count }) => {
    return (
        <Container>
            <Title>
                {title}
                <TransactionsCount>{count}</TransactionsCount>
            </Title>
            <SortingBar />
            {data.map((transaction) => (
                <Transaction
                    data={transaction}
                    key={transaction.transactionId}
                />
            ))}
            <AllSubmitBtn title={title} />
        </Container>
    );
};

export default ListTransaction;
