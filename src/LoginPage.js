import React from "react";
import { Login, LoginForm } from "react-admin";

const MyLoginForm = (props) => <LoginForm {...props} />;

const MyLoginPage = (props) => <Login LoginForm={<MyLoginForm />} {...props} />;

export default MyLoginPage;
