import styled from 'styled-components';
import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUpPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isActive, setIsActive] = useState(false);

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [ageError, setAgeError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const navigate = useNavigate();

    const handleSubmit = () => {
        if (isActive) {
            console.log('이름:', name);
            console.log('이메일:', email);
            console.log('나이:', age);
            console.log('비밀번호:', password);
            console.log('비밀번호 확인:', confirmPassword);
            navigate('/login');
        }
    };

    useEffect(() => {
        setNameError(!name ? '이름을 입력해주세요!' : '');
        setEmailError(!email ? '이메일을 입력해주세요!' : !email.includes('@') ? '이메일 형식에 맞춰 다시 입력해주세요!' : '');
        setAgeError(
            !age ? '나이를 입력해주세요!' :
            age < 0 ? '나이는 양수여야 합니다.' :
            !Number.isInteger(parseFloat(age)) ? '나이는 정수여야 합니다.' :
            age < 19 ? '본 영화 사이트는 19세 이상만 가입이 가능합니다.' : ''
        );
        setPasswordError(
            !password ? '비밀번호를 입력해주세요!' :
            password.length < 4 ? '비밀번호는 최소 4자리 이상 입력해주세요.' :
            password.length > 12 ? '비밀번호는 최대 12자리 입니다.' :
            !/[A-Za-z]/.test(password) || !/\d/.test(password) || !/[!@#$%^&*]/.test(password) ? '비밀번호는 영어, 숫자, 특수문자를 포함해주세요.' : ''
        );
        setConfirmPasswordError(
            !confirmPassword ? '비밀번호를 다시 입력해주세요!' :
            password !== confirmPassword ? '비밀번호가 일치하지 않습니다.' : ''
        );

        setIsActive(!nameError && !emailError && !ageError && !passwordError && !confirmPasswordError);
    }, [name, email, age, password, confirmPassword, nameError, emailError, ageError, passwordError, confirmPasswordError]);


    return (
        <Container>
            <SignupContainer>
                <MainText>회원가입 페이지</MainText>

                <FormWrapper>
                    <InputBox type="text" placeholder="이름을 입력해주세요!" value={name} onChange={(e) => setName(e.target.value)}/>
                    {nameError && <AlertText>{nameError}</AlertText>}
                    <InputBox type="text" placeholder="이메일을 입력해주세요!" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    {emailError && <AlertText>{emailError}</AlertText>}
                    <InputBox type="number" placeholder="나이를 입력해주세요!" value={age} onChange={(e) => setAge(e.target.value)}/>
                    {ageError && <AlertText>{ageError}</AlertText>}
                    <InputBox type="password" placeholder="비밀번호를 입력해주세요!" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    {passwordError && <AlertText>{passwordError}</AlertText>}
                    <InputBox type="password" placeholder="비밀번호 확인" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                    {confirmPasswordError && <AlertText>{confirmPasswordError}</AlertText>}
                    <SubmitButton isActive={isActive} disabled={!isActive} onClick={handleSubmit} style={{backgroundColor: isActive ? 'orange' : 'white'}}>제출하기</SubmitButton>
                </FormWrapper>

                <SubTextWrapper>
                    <SubText1>이미 아이디가 있으신가요?</SubText1>
                    <SubText2>로그인 페이지로 이동하기</SubText2>
                </SubTextWrapper>
            </SignupContainer>
        </Container>
    );
    
}

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -50px;
`;

const SignupContainer = styled.div`
    width: 50%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const MainText = styled.p`
    font-size: 25px;
    font-weight: 600;
    color: white;
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
`;

const AlertText = styled.div`
    width: 64%;
    color: red;
    margin: 5px 0px 0px 0px;
    padding-left: 25px;
`;

const SubmitButton = styled.button`
    width: 64%;
    height: 50px;
    border-radius: 23px;
    font-size: 17px;
    margin-top: 40px;
`;

const SubTextWrapper = styled.div`
    width: 50%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 25px;
`;

const SubText1 = styled.p`
    font-size: 17px;
    font-weight: 500;
    color: white;
`;

const SubText2 = styled.p`
    font-size: 17px;
    font-weight: 700;
    color: white;
`;

export default SignUpPage;