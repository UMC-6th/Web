import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import media from '../styles/media';

function LoginPage() {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [loading, setLoading] = useState(false);

    const [idError, setIdError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        setIdError(!id ? '아이디를 입력해주세요!' : '');
        setPasswordError(
            !password ? '비밀번호를 입력해주세요!' :
            password.length < 4 ? '비밀번호는 최소 4자리 이상 입력해주세요.' :
            password.length > 12 ? '비밀번호는 최대 12자리 입니다.' :
            !/[A-Za-z]/.test(password) || !/\d/.test(password) || !/[!@#$%^&*]/.test(password) ? '비밀번호는 영어, 숫자, 특수문자를 포함해주세요.' : ''
        );
        setIsActive(!idError && !passwordError);
    }, [id, password, idError, passwordError]);

    const handleSubmit = () => {
        if (isActive) {
            console.log('아이디:',id);
            console.log('비밀번호:', password);

            const requestBody = {
                username: id,
                password: password
            };

            setLoading(true);
            axios.post('http://localhost:8080/auth/login', requestBody)
                .then(response => {
                    if (response.status === 200) {
                        const token = response.data.token;
                        localStorage.setItem('token', token);
                        navigate('/');
                    } else {
                        console.error('Sign-up failed with status:', response.status);
                    }
                })
                .catch(error => {
                    if (error.response) {
                        if (error.response.status === 401) {
                            console.log(error.response.status, error.response.message);
                            alert('로그인 실패! 아이디와 비밀번호가 일치하지 않습니다.');
                        } else {
                            alert(`서버 에러: ${error.response.status}`);
                        }
                    } else if (error.request) {
                        console.error('No response was received');
                    } else {
                        console.error('Error', error.message);
                    }
                })
                .finally(() => {
                    setLoading(false);
                });
        }
    };

    return(
        loading 
            ? <Banner>로딩 중...</Banner>
            : <Container>
                <LoginContainer>
                    <MainText>로그인 페이지</MainText>
                    <FormWrapper>
                        <InputBox type="text" id="login-id" placeholder="아이디" value={id} onChange={(e) => setId(e.target.value)}/>
                        {idError && <AlertText>{idError}</AlertText>}
                        <InputBox type="password" id="login-pw" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)}/>
                        {passwordError && <AlertText>{passwordError}</AlertText>}
                        <SubmitButton isActive={isActive} disabled={!isActive} onClick={handleSubmit} style={{backgroundColor: isActive ? 'orange' : 'white'}}>로그인</SubmitButton>
                    </FormWrapper>
                </LoginContainer>
            </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -100px;
`;

const LoginContainer = styled.div`
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    ${media.mobile`
        width: 80%;
    `}
`;

const MainText = styled.p`
    font-size: 25px;
    font-weight: 600;
    color: white;

    ${media.mobile`
        font-size: 22px;
    `}
`;

const FormWrapper = styled.div`
    width: 85%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const InputBox = styled.input.attrs(props => ({
        type: props.type || 'text', // 기본값을 'text'로 설정
        id: props.id,
        placeholder: props.placeholder // 힌트 텍스트를 props로 받음
    }))`
    width: 60%;
    height: 30px;
    margin-top: 25px;
    border: 2px solid white;
    border-radius: 20px;
    background-color: white;
    padding: 5px 15px;
    font-size: 17px;
    outline-color: orange;

    ${media.mobile`
        width: 100%;
        font-size: 15px;
        height: 25px;
    `}
`;

const AlertText = styled.div`
    width: 64%;
    color: red;
    margin: 5px 0px 0px 0px;
    padding-left: 25px;

    ${media.mobile`
        font-size: 13px;
        padding-left: 0px;
    `}
`;

const SubmitButton = styled.button`
    width: 64%;
    height: 50px;
    background-color: orange;
    // background-color: ${({ isActive }) => (isActive ? 'orange' : 'white')};
    border-radius: 23px;
    font-size: 17px;
    margin-top: 40px;

    ${media.mobile`
        width: 100%;
        height: 40px;
        font-size: 15px;
    `}
`;

const Banner = styled.div`
    font-size: 20px;
    font-color: white;
`;


export default LoginPage;