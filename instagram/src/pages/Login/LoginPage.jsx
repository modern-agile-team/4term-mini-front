import React from "react";
import LoginBody from "./components/LoginBody";
import LoginFooter from "./components/LoginFooter";
import { Login } from "./style/LoginPageStyle";

function LoginPage() {
  return (
    <Login>
      <LoginBody />
      <LoginFooter />
    </Login>
  );
}

export default LoginPage;
