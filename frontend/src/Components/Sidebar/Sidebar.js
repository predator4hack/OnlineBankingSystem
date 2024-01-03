import React from "react";
import styled from "styled-components";
import Menu from "./Menu/Menu";
import Profile from "./Profile";
import ToggleSwitch from "./ToggleSwitch";
import WinWidthContext from "../../context/WinWidthContext";

const Container = styled.div`
    background-color: ${({ theme }) => theme.secondary};
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    width: ${(props) => (props.winwidth >= 900 ? `16rem` : `5rem`)};
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Sidebar = () => {
    const windowWidth = WinWidthContext();
    return (
        <Container winwidth={windowWidth}>
            <Profile />
            <Menu />
            <ToggleSwitch />
        </Container>
    );
};

export default Sidebar;
