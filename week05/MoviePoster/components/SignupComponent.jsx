import styled from 'styled-components';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Signup = styled.div``;

const SignupText = styled.div`
    font-size: 50px;
    font-weight: 600;
    margin-top: 10px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const JoinInput = styled.input`
    width: 550px;
    height: 50px;
    margin-top: 10px;
    border-radius: 50px;
`;

const Joinform = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const JoinButton = styled.button`
    width: 550px;
    height: 50px;
    margin-top: 50px;
    border-radius: 50px;
    ${({ disabled }) =>
        disabled &&
        `
        background-color: gray;
        cursor: not-allowed;
    `}
`;

const Text = styled.div`
    display: ${({ show }) => (show ? 'flex' : 'none')};
    color: red;
    margin-top: 10px;
`;
const Toggle = styled.div``;

const LoginText = styled.div`
    color: white;
    font-style: italic;
    margin-top: 20px;

`
function SignupComponent() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [isNameValid, setIsNameValid] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isAgeValid, setIsAgeValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [passwordError, setPasswordError] = useState('');
    const [ageError, setAgeError] = useState('');

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

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            isNameValid &&
            isEmailValid &&
            isAgeValid &&
            password === passwordConfirm &&
            isPasswordValid
        ) {
            console.log('제출하기: ', { name, email, age, password });
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
                            passwordConfirm !== password
                        }
                    ><Link to="/main-page">
                        회원가입
                    </Link>
                    </JoinButton>
                </Toggle>
                <LoginText>이미 회원이신가요? </LoginText>
                <Link to="/main-page">로그인 페이지로 이동</Link>
            </Joinform>
        </Signup>
    );
}

export default SignupComponent;
