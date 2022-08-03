import React from "react";
import { Link } from "react-router-dom";
import { Input } from "../../../components/Common";
import { ImgLogo, LoginBox, LoginBtn, LoginContainer } from "../style/LoginPageStyle";

function LoginBody() {
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   console.log("click");
  // }
  return (
    <LoginBox>
      <LoginContainer>
        <ImgLogo alt="instagram logo" src="img/instagramLogo.png" />
        <Input />
        <Link to="/main">
          <LoginBtn>로그인</LoginBtn>
        </Link>
      </LoginContainer>
    </LoginBox>
  );
}

export default LoginBody;
