import React from "react";
import styled from "styled-components";

const LoginTitle = styled.h3`
    color:white;
`
  const LoginContainer = styled.div`
    width: 400px;
    margin: 0 auto; /* 가운데 정렬을 위한 마진 설정 */
    border-radius: 30px;
    text-align: center;
  
  `
  
  const LoginInput = styled.input`
    display: block;
    border-radius: 20px;
    width: 400px;
    height: 35px;
    margin-top: 5%;
  
  `
  


export default function Login(){
    return(
    <LoginContainer>
        <LoginTitle>로그인페이지</LoginTitle>
        <LoginInput type="text" placeholder="아이디"/>
        <LoginInput type="text" placeholder="비밀번호"/>
        <LoginInput type="submit" value="로그인"/>
    </LoginContainer>
    );
}