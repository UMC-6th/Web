import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function LoginPage({ registeredUser }) {
    const [formData, setFormData] = useState({
        idname: '',
        passwordr: ''
    });

    const [formErrors, setFormErrors] = useState({
        idname: '',
        passwordr: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        setFormErrors({ ...formErrors, [id]: '' });

        if (id === 'passwordr') {
            if (value.length < 4) {
                setFormErrors(prevErrors => ({
                    ...prevErrors,
                    passwordr: '비밀번호는 4자리 이상이어야 합니다!'
                }));
            } else if (value.length > 12) {
                setFormErrors(prevErrors => ({
                    ...prevErrors,
                    passwordr: '비밀번호는 최대 12자리까지 가능합니다!'
                }));
            } else if (!isValidPassword(value)) {
                setFormErrors(prevErrors => ({
                    ...prevErrors,
                    passwordr: '비밀번호는 영어, 숫자, 특수문자를 모두 포함해야 합니다!'
                }));
            } else {
                setFormErrors(prevErrors => ({
                    ...prevErrors,
                    passwordr: ''
                }));
            }
        }
    };

    const isValidPassword = (passwordr) => {
        const hasLetter = /[a-zA-Z]/.test(passwordr);
        const hasNumber = /[0-9]/.test(passwordr);
        const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(passwordr);
        return hasLetter && hasNumber && hasSpecialCharacter;
    };

    const validateInput = (id) => {
        const value = formData[id];
        return value && value.trim() !== '';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};
        Object.keys(formData).forEach((key) => {
            if (!validateInput(key)) {
                errors[key] = `${key === 'idname' ? '아이디' : '비밀번호'}를 입력하세요!`;
            }
        });
        setFormErrors(errors);
        const isValid = Object.keys(errors).length === 0;
        if (!isValid) {
            return;
        }

        // 회원가입 시 저장된 아이디와 비밀번호
        const { idname, passwordr } = formData;
        const { idname: registeredId, password: registeredPassword } = registeredUser || {};

        // 로그인 성공 여부 확인
        if (idname === registeredId && passwordr === registeredPassword) {
            console.log('로그인에 성공했습니다.');
            alert('로그인에 성공했습니다.'); // 로그인 성공 알림
            navigate('/main-page'); // 로그인 성공 시 메인 페이지로 이동
        } else {
            console.log('아이디 또는 비밀번호가 잘못되었습니다.');
            setFormErrors(prevErrors => ({
                ...prevErrors,
                idname: '아이디 또는 비밀번호가 잘못되었습니다.'
            }));
        }
    };

    const isFormValid = Object.values(formErrors).every(error => error === '');

    return (
        <Wrapper_Login>
            <form onSubmit={handleSubmit}>
                <Title>로그인 페이지</Title>
                <InputsContainer>
                    <InputContainer>
                        <StyleInput
                            type="text"
                            id="idname"
                            value={formData.idname}
                            onChange={handleChange}
                            placeholder="아이디를 입력해주세요"
                        />
                        {formErrors.idname && <ErrorMessage>{formErrors.idname}</ErrorMessage>}
                    </InputContainer>
                    <InputContainer>
                        <StyleInput
                            type="password"
                            id="passwordr"
                            value={formData.passwordr}
                            onChange={handleChange}
                            placeholder="비밀번호를 입력해주세요"
                        />
                        {formErrors.passwordr && <ErrorMessage>{formErrors.passwordr}</ErrorMessage>}
                    </InputContainer>
                </InputsContainer>
                <Button disabled={!isFormValid}>로그인</Button>
            </form>
        </Wrapper_Login>
    );
}

const Wrapper_Login = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    color: white;
    padding-top: 50px;
    text-align: center;
`;

const Title = styled.div`
    font-size: 25px;
    margin-top: 20px;
    padding: 40px;
`;

const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const InputContainer = styled.div`
    position: relative;
    margin-bottom: 30px;
`;

const StyleInput = styled.input`
    width: 600px;
    height: 20px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 20px;
    outline: none;
    transition: border-color 0.3s;
    background-color: white;
    &:focus {
        border-color: dodgerblue;
    }
    &::placeholder {
        color: gray;
    }
`;

const ErrorMessage = styled.small`
    color: red;
    display: block;
`;

const Button = styled.button`
    margin-top: 20px;
    width: 618px;
    height: 40px;
    border-radius: 20px;
`;

export default LoginPage;
