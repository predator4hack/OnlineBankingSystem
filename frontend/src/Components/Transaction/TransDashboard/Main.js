import React from "react";
import styled from "styled-components";

const Main = () => {
    return (
        <Container>
            <Title>
                <h1>Transaction Details</h1>
            </Title>
            <Wrapper>
                <Text>
                    <h1>User Id: </h1>
                </Text>
                <Text>
                    <h1>Transaction Type: </h1>
                </Text>
                <Text>
                    <h1>Transferred From: </h1>
                </Text>
                <Text>
                    <h1>Transferred To: </h1>
                </Text>
                <Text>
                    <h1>Amount: </h1>
                </Text>
                <Text>
                    <h1>Transaction Date: </h1>
                </Text>
            </Wrapper>
        </Container>
    );
};

const Container = styled.div`
    width: auto;
    margin-left: 16rem;
    position: relative;
    padding: 5rem 7rem;
    min-width: 400px;
    backdrop-filter: blur(35px);
    height: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    h4 {
        color: #808080;
        font-weight: bold;
        font-size: 13px;
        margin-top: 2rem;

        a {
            color: #ff8d8d;
            cursor: pointer;
            text-decoration: none;
        }
    }
`;

const Wrapper = styled.div`
    /* display: flex; */
    align-items: center;
    padding: 1rem 3rem;
    width: 100%;
    border-bottom: 1px solid rgba(190, 190, 190, 0.22);
    cursor: pointer;
    background-color: ${({ theme }) => theme.primary};
    transition: all ease-in-out 300ms;

    &:hover {
        /* box-shadow: 0px 10px 8px -8px rgba(138, 153, 192, 0.6); */
        background-color: ${({ theme }) => theme.secondary};
    }
`;

const Text = styled.div`
    padding: 0.8rem;
    h1 {
        font-size: 0.9rem;
        font-weight: 500;
        color: ${({ theme }) => theme.textColor};
        margin: 0;
    }
`;

const Title = styled.div`
    padding: 1rem 2rem;
    h1 {
        font-weight: 500;
        color: ${({ theme }) => theme.textColor};
        font-size: 1.3rem;
        display: flex;
        align-items: center;
    }
`;

export default Main;
