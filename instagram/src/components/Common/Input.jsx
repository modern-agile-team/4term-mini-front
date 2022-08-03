import { InputBox, InputText } from "../../styles/InputStyle";
import React from "react";

function Input() {
  return (
    <InputBox>
      <InputText placeholder="전화번호, 사용자 이름 또는 이메일" />
      <InputText placeholder="비밀번호" />
    </InputBox>
  );
}

export default Input;
