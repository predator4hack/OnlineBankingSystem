import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem 0;
`;

const Button = styled.a`
    text-transform: uppercase;
    width: 9rem;
    font-size: 0.6rem;
    font-weight: 700;
    background-image: ${({ theme }) => theme.gradient};
    color: #fff;
    border-radius: 5rem;
    padding: 0.7rem;
    display: flex;
    justify-content: center;
    cursor: pointer;
    transition: all ease-in-out 300ms;

    &:hover {
        box-shadow: 0px 0px 7px rgba(128, 74, 216, 0.6);
    }
`;

const AllSubmitBtn = ({ title, to }) => {
    const navigate = useNavigate();
    return (
        <Container>
            <Button type="submit" onClick={() => navigate(to)}>
                All {title}
            </Button>
        </Container>
    );
};

export default AllSubmitBtn;
