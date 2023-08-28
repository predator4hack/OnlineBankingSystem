import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ActiveContext } from "../Main";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { Icon } from "@iconify/react";

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(190, 190, 190, 0.22);
    cursor: pointer;
    background-color: ${({ theme }) => theme.primary};
    transition: all ease-in-out 300ms;
    min-width: 900px;

    &:hover {
        /* box-shadow: 0px 10px 8px -8px rgba(138, 153, 192, 0.6); */
        background-color: ${({ theme }) => theme.secondary};
    }
`;

const DisableButton = styled.div`
    text-transform: uppercase;
    width: 10%;
    font-size: 0.6rem;
    font-weight: 700;
    background-color: #ff0000;
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

const DisableButtonDisabled = styled.div`
    text-transform: uppercase;
    width: 10%;
    font-size: 0.6rem;
    font-weight: 700;
    background-color: #ff0000;
    color: #fff;
    border-radius: 5rem;
    padding: 0.7rem;
    display: flex;
    justify-content: center;
    cursor: not-allowed;
    transition: all ease-in-out 300ms;
    border: none;
    opacity: 0.5;

    &:hover {
        box-shadow: none;
    }
`;

const EnableButton = styled.div`
    text-transform: uppercase;
    width: 10%;
    font-size: 0.6rem;
    font-weight: 700;
    background-color: #00ff00;
    color: #000000;
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
    width: 20%;
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

const Redirect = styled(Icon)`
    color: ${(props) => !props.active && props.theme.textColor};
    font-size: 1.2rem;
    margin-right: 1rem;
    font-weight: 2rem;
    margin-left: auto;
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
    const {
        accno,
        acctype,
        balance,
        openingDate,
        ifsc,
        branch,
        disabled,
    } = data;
    const activeContext = useContext(ActiveContext);
    console.log("Active context: ", activeContext);
    const navigate = useNavigate();
    const baseURL = "http://localhost:9080";
    const userid = sessionStorage.getItem("userID");
    const [dis, setDis] = useState(disabled);
    const [invalid, setInvalid] = useState(false);

    useEffect(() => {
        if (acctype == "Savings" && balance < 10000) setInvalid(true);
        else if (acctype == "Current" && balance < 25000) setInvalid(true);
        else if (acctype == "Salary" && balance < 5000) setInvalid(true);
        else setInvalid(false);
    }, [acctype, balance, invalid]);

    const toggleDisableHandler = () => {
        axios.post(`${baseURL}/disable/${accno}/${userid}`).then((res) => {
            if (
                res.data === "Account not found" ||
                res.data === "Account cannot be disabled"
            ) {
                toast.error(res.data, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            } else {
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
                if (dis === true) setDis(false);
                else setDis(true);
            }
        });
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
            {dis && (
                <EnableButton onClick={() => toggleDisableHandler()}>
                    Enable
                </EnableButton>
            )}
            {!dis && invalid && (
                <DisableButton onClick={() => toggleDisableHandler()}>
                    Disable
                </DisableButton>
            )}
            {!dis && !invalid && (
                <DisableButtonDisabled onClick={() => toggleDisableHandler()}>
                    Disable
                </DisableButtonDisabled>
            )}
            <Redirect
                onClick={() => navigate(`/accountDashboard/${accno}`)}
                active={accno === activeContext.actAccount}
                className="iconify"
                icon="mdi-light:fullscreen"
            />
        </Container>
    );
};

export default Account;
