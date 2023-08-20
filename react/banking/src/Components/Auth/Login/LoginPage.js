import React from "react";
import styled from "styled-components";
import bgImg from "../../../assets/bg.jpg";
import Sidebar from "./SideBar";
import Main from "./Main";

const LoginPage = () => {
    return (
        <Container>
            <Wrapper>
                <Sidebar />
                <Main />
            </Wrapper>
        </Container>
    );
};

const Container = styled.div`
    background: #eefcff;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
`;
const Wrapper = styled.div`
    background-image: url(${bgImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    display: flex;
`;

export default LoginPage;
