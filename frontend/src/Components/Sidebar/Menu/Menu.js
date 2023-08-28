import React, { useEffect, useState } from "react";
import MenuLink from "./MenuLink";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import WinWidthContext from "../../../context/WinWidthContext";

const Container = styled.div`
    margin-top: 2rem;
    width: 100%;
`;

const Menu = () => {
    const navigate = useNavigate();
    const windowWidth = WinWidthContext();
    const logoutHandler = () => {
        sessionStorage.clear();
        navigate("/login");
    };

    return (
        <Container>
            <MenuLink title="Home" icon={"home"} to="/home" />
            <MenuLink
                title="Accounts"
                icon={"file-multiple"}
                to={"/dashboard"}
            />
            <MenuLink title="Fund Transfer" icon={"bank"} to="/transact" />
            <MenuLink
                title="Withdraw Funds"
                icon={"currency-usd"}
                to="/withdraw"
            />
            <MenuLink title="Settings" icon={"cog"} to="/settings" />
            <Button onClick={logoutHandler} windowWidth={windowWidth}>
                Logout
            </Button>
        </Container>
    );
};

const Button = styled.div`
    text-transform: uppercase;
    width: 20%;
    margin: 2rem;
    font-size: ${(props) => (props.windowWidth >= 900 ? `0.5rem` : `0.3rem`)};
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

export default Menu;
