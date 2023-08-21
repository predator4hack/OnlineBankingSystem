import React, { useContext, useEffect } from "react";
import SortingBar from "./SortingBar";
import Transaction from "./Transaction";
import AllSubmitBtn from "../../../../utils/AllSubmitBtn";
import styled from "styled-components";
import DatePicker from "react-date-picker";

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

const DateContainer = styled.div`
    margin-left: 2rem;
    display: flex;
`;

const DateWrapper = styled.div`
    margin-left: 2.5rem;
    display: flex;
    align-items: center;
    h1 {
        font-size: 0.9rem;
        font-weight: 500;
        color: ${({ theme }) => theme.textColor};
        margin: 0;
    }
    input {
        margin-left: 1rem;
        border-radius: 5px;
        border: 1px solid ${({ theme }) => theme.textColor};
    }
`;

const ListTransaction = ({ title, data, count, val, setVal }) => {
    return (
        <Container>
            <Title>
                {title}
                <TransactionsCount>{count}</TransactionsCount>
                <DateContainer>
                    <DateWrapper>
                        <h1>Start Date</h1>
                        <input
                            type="date"
                            value={val.startDate}
                            onChange={(e) =>
                                setVal((prev) => ({
                                    ...prev,
                                    startDate: e.target.value,
                                }))
                            }
                        />
                    </DateWrapper>
                    <DateWrapper>
                        <h1>End Date</h1>
                        <input
                            type="date"
                            value={val.endDate}
                            onChange={(e) =>
                                setVal((prev) => ({
                                    ...prev,
                                    endDate: e.target.value,
                                }))
                            }
                        />
                    </DateWrapper>
                </DateContainer>
            </Title>
            <SortingBar />
            {data.map((transaction) => (
                <Transaction
                    data={transaction}
                    key={transaction.transactionId}
                />
            ))}
        </Container>
    );
};

export default ListTransaction;
