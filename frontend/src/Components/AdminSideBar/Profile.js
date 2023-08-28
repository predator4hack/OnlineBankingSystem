import React from "react";
import styled from "styled-components";
import Image from "../../assets/images/profilelg.png";
import WinWidthContext from "../../context/WinWidthContext";

const Container = styled.div`
    margin-top: 5rem;
`;

const ProfileImg = styled.img`
    height: ${(props) => (props.windowWidth >= 900 ? `5rem` : `2rem`)};
`;
const ProfileName = styled.h1`
    font-size: 1rem;
    font-weight: 300;
    color: ${({ theme }) => theme.textColor};
`;

const Profile = () => {
    const username = sessionStorage.getItem("userID");
    const windowWidth = WinWidthContext();
    return (
        <Container>
            <ProfileImg src={Image} windowWidth={windowWidth} />
            {windowWidth >= 900 && <ProfileName>{username}</ProfileName>}
        </Container>
    );
};

export default Profile;
