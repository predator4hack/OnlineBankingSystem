import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    padding: 0.4rem 1rem;
    background-color: ${({ theme }) => theme.secondary};
    margin-top: 2rem;
    margin-bottom: 0.6rem;
    border-radius: 5px;
`;

const Text = styled.h1`
    font-size: 0.6rem;
    text-transform: uppercase;
    font-weight: 500;
    color: ${({ theme }) => theme.textColor};
`;

const TransactionNO = styled(Text)`
    width: 25%;
`;

const TimeOfTransaction = styled(Text)`
    width: 15%;
`;

const Amount = styled(Text)`
    width: 15%;
`;

const TransferredTo = styled(Text)`
    width: 20%;
`;

const Status = styled(Text)``;

const SortingBar = () => {
    return (
        <Container>
            <TransactionNO>Transaction Number</TransactionNO>
            <TimeOfTransaction>Time Of Transaction</TimeOfTransaction>
            <Amount>Balance</Amount>
            <TransferredTo>Transferred To</TransferredTo>
            <TransferredTo>Transaction Type</TransferredTo>
            <Status>Status</Status>
        </Container>
    );
};

export default SortingBar;
