import React from "react";
import LoginFooter from "../Login/components/LoginFooter";
import { Login } from "../Login/style/LoginPageStyle";
import Join from "../../components/Join";

function SignUp() {
  return (
    <Login>
      <Join />
      <LoginFooter />
    </Login>
  );
}

export default SignUp;
