import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Profile from "./Profile";
import axios from "axios";
import WinWidthContext from "../../context/WinWidthContext";

const Home = () => {
    const baseURL = `http://${process.env.REACT_APP_API_URL}`;
    const userId = sessionStorage.getItem("userID");
    const [user, setUser] = useState({});
    const windowWidth = WinWidthContext();
    useEffect(() => {
        async function fetchUserData() {
            try {
                const res = await axios.get(`${baseURL}/fetchUser/${userId}`);
                setUser(res.data);
            } catch (e) {
                console.log(e);
            }
        }
        fetchUserData();
    }, []);

    return (
        <Container windowwidth={windowWidth}>
            <Profile name={user.name} />
            <Title>
                <h1>User Details</h1>
            </Title>
            <Wrapper>
                <Text>
                    <Key>
                        <h1>User ID: </h1>
                    </Key>
                    <Value>
                        <h2>{userId}</h2>
                    </Value>
                </Text>
                <Text>
                    <Key>
                        <h1>Name: </h1>
                    </Key>
                    <Value>
                        <h2>{user.name}</h2>
                    </Value>
                </Text>
                <Text>
                    <Key>
                        <h1>Email ID: </h1>
                    </Key>
                    <Value>
                        <h2>{user.email}</h2>
                    </Value>
                </Text>
                <Text>
                    <Key>
                        <h1>Mobile No: </h1>
                    </Key>
                    <Value>
                        <h2>{user.mobile}</h2>
                    </Value>
                </Text>
                <Text>
                    <Key>
                        <h1>Father's Name: </h1>
                    </Key>
                    <Value>
                        <h2>{user.fathername}</h2>
                    </Value>
                </Text>
                <Text>
                    <Key>
                        <h1>Mother's Name: </h1>
                    </Key>
                    <Value>
                        <h2>{user.mothername}</h2>
                    </Value>
                </Text>
                <Text>
                    <Key>
                        <h1>Permanent Address: </h1>
                    </Key>
                    <Value>
                        <h2>{user.permanentAddress}</h2>
                    </Value>
                </Text>
                <Text>
                    <Key>
                        <h1>Current Address: </h1>
                    </Key>
                    <Value>
                        <h2>{user.currentAddress}</h2>
                    </Value>
                </Text>
                <Text>
                    <Key>
                        <h1>Aadhar: </h1>
                    </Key>
                    <Value>
                        <h2>{user.aadhar}</h2>
                    </Value>
                </Text>
            </Wrapper>
        </Container>
    );
};

const Container = styled.div`
    width: auto;
    margin-left: ${(props) => (props.windowwidth >= 900 ? "16rem" : "5rem")};
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
    display: flex;
    h1 {
        font-size: 0.9rem;
        font-weight: 500;
        color: ${({ theme }) => theme.textColor};
        margin: 0;
    }
`;

const Key = styled.div`
    font-size: 0.9rem;
    font-weight: 300;
    width: 35%;
    h1 {
        font-size: 0.9rem;
        font-weight: 500;
        color: ${({ theme }) => theme.textColor};
        margin: 0;
    }
`;
const Value = styled.div`
    h2 {
        font-size: 0.9rem;
        font-weight: 300;
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

export default Home;
