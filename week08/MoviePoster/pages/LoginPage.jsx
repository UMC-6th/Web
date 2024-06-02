import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const JoinInput = styled.input`
    width: 90%;
    max-width: 550px;
    height: 50px;
    margin-top: 10px;
    border-radius: 50px;
    padding-left: 20px;
    font-size: clamp(14px, 4vw, 16px); /* 반응형 폰트 크기 */
    border: none;
`;

const Joinform = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const JoinText = styled.div`
    font-size: clamp(24px, 5vw, 50px); /* 반응형 폰트 크기 */
    font-weight: 600;
    margin-top: 10px;
    color: white;
`;

const ErrorText = styled.div`
    color: red;
    margin-top: 5px;
`;

const JoinButton = styled.button`
    width: 90%;
    max-width: 550px;
    height: 50px;
    margin-top: 20px;
    border-radius: 50px;
    background-color: ${({ disabled }) => (disabled ? 'gray' : 'skyblue')};
    color: white;
    font-weight: bold;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    font-size: clamp(16px, 4vw, 18px); /* 반응형 폰트 크기 */
`;

const Login = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
`;

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleUsernameChange = (e) => {
        const value = e.target.value;
        setUsername(value);
        if (!value.trim()) {
            setUsernameError('아이디를 입력해 주세요.');
        } else {
            setUsernameError('');
        }
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        if (!value.trim()) {
            setPasswordError('비밀번호를 입력해 주세요.');
        } else {
            setPasswordError('');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username.trim()) {
            setUsernameError('아이디를 입력해 주세요.');
        }

        if (!password.trim()) {
            setPasswordError('비밀번호를 입력해 주세요.');
        }

        if (username.trim() && password.trim()) {
            setLoading(true);

            try {
                const response = await axios.post('http://localhost:8080/auth/login', {
                    username: username,
                    password: password,
                });

                if (response.status === 200) {
                    const token = response.data.token;
                    localStorage.setItem('token', token);
                    navigate('/');
                } else {
                    console.error('Login failed with status:', response.status);
                }
            } catch (error) {
                if (error.response) {
                    if (error.response.status === 401) {
                        alert('로그인 실패! 아이디와 비밀번호가 일치하지 않습니다.');
                    } else {
                        alert(`서버 에러: ${error.response.status}`);
                    }
                } else if (error.request) {
                    console.error('No response was received');
                } else {
                    console.error('Error', error.message);
                }
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <Login>
            <Joinform onSubmit={handleSubmit}>
                <JoinText>로그인 페이지</JoinText>
                <JoinInput
                    type="text"
                    placeholder="아이디"
                    value={username}
                    onChange={handleUsernameChange}
                />
                {usernameError && <ErrorText>{usernameError}</ErrorText>}
                <JoinInput
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={handlePasswordChange}
                />
                {passwordError && <ErrorText>{passwordError}</ErrorText>}
                <JoinButton type="submit" disabled={!username || !password}>
                    {loading ? '로딩 중...' : '로그인'}
                </JoinButton>
            </Joinform>
        </Login>
    );
}

export default LoginPage;
