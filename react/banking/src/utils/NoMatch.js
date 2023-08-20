import React from "react";
import styled from "styled-components";

const NoMatch = () => {
    return (
        <Container>
            <h4>PAGE DOESN'T EXIST</h4>
        </Container>
    );
};

const Container = styled.div`
    width: auto;
    /* margin-left: 16rem; */
    position: relative;
    padding: 5rem 4rem;
    min-width: 400px;
    backdrop-filter: blur(35px);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    h4 {
        color: #808080;
        font-weight: bold;
        font-size: 2rem;
        margin-top: 2rem;

        a {
            color: #ff8d8d;
            cursor: pointer;
            text-decoration: none;
        }
    }
`;

export default NoMatch;
