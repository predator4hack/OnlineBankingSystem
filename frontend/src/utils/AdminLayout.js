import React, { useEffect } from "react";
import { GlobalStyles } from "../styles/global";
import { useNavigate } from "react-router-dom";
import AdminSidebar from "../Components/AdminSideBar/AdminSidebar";

const Layout = ({ children }) => {
    const userId = sessionStorage.getItem("userID");
    const navigate = useNavigate();
    console.log(userId);
    useEffect(() => {
        if (userId === null) navigate("/login");
    }, []);
    return (
        <>
            <GlobalStyles />
            <AdminSidebar />
            {children}
        </>
    );
};

export default Layout;
