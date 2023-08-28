import React, { useContext } from "react";
import styled from "styled-components";
import { ActiveContext } from "../Main";
import { useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(190, 190, 190, 0.22);
    cursor: pointer;
    background-color: ${(props) =>
        props.active ? props.theme.secondary : props.theme.primary};
    transition: all ease-in-out 300ms;
    min-width: 900px;

    &:hover {
        /* box-shadow: 0px 10px 8px -8px rgba(138, 153, 192, 0.6); */
        background-color: ${({ theme }) => theme.secondary};
    }
`;

const Text = styled.h1`
    font-size: 0.8rem;
    font-weight: 500;
    color: ${({ theme }) => theme.textColor};
    margin: 0;
`;

const Subtitle = styled(Text)`
    font-size: 0.6rem;
    color: #b2bfe1;
    margin-top: 2px;
`;

const AccountNo = styled.div`
    width: 20%;
    display: flex;
    align-items: center;
`;

const PropertyText = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
`;

const AccountTypeImg = styled.img`
    height: 30px;
    width: 30px;
`;

const Redirect = styled(Icon)`
    color: ${(props) => !props.active && props.theme.textColor};
    font-size: 1.2rem;
    margin-right: 1rem;
    font-weight: 2rem;
`;
const PropertyStreet = styled(Text)`
    font-size: 0.8rem;
`;
const DateOpened = styled(Text)`
    width: 15%;
`;
const Balance = styled(Text)`
    width: 15%;
`;
const Branch = styled.div`
    width: 14%;
`;
const Status = styled.div`
    display: flex;
    align-items: center;
`;
const StatusIndicator = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 10px;
    background-color: ${(props) => props.color};
    margin-left: 7rem;
    position: relative;
    right: 7rem;
`;

const Account = ({ data }) => {
    const {
        accno,
        acctype,
        balance,
        openingDate,
        ifsc,
        branch,
        disabled,
    } = data;
    const activeContext = useContext(ActiveContext);
    const navigate = useNavigate();
    return (
        <Container
            onClick={() => activeContext.actDispatch(accno)}
            active={accno === activeContext.actAccount}
        >
            <AccountNo>
                <AccountTypeImg
                    src={require(`../../../../assets/images/${acctype.toLowerCase()}.png`)}
                />
                <PropertyText>
                    <PropertyStreet>{accno}</PropertyStreet>
                    {/* <Subtitle>
                        {branch} {ifsc}
                    </Subtitle> */}
                </PropertyText>
            </AccountNo>
            <DateOpened>{openingDate}</DateOpened>
            <Balance>${balance}</Balance>
            <Branch>
                <Text>{branch}</Text>
                <Subtitle>{ifsc}</Subtitle>
            </Branch>
            <Balance>{acctype}</Balance>
            <Status>
                {(() => {
                    switch (disabled) {
                        case true:
                            return <StatusIndicator color="#F17E7E" />;
                        case false:
                            return <StatusIndicator color="#75C282" />;
                        default:
                            return <StatusIndicator color="#AAA5A5" />;
                    }
                })()}
            </Status>
            <Redirect
                onClick={() => navigate(`/accountDashboard/${accno}`)}
                active={accno === activeContext.actAccount}
                className="iconify"
                icon="mdi-light:fullscreen"
            />
        </Container>
    );
};

export default Account;
