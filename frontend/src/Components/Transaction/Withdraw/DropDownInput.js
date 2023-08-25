import React from "react";
import styled from "styled-components";

const DropDownInput = ({ title, val, setVal, options }) => {
    return (
        <Container>
            <StyledInput
                value={val}
                onChange={(e) => {
                    setVal(e.target.value);
                }}
            >
                <StyledOption style={{ display: "none" }} value="" selected>
                    {title}
                </StyledOption>
                {options.map((option, index) => (
                    <StyledOption key={index} value={option}>
                        {option}
                    </StyledOption>
                ))}
            </StyledInput>
            <Status />
        </Container>
    );
};

const StyledInput = styled.select`
    width: 350px;
    height: 40px;
    border: none;
    margin: 0.5rem 0;
    background-color: #f5f5f5;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding: 0 1rem;
    transition: all 0.2s ease-in;

    &:hover {
        transform: translateY(-3px);
    }
`;

const StyledOption = styled.option`
    width: 350px;
    height: 40px;
    border: none;
    margin: 0.5rem 0;
    background-color: #f5f5f5;
    box-shadow: 0px 14px 9px -15px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    padding: 0 1rem;
    transition: all 0.2s ease-in;

    &:hover {
        transform: translateY(-3px);
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Status = styled.div`
    height: 10px;
    width: 10px;
    background: #9d9d9d;
    border-radius: 10px;
    margin-left: 1rem;

    ${StyledInput}:focus + & {
        background: #ffa689;
    }
    ${StyledInput}:invalid + & {
        background: #fe2f75;
    }
    ${StyledInput}:valid + & {
        background: #70edb9;
    }
`;

export default DropDownInput;
