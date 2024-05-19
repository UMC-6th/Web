import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 16px;
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
    font-size: 20px;
    margin-top: 20px;
  }

  form {
    margin-top: 20px;
    display: flex;
    flex-direction: column;

    div {
      position: relative; /* 오류 메시지를 절대 위치로 설정하기 위해 부모 요소를 상대적으로 설정 */
      margin: 20px;
      margin-left: 0px;
      margin-bottom: 10px;
      display: flex;
      flex-direction: column;

      input {
        margin-right: 10px;
        padding: 8px;
        border: 1px solid #ccc;
        border-radius: 40px;
        font-size: 16px;
        width: 500px;
        height: 30px;
      }

      span {
        text-align : left;
        position: relative; /* 입력 창 아래에 오류 메시지를 표시하기 위해 절대 위치로 설정 */
        bottom: -20px; /* 오류 메시지가 입력 창 아래에 위치하도록 조정 */
        margin : 10px;
        left: 0;
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
        background-color: orange;
      }
    }
  }
`;

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    age: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // 입력값이 변경될 때마다 유효성 검사 수행
    validateInput(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 폼 유효성 검사 수행
    validateForm();
  };

  const validateInput = (name, value) => {
    let errorMessage = '';

    // 이름 유효성 검사
    if (name === 'name' && value.trim() === '') {
      errorMessage = '이름을 입력하세요';
    }

    // 이메일 유효성 검사
    if (name === 'email' && value.trim() === '') {
      errorMessage = '이메일을 입력하세요';
    } else if (name === 'email' && !value.includes('@')) {
      errorMessage = '이메일 형식이 올바르지 않습니다';
    }

    // 나이 유효성 검사
    if (name === 'age') {
      const age = parseFloat(value);
       if (isNaN(age)) {
        errorMessage = '나이는 숫자여야 합니다.'
      }
      else if ( age < 18 && age > 0) {
        errorMessage = '우리 영화 사이트는 19살 이상만 가입이 가능합니다.';
      } else if (age <0) {
        errorMessage = '나이는 음수가 될 수 없습니다.';
      } else if (!Number.isNaN(age) && !Number.isInteger(age)) {
        errorMessage = '나이는 소수가 될 수 없습니다.'
      }
    }

    // 비밀번호 유효성 검사
    if (name === 'password') {
      if (value.length < 4) {
        errorMessage = '비밀번호는 최소 4자리 이상이어야 합니다.';
      } else if (!/(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(value)) {
        errorMessage = '비밀번호는 영문, 숫자, 특수문자를 포함해야 합니다';
      } else if ( value.length > 12){
        errorMessage = '비밀번호는 최대 12자리까지 가능합니다.';
      }
    }

    // 비밀번호 확인 유효성 검사
    if (name === 'confirmPassword' && value !== formData.password) {
      errorMessage = '비밀번호가 일치하지 않습니다';
    }

    // 오류 상태 업데이트
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMessage,
    }));
  };

  const validateForm = () => {
    let isValid = true;

    // 모든 입력 필드의 오류 메시지가 비어 있는지 확인
    Object.values(errors).forEach((error) => {
      if (error) {
        isValid = false;
      }
    });

    // 오류가 없으면 제출 처리 수행
    if (isValid) {
      console.log("폼 제출 성공:", formData);
      navigate('/Login');
    } else {
      console.log("폼 제출 실패:", errors);
    }
  };

  return (
    <FormContainer>
      <h2>회원가입 페이지</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="이름을 입력하세요"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <input
          placeholder="이메일을 입력하세요"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <div>
          <input
          placeholder="나이를 입력하세요"
            type="text"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
          {errors.age && <span>{errors.age}</span>}
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
          {errors.password && <span>{errors.password}</span>}
        </div>
        <div>
          <input
          placeholder="비밀번호 확인"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
          {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
        </div>
        <button type="submit">제출하기</button>
        <span style={{ marginBottom: '30px', color: 'white', fontSize: '14px', marginTop: '20px' }}>
          이미 아이디가 있으신가요? 
          <StyledLink
            to='/Login'> 로그인 페이지로 이동하기
          </StyledLink>
        </span>
      </form>
    </FormContainer>
  );
};

export default Signup;
