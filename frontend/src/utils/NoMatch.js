import React from "react";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
`;

const Heading = styled.h1`
    font-size: 4rem;
    color: #333;
    margin-bottom: 1rem;
`;

const Message = styled.p`
    font-size: 1.5rem;
    color: #666;
    text-align: center;
    margin-bottom: 2rem;
`;

const StyledLink = styled.a`
    text-decoration: none;
    color: #007bff;
    font-weight: bold;
    transition: color 0.3s ease;

    &:hover {
        color: #0056b3;
    }
`;

const NoMatch = () => {
    return (
        <Container>
            <Heading>404</Heading>
            <Message>Oops! The page you're looking for doesn't exist.</Message>
            <StyledLink href="/">Go back to homepage</StyledLink>
        </Container>
    );
};

export default NoMatch;
