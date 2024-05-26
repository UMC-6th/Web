import { Link } from 'react-router-dom';
import axios from 'axios';
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
      position: relative;
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
        text-align: left;
        position: relative;
        bottom: -20px;
        margin: 5px;
        margin-top: 0px;
        margin-bottom: 5px;
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
      color: black;
      background-color: white;
      border: none;
      cursor: pointer;
      font-weight: 600;
      transition: background-color 0.3s;

      &:disabled {
        margin: 30px;
        background-color: white;
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

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/auth/login', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // 로그인 성공 시 토큰을 로컬 스토리지에 저장
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('username', formData.username);

      // 로그인 성공 시 홈페이지로 이동
      console.log('로그인 성공:', response.data);
      navigate('/');
      window.location.reload();  // 로그인 후 페이지 새로고침
    } catch (error) {
      console.error('로그인 실패:', error.response ? error.response.data : error.message);

      // 로그인 실패 시 에러 메시지 표시
      setErrors({
        username: '아이디 또는 비밀번호가 잘못되었습니다.',
        password: '아이디 또는 비밀번호가 잘못되었습니다.',
      });
    }
  };

  return (
    <FormContainer>
      <h2>로그인 페이지</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            placeholder="아이디를 입력하세요."
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          {errors.username && <span>{errors.username}</span>}
        </div>
        <div>
          <input
            placeholder="비밀번호를 입력하세요."
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {errors.password && <span>{errors.password}</span>}
        </div>
        <button type="submit">로그인</button>
        <span style={{ marginBottom: '30px', color: 'white', fontSize: '14px', marginTop: '20px' }}>
          회원가입이 필요하신가요?
          <StyledLink to='/signup'> 회원가입 페이지로 이동하기</StyledLink>
        </span>
      </form>
    </FormContainer>
  );
};

export default Login;
