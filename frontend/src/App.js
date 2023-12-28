import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateCustomer from "./Components/AdminDashboard/CreateCustomer/createCustomer";
import React, { Component, useContext } from "react";
import LoginPage from "./Components/Auth/Login/LoginPage";
import SignUp from "./Components/Auth/SignUp/SignupPage";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "./context/ThemeContext";
import { lightTheme, darkTheme } from "./styles/theme";
import Dashboard from "./Components/Dashboard/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreateAccount from "./Components/Account/createAccount/CreateAccount";
import AccountDashboard from "./Components/Account/dashboard/AccountDashboard";
import TransactionDashboard from "./Components/Transaction/TransDashboard/TransactionDashboard";
import CreateTransaction from "./Components/Transaction/CreateTransaction/CreateTransaction";
import Withdraw from "./Components/Transaction/Withdraw/Withdraw";
import Layout from "./utils/Layout";
import AdminLayout from "./utils/AdminLayout";
import Home from "./Components/Home/Home";
import Offers from "./Components/Offers/Offers";
import Settings from "./Components/Settings/Settings";
import NoMatch from "./utils/NoMatch";
import AdminLoginPage from "./Components/Auth/AdminLogin/AdminLoginPage";
import AdminSignUp from "./Components/Auth/AdminSignUp/AdminSignupPage";
import AdminDashboard from "./Components/AdminDashboard/AdminDashboard";
import AdminTransactions from "./Components/AdminDashboard/AdminTransactions";
import AdminAccounts from "./Components/AdminDashboard/AdminAccounts";
import { WindowWidthProvider } from "./context/WinWidthContext";
import ForgotPassword from "./Components/Auth/ForgotPass/ForgotPassword";
import setAuthToken from "./utils/SetAuthToken";
import { jwtDecode } from "jwt-decode";

if (sessionStorage.getItem("jwtToken")) {
    // Set Auth Token header auth
    const token = sessionStorage.getItem("jwtToken");
    setAuthToken(token);
    console.log(token);
    // Decode token and get user info and exp
    const decoded = jwtDecode(token);
    // Check for expired token
    const currentTime = Date.now() / 1000; // in milliseconds
    if (decoded.exp < currentTime) {
        // Logout user
        sessionStorage.removeItem("jwtToken");
        setAuthToken(false);
        // Redirect to login
        window.location.href = "./login";
    }
}

function App() {
    const context = useContext(ThemeContext);
    const { theme } = context;
    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <WindowWidthProvider>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
                <ToastContainer />
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/login" element={<LoginPage />} />
                        <Route exact path="/signup" element={<SignUp />} />
                        <Route
                            exact
                            path="/admin/login"
                            element={<AdminLoginPage />}
                        />
                        <Route
                            exact
                            path="/admin/signup"
                            element={<AdminSignUp />}
                        />
                        <Route
                            exact
                            path="/forgotPassword"
                            element={<ForgotPassword />}
                        />
                        <Route
                            exact
                            path="/admin/createCustomer"
                            Component={() => (
                                <AdminLayout>
                                    <CreateCustomer />
                                </AdminLayout>
                            )}
                        />
                        <Route
                            exact
                            path="/offers"
                            Component={() => (
                                <Layout>
                                    <Offers />
                                </Layout>
                            )}
                        />
                        <Route
                            exact
                            path="/"
                            Component={() => (
                                <Layout>
                                    <Dashboard />
                                </Layout>
                            )}
                        />
                        <Route
                            exact
                            path="/admin/dashboard"
                            Component={() => (
                                <AdminLayout>
                                    <AdminDashboard />
                                </AdminLayout>
                            )}
                        />
                        <Route
                            exact
                            path="/admin/transactions"
                            Component={() => (
                                <AdminLayout>
                                    <AdminTransactions />
                                </AdminLayout>
                            )}
                        />
                        <Route
                            exact
                            path="/admin/accounts"
                            Component={() => (
                                <AdminLayout>
                                    <AdminAccounts />
                                </AdminLayout>
                            )}
                        />
                        <Route
                            exact
                            path="/home"
                            Component={() => (
                                <Layout>
                                    <Home />
                                </Layout>
                            )}
                        />
                        <Route
                            exact
                            path="/dashboard"
                            Component={() => (
                                <Layout>
                                    <Dashboard />
                                </Layout>
                            )}
                        />
                        <Route
                            exact
                            path="/createAccount"
                            Component={() => (
                                <Layout>
                                    <CreateAccount />
                                </Layout>
                            )}
                        />
                        <Route
                            exact
                            path="/accountDashboard/:accno"
                            Component={() => (
                                <Layout>
                                    <AccountDashboard />
                                </Layout>
                            )}
                        />
                        <Route
                            path="/transactionDashboard"
                            Component={() => (
                                <Layout>
                                    <TransactionDashboard />
                                </Layout>
                            )}
                        />
                        <Route
                            exact
                            path="/transact"
                            Component={() => (
                                <Layout>
                                    <CreateTransaction />
                                </Layout>
                            )}
                        />
                        <Route
                            exact
                            path="/withdraw"
                            Component={() => (
                                <Layout>
                                    <Withdraw />
                                </Layout>
                            )}
                        />
                        <Route
                            exact
                            path="/settings"
                            Component={() => (
                                <Layout>
                                    <Settings />
                                </Layout>
                            )}
                        />
                        <Route path="*" element={<NoMatch />} />
                    </Routes>
                </BrowserRouter>
            </WindowWidthProvider>
        </ThemeProvider>
    );
}

export default App;
