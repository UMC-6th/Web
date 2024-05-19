import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  text-decoration: none;
  color :white;
  font-weight:bold;
  font-size : 16px;
  
`;

const FormContainer = styled.div`
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: none;
  border-radius: 5px;
  margin-left: 29%;
  text-align: center;

  h2 {
    text-align: center;
    color: white;
    font-size : 20px;
    margin-top : 20px;
  }

  form {
    margin-top : 20px;
    display: flex;
    flex-direction: column;

    div {
      color: white;
      margin: 20px;
      margin-left : 0px;
      margin-bottom: 10px;
      display: flex;
      flex-direction: column;

      input {
       
        margin-right : 10px;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 40px;
        font-size: 16px;
        width: 500px;
        height: 30px;
      }

      span {
        color: red;
        font-size: 14px;
      }
    }
    

    button {
      padding: 8px;
      border-radius: 40px;
      font-size: 20px;
      width: 500px;
      height: 50px;
      margin: 30px;
      margin-left: 10px;
      font-color: black;
      background-color: white;
      color: black;
      border: none;
      cursor: pointer;
      font-weight: 600;
      transition: background-color 0.3s;
      

      &:disabled {
        margin: 30px;
        
        background-color: white;
        font-color: black;
        cursor: not-allowed;
        width: 520px;
        height: 60px;
      }

      &:active,
      &:focus {
        background-color: orange; /* 클릭 또는 포커스 시 색상을 변경합니다. */
      }
    }
  }
`;

const Signup = () => {
  const [formData, setFormData] = useState({
    
    email: '',
    password: '',
    
  });

  const [errors, setErrors] = useState({
   
    email: '',
    password: '',
  
  });

  const [submitDisabled, setSubmitDisabled] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 폼 유효성 검사 수행
    validateForm();

    // 오류가 있는지 확인
    if (Object.values(errors).every((error) => error === '')) {
      // 오류가 없으면 제출 처리 수행
      console.log("폼 제출 성공:", formData);
    } else {
      // 오류가 있는 경우 오류 메시지를 입력 상태에 설정
      console.log("폼 제출 실패:", errors);
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};
  
    // 각 입력값의 유효성 검사를 수행
  
    
  
    // 이메일 유효성 검사
    if (formData.email.trim() === '') {
      newErrors.email = '이메일을 입력하세요';
      isValid = false;
    } else if (!formData.email.includes('@')) {
      newErrors.email = '이메일 형식이 올바르지 않습니다';
      isValid = false;
    }
  
    
  
    // 비밀번호 유효성 검사
    if (formData.password.length < 4 || formData.password.length > 12) {
      newErrors.password = '비밀번호는 4자 이상 12자 이하여야 합니다';
      isValid = false;
    } else if (!/(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(formData.password)) {
      newErrors.password = '비밀번호는 영문, 숫자, 특수문자를 포함해야 합니다';
      isValid = false;
    }

    // 오류 상태 업데이트
    setErrors(newErrors);
    setSubmitDisabled(false); // 항상 활성화
  };
  

  return (
    <FormContainer>
      <h2>로그인 페이지</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
          placeholder="이메일을 입력하세요"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {submitDisabled && errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <input
          placeholder="비밀번호를 입력하세요"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {submitDisabled && errors.password && <span>{errors.password}</span>}
        </div>
        <button type="submit" disabled={submitDisabled}>로그인</button>
        <span style={{  marginBottom : '30px', color: 'white', fontSize: '14px' , marginTop:'20px'}}>
          회원가입이 필요하신가요?
          <StyledLink
            to='/signup'> 회원가입 페이지로 이동하기
            </StyledLink>
        </span>
      </form>
    </FormContainer>
  );
};

export default Signup;
