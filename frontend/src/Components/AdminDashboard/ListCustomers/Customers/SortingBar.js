import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    padding: 0.4rem 1rem;
    background-color: ${({ theme }) => theme.secondary};
    /* margin: 2rem 0; */
    margin-top: 2rem;
    margin-bottom: 0.6rem;
    border-radius: 5px;
    min-width: 900px;
`;

const Text = styled.h1`
    font-size: 0.6rem;
    text-transform: uppercase;
    font-weight: 500;
    color: ${({ theme }) => theme.textColor};
`;

const Account = styled(Text)`
    width: 30%;
`;

const MoveInDate = styled(Text)`
    width: 20%;
`;

const Rent = styled(Text)`
    width: 25%;
`;

const Deposit = styled(Text)`
    width: 25%;
`;

const Status = styled(Text)``;

const SortingBar = () => {
    return (
        <Container>
            <Account>Customer Name</Account>
            <MoveInDate>Customer ID</MoveInDate>
            <Rent>Email</Rent>
            <Deposit>Mobile</Deposit>
        </Container>
    );
};

export default SortingBar;
