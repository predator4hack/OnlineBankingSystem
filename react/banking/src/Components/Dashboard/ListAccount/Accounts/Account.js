import React, { useContext } from "react";
import styled from "styled-components";
import { ActiveContext } from "../Main";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem 0;
    border-bottom: 1px solid rgba(190, 190, 190, 0.22);
    cursor: pointer;
    background-color: ${({ theme }) => theme.primary};
    transition: all ease-in-out 300ms;

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
    width: 30%;
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

const Redirect = styled.img`
    height: 15px;
    width: 15px;
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
    width: 17%;
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
    margin-left: 1rem;
    position: absolute;
    right: 7rem;
`;

const Account = ({ data }) => {
    const { accno, acctype, balance, openingDate, ifsc, branch } = data;
    const activeContext = useContext(ActiveContext);
    const navigate = useNavigate();
    return (
        <Container onClick={() => activeContext.actDispatch(accno)}>
            <AccountNo>
                <AccountTypeImg
                    src={require(`../../../../assets/images/${acctype}.png`)}
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
            <Redirect
                onClick={() => navigate(`/accountDashboard/${accno}`)}
                src={require(`../../../../assets/images/redirect.png`)}
            />
        </Container>
    );
};

export default Account;
