import React, { useEffect, useState } from "react";
import MenuLink from "./MenuLink";
import styled from "styled-components";

const Container = styled.div`
    margin-top: 2rem;
    width: 100%;
`;

const Menu = () => {
    const [activeBtn, setActiveBtn] = useState("Accounts");
    return (
        <Container>
            <MenuLink
                title="Home"
                icon={"home"}
                active={activeBtn}
                setActiveBtn={setActiveBtn}
                to="/home"
            />
            <MenuLink
                title="Accounts"
                icon={"file-multiple"}
                active={activeBtn}
                setActiveBtn={setActiveBtn}
                to={"/dashboard"}
            />
            <MenuLink
                title="Offers"
                icon={"gift"}
                active={activeBtn}
                setActiveBtn={setActiveBtn}
                to="/offers"
            />
            <MenuLink
                title="Payments"
                icon={"bank"}
                active={activeBtn}
                setActiveBtn={setActiveBtn}
                to="/transact"
            />
            <MenuLink
                title="Settings"
                icon={"cog"}
                active={activeBtn}
                setActiveBtn={setActiveBtn}
                to="/settings"
            />
        </Container>
    );
};

export default Menu;
