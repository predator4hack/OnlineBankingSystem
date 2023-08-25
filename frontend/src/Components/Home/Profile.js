import React from "react";
import styled from "styled-components";
import Image from "../../assets/images/profilelg.png";

const Container = styled.div`
    margin-bottom: 1rem;
    display: contents;
`;

const ProfileImg = styled.img`
    height: 7rem;
`;
const ProfileName = styled.div`
    align-items: center;
    margin-top: 0.8rem;
    h1 {
        font-size: 1rem;
        font-weight: 300;
        color: ${({ theme }) => theme.textColor};
    }
`;

const Profile = ({ name }) => {
    return (
        <Container>
            <ProfileImg src={Image} />
            <ProfileName>
                <h1>{name}</h1>
            </ProfileName>
        </Container>
    );
};

export default Profile;
