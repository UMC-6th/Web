import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height:100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`

  display:flex;
  flex-direction:column;
  margin: 5px;
  padding: 5px;
`;

const Button = styled.button`
  margin: 5px;
  padding: 10px;
  background-color: ${({ disabled }) => (disabled ? 'gray' : 'blue')};
  color: white;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const ErrorMessage = styled.div`
  color: red;
`;

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    age: '',
    password: '',
    confirmPassword: '',
  });
  const [formValid, setFormValid] = useState(false);

  const validateForm = () => {
    let valid = true;
    const errors = {
      name: '',
      email: '',
      age: '',
      password: '',
      confirmPassword: '',
    };

    if (name.trim() === '') {
      errors.name = '이름을 입력하세요.';
      valid = false;
    }

    if (email.trim() === '' || !email.includes('@')) {
      errors.email = '올바른 이메일 주소를 입력하세요.';
      valid = false;
    }

    const ageNumber = Number(age);
    if (isNaN(ageNumber) || age.trim() === '') {
      errors.age = '나이를 숫자로 입력하세요.';
      valid = false;
    } else if (ageNumber < 0 || ageNumber % 1 !== 0) {
      errors.age = '올바른 나이를 입력하세요.';
      valid = false;
    } else if (ageNumber < 19) {
      errors.age = '우리 영화 사이트는 19살 이상만 가입이 가능합니다.';
      valid = false;
    }

    if (password.length < 4 || password.length > 12) {
      errors.password = '비밀번호는 4자리 이상, 12자리 이하여야 합니다.';
      valid = false;
    } else if (!/(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]/.test(password)) {
      errors.password = '영어, 숫자, 특수문자를 포함한 비밀번호를 입력하세요.';
      valid = false;
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = '비밀번호가 일치하지 않습니다.';
      valid = false;
    }

    setFormErrors(errors);
    setFormValid(valid);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('폼 데이터 전송:', { name, email, age, password });
    } else {
      console.log('유효성 검사 실패');
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {formErrors.name && <ErrorMessage>{formErrors.name}</ErrorMessage>}
        <Input
          type="email"
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {formErrors.email && <ErrorMessage>{formErrors.email}</ErrorMessage>}
        <Input
          type="text"
          placeholder="나이"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        {formErrors.age && <ErrorMessage>{formErrors.age}</ErrorMessage>}
        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {formErrors.password && <ErrorMessage>{formErrors.password}</ErrorMessage>}
        <Input
          type="password"
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {formErrors.confirmPassword && (
          <ErrorMessage>{formErrors.confirmPassword}</ErrorMessage>
        )}
        <Button type="submit" disabled={!formValid}>
          제출하기
        </Button>
      </form>
    </Container>
  );
};

export default Signup;
