import React, { useContext } from "react";
import styled from "styled-components";
import { ActiveContext } from "../Main";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(190, 190, 190, 0.22);
    cursor: pointer;
    background-color: ${({ theme }) => theme.primary};
    min-width: 900px;
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

const AccountNo = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
`;

const PropertyText = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
`;

const AccountTypeImg = styled.img`
    height: 30px;
    width: 30px;
`;

const Redirect = styled.img`
    height: 15px;
    width: 15px;
`;
const PropertyStreet = styled(Text)`
    font-size: 0.8rem;
`;
const DateOpened = styled(Text)`
    width: 20%;
`;
const Balance = styled(Text)`
    width: 25%;
`;
const Branch = styled.div`
    width: 17%;
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

const Customer = ({ data }) => {
    const activeContext = useContext(ActiveContext);

    return (
        <Container>
            <AccountNo>
                <PropertyText>
                    <PropertyStreet>{data.name}</PropertyStreet>
                </PropertyText>
            </AccountNo>
            <DateOpened>{data.userId}</DateOpened>
            <Balance>{data.email}</Balance>
            <Balance>{data.mobile}</Balance>
        </Container>
    );
};

export default Customer;
