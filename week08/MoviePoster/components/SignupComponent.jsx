import styled from 'styled-components';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    background-color: rgb(19, 19, 19);
    min-height: 100vh;
`;

const SignupText = styled.div`
    font-size: 50px;
    font-weight: 600;
    margin-top: 20px;
    color: white;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 40px;
    }

    @media (max-width: 480px) {
        font-size: 30px;
    }
`;

const JoinInput = styled.input`
    width: 550px;
    height: 50px;
    margin-top: 10px;
    border-radius: 50px;
    padding: 0 15px;

    @media (max-width: 768px) {
        width: 80%;
    }

    @media (max-width: 480px) {
        width: 90%;
        height: 40px;
    }
`;

const Joinform = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const JoinButton = styled.button`
    width: 550px;
    height: 50px;
    margin-top: 50px;
    border-radius: 50px;
    background-color: ${({ disabled }) => (disabled ? 'gray' : 'blue')};
    color: white;
    cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
    transition: background-color 0.3s;

    @media (max-width: 768px) {
        width: 80%;
    }

    @media (max-width: 480px) {
        width: 90%;
        height: 40px;
        margin-top: 30px;
    }
`;

const Text = styled.div`
    display: ${({ show }) => (show ? 'block' : 'none')};
    color: red;
    margin-top: 10px;
    text-align: center;

    @media (max-width: 480px) {
        font-size: 14px;
    }
`;

const Toggle = styled.div``;

const LoginText = styled.div`
    color: white;
    font-style: italic;
    margin-top: 20px;
    text-align: center;

    @media (max-width: 480px) {
        font-size: 14px;
    }
`;

function SignupComponent() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [id, setId] = useState('');
    const [isNameValid, setIsNameValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isAgeValid, setIsAgeValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [isIdValid, setIsIdValid] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [ageError, setAgeError] = useState('');
    const [idError, setIdError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleNameChange = (e) => {
        const value = e.target.value;
        setName(value);
        setIsNameValid(value.trim().length > 0);
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setIsEmailValid(validateEmail(value));
    };

    const handleAgeChange = (e) => {
        const value = e.target.value;
        setAge(value);
        const { isValid, error } = validateAge(value);
        setIsAgeValid(isValid);
        setAgeError(error);
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        setIsPasswordValid(validatePassword(value));
    };

    const handlePasswordConfirmChange = (e) => {
        const value = e.target.value;
        setPasswordConfirm(value);
    };

    const handleIdChange = (e) => {
        const value = e.target.value;
        setId(value);
        const { isValid, error } = validateId(value);
        setIsIdValid(isValid);
        setIdError(error);
    };

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const validateAge = (age) => {
        if (age === '') {
            return { isValid: false, error: '나이를 입력해주세요.' };
        }
        const numAge = parseInt(age);
        if (isNaN(numAge)) {
            return { isValid: false, error: '나이는 숫자로 입력해주세요.' };
        }
        if (numAge < 0) {
            return { isValid: false, error: '나이는 음수가 될 수 없습니다.' };
        }
        if (!Number.isInteger(numAge)) {
            return { isValid: false, error: '나이는 소수가 될 수 없습니다.' };
        }
        if (numAge < 19) {
            return { isValid: false, error: '우리 영화 사이트는 19살 이상만 가입이 가능합니다.' };
        }
        return { isValid: true, error: '' };
    };

    const validatePassword = (password) => {
        if (password === '') {
            return false;
        }
        if (password.length < 4) {
            setPasswordError('비밀번호는 최소 4자리 이상이어야 합니다.');
            return false;
        }
        if (password.length > 12) {
            setPasswordError('비밀번호는 최대 12자리까지 가능합니다.');
            return false;
        }
        const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+\\|[\]{};:'",.<>/?]).{4,12}$/;
        if (!regex.test(password)) {
            setPasswordError('영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다.');
            return false;
        }
        setPasswordError('');
        return true;
    };

    const validateId = (id) => {
        if (id.trim().length < 5) {
            return { isValid: false, error: '아이디는 최소 5자리 이상이어야 합니다.' };
        }
        return { isValid: true, error: '' };
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            isNameValid &&
            isEmailValid &&
            isAgeValid &&
            password === passwordConfirm &&
            isPasswordValid &&
            isIdValid
        ) {
            const requestBody = {
                name: name,
                email: email,
                age: age,
                username: id,
                password: password,
                passwordCheck: passwordConfirm,
            };
    
            setIsSubmitting(true); 
    
            axios.post('http://localhost:8080/auth/signup', requestBody)
                .then(response => {
                    setIsSubmitting(false); 
                    if (response.status === 201) {
                        console.log(response.data);
                        alert('회원가입이 완료됐어요!');
                        navigate('/login');
                    } else {
                        console.error('Sign-up failed with status:', response.status);
                    }
                })
                .catch(error => {
                    if (error.response) {
                        if (error.response.status === 409) {
                            console.log(error.response.status, error.response.message);
                            alert('이미 존재하는 아이디입니다.');
                        } else if (error.response.status === 400) {
                            alert('비밀번호가 일치하지 않습니다.');
                            console.log(error.response.status, error.response.message);
                        } else {
                            alert(`서버 에러: ${error.response.status}`);
                        }
                    } else if (error.request) {
                        console.error('No response was received');
                    } else {
                        console.error('Error', error.message);
                    }
                });
        } else {
            console.log('유효성 검사 통과하지 않음');
        }
    };

    return (
        <Signup>
            <SignupText>회원가입</SignupText>
            <Joinform onSubmit={handleSubmit}>
                <JoinInput type="text" placeholder="이름" value={name} onChange={handleNameChange} />
                {!isNameValid && <Text show={!isNameValid}>이름은 반드시 입력해야 합니다.</Text>}

                <JoinInput type="email" placeholder="이메일" value={email} onChange={handleEmailChange} />
                {!isEmailValid && <Text show={!isEmailValid}>이메일을 올바르게 입력해주세요.</Text>}

                <JoinInput type="number" placeholder="나이" value={age} onChange={handleAgeChange} />
                {!isAgeValid && <Text show={!isAgeValid}>{ageError}</Text>}
                {age === '' && <Text show={age === ''}>나이를 입력해주세요.</Text>}

                <JoinInput type="text" placeholder="아이디" value={id} onChange={handleIdChange} />
                {!isIdValid && <Text show={!isIdValid}>{idError}</Text>}

                <JoinInput type="password" placeholder="비밀번호" value={password} onChange={handlePasswordChange} />
                {!isPasswordValid && passwordError && <Text show={!isPasswordValid}>{passwordError}</Text>}
                {password === '' && <Text show={password === ''}>비밀번호를 입력해야 합니다.</Text>}

                <JoinInput
                    type="password"
                    placeholder="비밀번호 확인"
                    value={passwordConfirm}
                    onChange={handlePasswordConfirmChange}
                />
                {passwordConfirm !== password && passwordConfirm !== '' && (
                    <Text show={passwordConfirm !== password}>비밀번호가 일치하지 않습니다.</Text>
                )}

                <Toggle>
                    <JoinButton
                        type="submit"
                        disabled={
                            !isNameValid ||
                            !isEmailValid ||
                            !isAgeValid ||
                            age === '' ||
                            password === '' ||
                            !isPasswordValid ||
                            passwordConfirm !== password ||
                            !isIdValid ||
                            isSubmitting 
                        }
                    >
                        <>회원가입</>
                    </JoinButton>
                </Toggle>
                <LoginText>이미 회원이신가요? </LoginText>
                <Link to="/login">로그인 페이지로 이동</Link>
            </Joinform>
        </Signup>
    );
}

export default SignupComponent;
