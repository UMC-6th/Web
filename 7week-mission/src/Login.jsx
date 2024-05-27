import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const LoginContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 400px;
`;
const LoginTitle = styled.h1``;

const Loginform = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;
`;
const IdInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 15px;
  border-radius: 40px;
`;
const PwInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 15px;
  border-radius: 40px;
`;
const Submit = styled.button`
  margin: 20px;
  padding: 15px;
  width: 100%;

  border-radius: 40px;
  text-align: center;
  background-color: ${({ disabled }) => (disabled ? "gray" : "#CFC549")};
  color: white;
  border: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;
const ErrorMessage = styled.div`
  width: 100%;
  position: relative;
  color: red;
`;

const InputWrap = styled.div`
  width: 100%;
`;

function Login() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [formErrors, setFormErrors] = useState({
    userId: "",
    password: "",
  });
  const [formValid, setFormValid] = useState(false); // 초기값을 false로 설정
  const navigate = useNavigate();

  const validateForm = () => {
    let valid = true;
    const errors = {
      userId: "",
      password: "",
    };
    if (userId.trim() === "") {
      errors.userId = "아이디를 입력하세요.";
      valid = false;
    }

    if (password.trim() === "") {
      errors.password = "비밀번호를 입력하세요.";
      valid = false;
    } else if (password.length < 4 || password.length > 12) {
      errors.password = "비밀번호는 4자리 이상, 12자리 이하여야 합니다.";
      valid = false;
    } else if (
      !/(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]/.test(password)
    ) {
      errors.password = "영어, 숫자, 특수문자를 포함한 비밀번호를 입력하세요.";
      valid = false;
    }

    setFormErrors(errors);
    setFormValid(valid);

    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      const loginData = {
        username: userId,
        password: password,
      };

      try {
        const response = await fetch("http://localhost:8080/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        });

        const data = await response.json();
        console.log("응답 데이터:", data);

        if (!response.ok) {
          throw new Error("로그인에 실패했습니다.");
        }

        console.log("로그인 성공:", data);
        localStorage.setItem("token", data.token); // 토큰 저장
        localStorage.setItem("username", data.username); // 사용자 이름 저장
        alert("로그인 성공!");
        navigate("/"); // 로그인 성공 후 메인 페이지로 이동
      } catch (error) {
        console.error("로그인 오류:", error);
        alert("로그인에 실패했습니다.");
      }
    } else {
      console.log("유효성 검사 실패");
    }
  };

  useEffect(() => {
    validateForm(); // 폼 입력값이 변경될 때마다 유효성 검사를 실행
  }, [userId, password]);

  return (
    <LoginContainer>
      <LoginTitle>로그인 페이지</LoginTitle>

      <Loginform onSubmit={handleSubmit}>
        <InputWrap>
          <IdInput
            type="text"
            placeholder="아이디"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          {formErrors.userId && (
            <ErrorMessage>{formErrors.userId}</ErrorMessage>
          )}
        </InputWrap>

        <InputWrap>
          <PwInput
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {formErrors.password && (
            <ErrorMessage>{formErrors.password}</ErrorMessage>
          )}
        </InputWrap>

        <Submit type="submit" disabled={!formValid}>
          로그인
        </Submit>
      </Loginform>
    </LoginContainer>
  );
}

export default Login;
