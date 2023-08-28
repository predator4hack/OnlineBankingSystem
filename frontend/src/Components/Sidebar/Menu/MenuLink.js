import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import WinWidthContext from "../../../context/WinWidthContext";

const Container = styled(NavLink)`
    border-left: 3px solid
        ${(props) => (props.active ? props.theme.activeMenu : "transparent")};
    width: 100%;
    padding: 0.8rem;
    padding-left: 2rem;
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
    text-decoration: none;
    /* margin-bottom: 1rem; */
    transition: 0.2s all ease-in-out;

    &:hover {
        background-color: rgba(0, 0, 0, 0.1);
    }
`;

const Span = styled(Icon)`
    /* color: ${(props) =>
        props.active ? props.theme.activeMenu : "#AAA5A5"}; */
    color: ${(props) => !props.active && props.theme.textColor};
    font-size: 1rem;
    margin-right: 1rem;
`;

const Title = styled.h1`
    font-size: 0.9rem;
    font-weight: 300;
    color: ${(props) => (props.active ? props.theme.activeMenu : "#AAA5A5")};
`;

const MenuLink = ({ title, icon, to }) => {
    const { pathname } = useLocation();
    const winWidth = WinWidthContext();

    return (
        <Container active={pathname === to ? "true" : ""} to={to}>
            <Span
                active={pathname === to ? "true" : ""}
                className="iconify"
                inline="false"
                icon={`mdi-light:${icon}`}
            ></Span>
            {winWidth >= 900 && (
                <Title active={pathname === to ? "true" : ""}>{title}</Title>
            )}
        </Container>
    );
};

export default MenuLink;
