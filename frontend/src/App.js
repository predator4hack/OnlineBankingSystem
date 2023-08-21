import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddCustomer from "./Components/addCustomer";
import React, { Component, useContext } from "react";
import LoginPage from "./Components/Auth/Login/LoginPage";
import SignUp from "./Components/Auth/SignUp/SignupPage";
import Test from "./Components/Test";
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

function App() {
    const context = useContext(ThemeContext);
    const { theme } = context;
    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
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
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/admin/login" element={<AdminLoginPage />} />
                    <Route path="/admin/signup" element={<AdminSignUp />} />
                    <Route
                        path="/offers"
                        Component={() => (
                            <Layout>
                                <Offers />
                            </Layout>
                        )}
                    />
                    <Route
                        path="/"
                        Component={() => (
                            <Layout>
                                <Dashboard />
                            </Layout>
                        )}
                    />
                    <Route
                        path="/admin/dashboard"
                        Component={() => (
                            <AdminLayout>
                                <AdminDashboard />
                            </AdminLayout>
                        )}
                    />
                    <Route
                        path="/admin/transactions"
                        Component={() => (
                            <AdminLayout>
                                <AdminTransactions />
                            </AdminLayout>
                        )}
                    />
                    <Route
                        path="/admin/accounts"
                        Component={() => (
                            <AdminLayout>
                                <AdminAccounts />
                            </AdminLayout>
                        )}
                    />
                    <Route
                        path="/home"
                        Component={() => (
                            <Layout>
                                <Home />
                            </Layout>
                        )}
                    />
                    <Route
                        path="/dashboard"
                        Component={() => (
                            <Layout>
                                <Dashboard />
                            </Layout>
                        )}
                    />
                    <Route
                        path="/createAccount"
                        Component={() => (
                            <Layout>
                                <CreateAccount />
                            </Layout>
                        )}
                    />
                    <Route
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
                        path="/transact"
                        Component={() => (
                            <Layout>
                                <CreateTransaction />
                            </Layout>
                        )}
                    />
                    <Route
                        path="/withdraw"
                        Component={() => (
                            <Layout>
                                <Withdraw />
                            </Layout>
                        )}
                    />
                    <Route
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
        </ThemeProvider>
    );
}

export default App;
