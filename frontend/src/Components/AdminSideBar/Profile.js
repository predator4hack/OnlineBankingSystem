import React from "react";
import styled from "styled-components";
import Image from "../../assets/images/profilelg.png";

const Container = styled.div`
    margin-top: 5rem;
`;

const ProfileImg = styled.img`
    height: 5rem;
`;
const ProfileName = styled.h1`
    font-size: 1rem;
    font-weight: 300;
    color: ${({ theme }) => theme.textColor};
`;

const Profile = () => {
    const username = sessionStorage.getItem("userID");
    return (
        <Container>
            <ProfileImg src={Image} />
            <ProfileName>{username}</ProfileName>
        </Container>
    );
};

export default Profile;
