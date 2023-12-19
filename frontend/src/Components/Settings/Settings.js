import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Input from "./Input";
import axios from "axios";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import WinWidthContext from "../../context/WinWidthContext";

const Settings = () => {
    const baseURL = `http://${process.env.REACT_APP_API_URL}:9080`;
    const userId = sessionStorage.getItem("userID");
    const windowWidth = WinWidthContext();
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [data, setData] = useState({
        fathername: null,
        mothername: null,
        permanentAddress: null,
        currentAddress: null,
    });

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

    const submitFormHandler = (e) => {
        e.preventDefault();
        axios
            .put(`${baseURL}/changeDetails`, {
                ...user,
                permanentAddress: data.permanentAddress,
                currentAddress: data.currentAddress,
                fathername: data.fathername,
                mothername: data.mothername,
            })
            .then((res) => {
                if (res.data == "Success!") {
                    toast.success(res.data, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                    navigate("/dashboard");
                } else {
                    toast.error(res.data, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "light",
                    });
                }
            })
            .catch((error) => {
                toast.error(`Error: ${error.message}`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            });
    };
    return (
        <Container windowWidth={windowWidth}>
            <Form onSubmit={submitFormHandler}>
                <h2>Update Details</h2>
                <Input
                    type="text"
                    obj={user}
                    value={"userId"}
                    placeholder={`${userId}`}
                    handleInputChange={setUser}
                    read={true}
                />
                <Input
                    type="text"
                    obj={user}
                    value={"name"}
                    placeholder={`${user.name}`}
                    handleInputChange={setUser}
                    read={true}
                />
                <Input
                    type="text"
                    obj={user}
                    value={"email"}
                    placeholder={`${user.email}`}
                    handleInputChange={setUser}
                    read={true}
                />
                <Input
                    type="text"
                    obj={user}
                    value={"dob"}
                    placeholder={`Date Of Birth: ${user.dob}`}
                    handleInputChange={setUser}
                    read={true}
                />
                <Input
                    type="text"
                    obj={user}
                    value={"mobile"}
                    placeholder={`Mobile No. :${user.mobile}`}
                    handleInputChange={setUser}
                    read={true}
                />
                <Input
                    type="text"
                    obj={user}
                    value={"aadhar"}
                    placeholder={`Aadhar: ${user.aadhar}`}
                    handleInputChange={setUser}
                    read={true}
                />
                <Input
                    type="text"
                    obj={data}
                    value={"fathername"}
                    placeholder={`Father's Name: ${user.fathername}`}
                    handleInputChange={setData}
                    read={user.fathername !== null}
                />
                <Input
                    type="text"
                    obj={data}
                    value={"mothername"}
                    placeholder={`Mother's Name: ${user.mothername}`}
                    handleInputChange={setData}
                    read={user.mothername !== null}
                />
                <Input
                    type="text"
                    obj={data}
                    value={"permanentAddress"}
                    placeholder={`Permanent Address: ${user.permanentAddress}`}
                    handleInputChange={setData}
                    read={user.permanentAddress !== null}
                />
                <Input
                    type="text"
                    obj={data}
                    value={"currentAddress"}
                    placeholder={`Current Address: ${user.currentAddress}`}
                    handleInputChange={setData}
                    read={user.currentAddress !== null}
                />
                <PassContainer>
                    <h4>
                        <Link to="/forgotPassword">Change Password</Link>
                    </h4>
                </PassContainer>
                {user.permanentAddress === null && (
                    <button>Change Details</button>
                )}
            </Form>
        </Container>
    );
};

const Container = styled.div`
    width: auto;
    margin-left: ${(props) => (props.windowWidth >= 900 ? "16rem" : "5rem")};
    position: relative;
    padding: 5rem 4rem;
    min-width: 400px;
    backdrop-filter: blur(35px);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const PassContainer = styled.div`
    margin-left: 14rem;
    h4 {
        color: #808080;
        font-weight: bold;
        font-size: 13px;
        margin-top: 1rem;

        a {
            color: ${({ theme }) => theme.textColor};
            cursor: pointer;
            text-decoration: none;
        }
    }
`;

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    h2 {
        margin-bottom: 2rem;
        font-weight: 500;
        color: ${({ theme }) => theme.textColor};
        font-size: 1.5rem;
        display: flex;
        align-items: center;
    }

    button {
        text-transform: uppercase;
        width: 20%;
        margin: 2rem;
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
        border: none;

        &:hover {
            box-shadow: 0px 0px 7px rgba(128, 74, 216, 0.6);
        }
    }
`;

export default Settings;
