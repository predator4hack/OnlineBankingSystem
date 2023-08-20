import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(190, 190, 190, 0.22);
    cursor: pointer;
    background-color: ${({ theme }) => theme.primary};
    transition: all ease-in-out 300ms;

    &:hover {
        /* box-shadow: 0px 10px 8px -8px rgba(138, 153, 192, 0.6); */
        background-color: ${({ theme }) => theme.secondary};
    }
`;

const Text = styled.h1`
    font-size: 0.8rem;
    font-weight: 500;
    color: ${({ theme }) => theme.textColor};
    margin: 0;
`;

const Subtitle = styled(Text)`
    font-size: 0.6rem;
    color: #b2bfe1;
    margin-top: 2px;
`;

const TransactionNo = styled.div`
    width: 25%;
    display: flex;
    align-items: center;
`;

const PropertyText = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
`;

const AccountTypeImg = styled.img`
    height: 35px;
    width: 35px;
`;
const PropertyStreet = styled(Text)`
    font-size: 1rem;
`;
const DateOpened = styled(Text)`
    width: 15%;
`;
const Balance = styled(Text)`
    width: 15%;
`;
const TransferredTo = styled.div`
    width: 20%;
`;
const Status = styled.div`
    display: flex;
    align-items: center;
`;
const StatusIndicator = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 10px;
    background-color: ${(props) => props.color};
    margin-left: 1rem;
    position: absolute;
    right: 7rem;
`;

const Transaction = ({ data }) => {
    const {
        transactionId,
        amount,
        accFrom,
        accTo,
        status,
        timestamp,
        transType,
    } = data;

    return (
        <Container>
            <TransactionNo>
                {/* <AccountTypeImg
                    src={require(`../../../../assets/images/${property.imageUrl}`)}
                /> */}
                <PropertyText>
                    <PropertyStreet>{transactionId}</PropertyStreet>
                    {/* <Subtitle>
                        {property.address.city} {property.address.state}
                    </Subtitle> */}
                </PropertyText>
            </TransactionNo>
            <DateOpened>{timestamp}</DateOpened>
            <Balance>${amount}</Balance>
            <TransferredTo>
                <Text>{accTo}</Text>
            </TransferredTo>
            <Balance>{transType}</Balance>
            <Status>
                <Text>{status.message}</Text>
                {(() => {
                    switch (status) {
                        case "FAIL":
                            return <StatusIndicator color="#F17E7E" />;
                        case "PENDING":
                            return <StatusIndicator color="#FFD056" />;
                        case "SUCCESS":
                            return <StatusIndicator color="#75C282" />;
                        default:
                            return <StatusIndicator color="#AAA5A5" />;
                    }
                })()}
            </Status>
        </Container>
    );
};

export default Transaction;
