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
    const [activeBtn, setActiveBtn] = useState("");
    const navigate = useNavigate();
    const windowWidth = WinWidthContext();

    const logoutHandler = () => {
        sessionStorage.clear();
        navigate("/admin/login");
    };

    return (
        <Container>
            <MenuLink
                title="Customers"
                icon={"home"}
                active={activeBtn}
                setActiveBtn={setActiveBtn}
                to="/admin/dashboard"
            />
            <MenuLink
                title="Accounts"
                icon={"file-multiple"}
                active={activeBtn}
                setActiveBtn={setActiveBtn}
                to={"/admin/accounts"}
            />
            <MenuLink
                title="Transactions"
                icon={"bank"}
                active={activeBtn}
                setActiveBtn={setActiveBtn}
                to="/admin/transactions"
            />
            <MenuLink
                title="Add Customer"
                icon={"settings"}
                active={activeBtn}
                setActiveBtn={setActiveBtn}
                to="/admin/createCustomer"
            />
            <Button onClick={logoutHandler} windowwidth={windowWidth}>
                Logout
            </Button>
        </Container>
    );
};

const Button = styled.div`
    text-transform: uppercase;
    width: 20%;
    margin: 2rem;
    font-size: ${(props) => (props.windowwidth >= 900 ? `0.5rem` : `0.3rem`)};
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
