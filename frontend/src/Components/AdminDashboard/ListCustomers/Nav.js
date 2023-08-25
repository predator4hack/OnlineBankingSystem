import React from "react";
import styled from "styled-components";
import ProfileImage from "../../../assets/images/profilelg.png";
import { Icon } from "@iconify/react";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    display: flex;
    padding: 1rem;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 3rem;
`;

const ProfileImg = styled.img`
    height: 2rem;
    margin: 0 1rem;
    cursor: pointer;
`;

const MessageIcon = styled(Icon)`
    color: ${({ theme }) => theme.colorGray};
    font-size: 27px;
    cursor: pointer;
`;
const Nav = () => {
    const navigate = useNavigate();
    return (
        <Container>
            <MessageIcon
                className="iconify"
                inline="false"
                icon="mdi-light:email"
            ></MessageIcon>
            <ProfileImg src={ProfileImage} onClick={() => navigate("/admin/dashboard")} />
        </Container>
    );
};

export default Nav;
