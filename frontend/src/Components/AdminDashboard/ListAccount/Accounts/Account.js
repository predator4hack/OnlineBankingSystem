import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ActiveContext } from "../Main";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

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


const Button = styled.div`
    text-transform: uppercase;
    width: 10%;
    font-size: 0.6rem;
    font-weight: 700;
    background-image: ${({ theme }) => theme.gradient};
    color: #fff;
    border-radius: 5rem;
    padding: 0.7rem;
    display: flex;
    justify-content: center;
    cursor: pointer;
    transition: all ease-in-out 300ms;
    border: none;

    &:hover {
        box-shadow: 0px 0px 7px rgba(128, 74, 216, 0.6);
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
    width: 15%;
`;
const Balance = styled(Text)`
    width: 15%;
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

const Account = ({ data }) => {
    const { accno, acctype, balance, openingDate, ifsc, branch, disabled } = data;
    const activeContext = useContext(ActiveContext);
    console.log("Active context: ", activeContext);
    const navigate = useNavigate();
    const baseURL = "http://localhost:9080";
    const userid = sessionStorage.getItem("userID");
    const [dis, setDis] = useState(disabled);
    
    const toggleDisableHandler = () => {
        axios.post(`${baseURL}/disable/${accno}/${userid}`)
        .then((res) => {
            if(res.data === "Account not found")
            {
                toast.error("Account not found", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
            else {
                toast.success(res.data, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                if(dis === true)
                    setDis(false);
                else
                    setDis(true);
            }
        })
    };

    return (
        <Container onClick={() => activeContext.actDispatch(accno)}>
            <AccountNo>
                <AccountTypeImg
                    src={require(`../../../../assets/images/${acctype.toLowerCase()}.png`)}
                />
                <PropertyText>
                    <PropertyStreet>{accno}</PropertyStreet>
                </PropertyText>
            </AccountNo>
            <DateOpened>{openingDate}</DateOpened>
            <Balance>${balance}</Balance>
            <Branch>
                <Text>{branch}</Text>
                <Subtitle>{ifsc}</Subtitle>
            </Branch>
            <Balance>{acctype}</Balance>
            <Button onClick={() => toggleDisableHandler()}>{dis === true ? "Enable" : "Disable"}</Button>
            <Redirect
                onClick={() => navigate(`/accountDashboard/${accno}`)}
                src={require(`../../../../assets/images/redirect.png`)}
            />
        </Container>
    );
};

export default Account;
