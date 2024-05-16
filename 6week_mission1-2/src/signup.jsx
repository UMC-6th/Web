import React, { useState } from "react";
import styled from "styled-components";
import {Login} from "./Login";
import { Link } from "react-router-dom";

const SignupContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`; 

const Input = styled.input`
  display: flex;
  width: 400px;
  border-radius: 40px;
  flex-direction: column;
  margin-bottom:20px;
  padding: 15px;
`;

const Button = styled.button`
  margin: 20px;
  padding: 15px;
  width: 400px;
  border-radius: 40px;
  text-align:center;
  background-color: ${({ disabled }) => (disabled ? "#CFC549" : "gray")};
  color: white;
  border: none;
  cursor: ${({ disabled }) => (disabled ? "pointer" : "not-allowed")};
  
`;

const ErrorMessage = styled.div`
  width: 100%;
  position: relative;
  color:red;

`;

const IdWrap = styled.div`
  width:100%;
  position:relative;
  display:flex;
  
`
const Already = styled.div`
  width:50%;

`
const LoginPage = styled.button`
  border:none;
  background-color:transparent;
  color:white;
`

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    age: "",
    password: "",
    confirmPassword: "",
  });
  const [formValid, setFormValid] = useState();


  const validateForm = () => {
    let valid = true;
    const errors = {
      name: "",
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    };

    if (name.trim() === "") {
      errors.name = "이름을 입력하세요.";
      valid = false;
    }

    if (email.trim() === "" || !email.includes("@")) {
      errors.email = "올바른 이메일 주소를 입력하세요.";
      valid = false;
    }

    const ageNumber = Number(age);
    if (isNaN(ageNumber) || age.trim() === "") {
      errors.age = "나이를 숫자로 입력하세요.";
      valid = false;
    } else if (ageNumber < 0 || ageNumber % 1 !== 0) {
      errors.age = "올바른 나이를 입력하세요.";
      valid = false;
    } else if (ageNumber < 19) {
      errors.age = "우리 영화 사이트는 19살 이상만 가입이 가능합니다.";
      valid = false;
    }

    if (password.length < 4 || password.length > 12) {
      errors.password = "비밀번호는 4자리 이상, 12자리 이하여야 합니다.";
      valid = false;
    } else if (
      !/(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]/.test(password)
    ) {
      errors.password = "영어, 숫자, 특수문자를 포함한 비밀번호를 입력하세요.";
      valid = false;
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = "비밀번호가 일치하지 않습니다.";
      valid = false;
    }

    setFormErrors(errors);
    setFormValid(valid);
    
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("폼 데이터 전송:", { name, email, age, password });
      
    } else {
      console.log("유효성 검사 실패");
    }
  };

  

  return (
    <SignupContainer>
      <h1>제목</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <Input
            type="text"
            placeholder="이름"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {formErrors.name && <ErrorMessage>{formErrors.name}</ErrorMessage>}
        </div>
        <div>
          <Input
            type="email"
            placeholder="이메일"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {formErrors.email && <ErrorMessage>{formErrors.email}</ErrorMessage>}
        </div>
        <div>
          <Input
            type="text"
            placeholder="나이"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          {formErrors.age && <ErrorMessage>{formErrors.age}</ErrorMessage>}
        </div>
        <div>
          <Input
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {formErrors.password && (
            <ErrorMessage>{formErrors.password}</ErrorMessage>
          )}
        </div>
        <div>
          <Input
            type="password"
            placeholder="비밀번호 확인"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {formErrors.confirmPassword && (
            <ErrorMessage>{formErrors.confirmPassword}</ErrorMessage>
          )}
        </div>
        <Button to='/Login'  type="submit" disabled={formValid}>
          
          <Link to='/Login' disabled={formValid}>제출하기</Link>
        </Button>
        <IdWrap>
          <Already>이미 아이디가 있으신가요?</Already>
          <LoginPage>로그인 페이지로 이동하기</LoginPage>
        </IdWrap>
      </form>
    </SignupContainer>
  );
};

export default Signup;
