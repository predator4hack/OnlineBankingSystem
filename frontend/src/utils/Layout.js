import React, { useEffect } from "react";
import { GlobalStyles } from "../styles/global";
import Sidebar from "../Components/Sidebar/Sidebar";
import { useNavigate } from "react-router-dom";

const Layout = ({ children }) => {
    const userId = sessionStorage.getItem("userID");
    const navigate = useNavigate();
    console.log(userId);
    useEffect(() => {
        if (userId == null) navigate("/login");
    }, []);
    return (
        <>
            <GlobalStyles />
            <Sidebar />
            {userId !== null && children}
        </>
    );
};

export default Layout;
