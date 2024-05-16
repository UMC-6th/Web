import React from "react";
import styled from "styled-components";

const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width:400px;
`;
const LoginTitle = styled.h1``;

const Loginform = styled.form`
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:20px;
`
const IdInput = styled.input`
  width:100%;
  padding:15px;
  border-radius: 40px;
`
const PwInput = styled.input`
  width:100%;
  padding:15px;
  border-radius: 40px;
`
const Submit = styled.button`
  margin: 20px;
  padding: 15px;
  width: 400px;
  border-radius: 40px;
  text-align:center;
  background-color: ${({ disabled }) => (disabled ? "#CFC549" : "gray")};
  color: white;
  border: none;
  cursor: ${({ disabled }) => (disabled ? "pointer" : "not-allowed")};
  
`
function Login() {
  return (
    <LoginContainer>
      <LoginTitle>로그인 페이지</LoginTitle>

      <Loginform>
        <IdInput type="text" placeholder="아이디"></IdInput>
        <PwInput type="password" placeholder="비밀번호"></PwInput>
        <Submit type="submit">제출하기</Submit>
      </Loginform>
    </LoginContainer>
  );
}

export default Login;
