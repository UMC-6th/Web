import styled from 'styled-components';
import React, { useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';

function Join({onRegister}) {
    
    
    const [formData, setFormData] = useState({
        username: '',
        idname: '',
        email: '',
        age: '',
        password: '',
        password2: ''
    });

    const [formErrors, setFormErrors] = useState({
        username: '',
        idname: '',
        email: '',
        age: '',
        password: '',
        password2: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
        // 입력값이 변경될 때마다 해당 필드의 오류를 초기화
        setFormErrors({ ...formErrors, [id]: '' });

        // 이메일 입력값이 변경될 때마다 유효성을 검사하여 오류 메시지 설정
        if (id === 'email') {
            const isValidEmail = validateEmail(value);
            setFormErrors(prevErrors => ({
                ...prevErrors,
                email: isValidEmail ? '' : '올바른 이메일 주소를 입력하세요!'
            }));
        }
        if (id === 'age') {
            if (isNaN(value)) {
                setFormErrors(prevErrors => ({
                    ...prevErrors,
                    age: '나이는 숫자만 입력 가능합니다!'
                }));
            } else if (parseFloat(value) !== parseInt(value)) { // 실수 입력일 경우 오류 메시지 출력
                setFormErrors(prevErrors => ({
                    ...prevErrors,
                    age: '나이는 정수만 입력 가능합니다!'
                }));
            } else if (parseInt(value) < 0) { // 음수인 경우 오류 메시지 출력
                setFormErrors(prevErrors => ({
                    ...prevErrors,
                    age: '나이는 양수 또는 0 이상의 정수만 입력 가능합니다!'
                }));
            }else if (parseInt(value) < 19) { // 음수인 경우 오류 메시지 출력
                setFormErrors(prevErrors => ({
                    ...prevErrors,
                    age: '19세 이상만 사용가능합니다!'
                }));
            }  else {
                setFormErrors(prevErrors => ({
                    ...prevErrors,
                    age: ''
                }));
            }
        }
        if (id === 'password') {
            // 비밀번호 조건에 맞는지 확인
            if (value.length < 4) {
                setFormErrors(prevErrors => ({
                    ...prevErrors,
                    password: '비밀번호는 4자리 이상이어야 합니다!'
                }));
            } else if (value.length > 12) {
                setFormErrors(prevErrors => ({
                    ...prevErrors,
                    password: '비밀번호는 최대 12자리까지 가능합니다!'
                }));
            } else if (!isValidPassword(value)) {
                setFormErrors(prevErrors => ({
                    ...prevErrors,
                    password: '비밀번호는 영어, 숫자, 특수문자를 모두 포함해야 합니다!'
                }));
            } else {
                setFormErrors(prevErrors => ({
                    ...prevErrors,
                    password: ''
                }));
            }
        }
        if (id === 'password2') {
            // 비밀번호 확인 필드 유효성 검사 코드
            if (value !== formData.password) {
                setFormErrors(prevErrors => ({
                    ...prevErrors,
                    password2: '비밀번호가 일치하지 않습니다!'
                }));
            } else {
                setFormErrors(prevErrors => ({
                    ...prevErrors,
                    password2: ''
                }));
            }
        }
    };

    const isValidPassword = (password) => {
        // 비밀번호가 영어, 숫자, 특수문자를 모두 포함하는지 확인
        const hasLetter = /[a-zA-Z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);
        return hasLetter && hasNumber && hasSpecialCharacter;
    };


    const validateInput = (id) => {
        const value = formData[id];
        return value && value.trim() !== '';
    };

    const validateEmail = (email) => {
        // 이메일에 "@" 기호가 없으면 유효하지 않음
        return email.includes('@');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = {};
        Object.keys(formData).forEach((key) => {
            if (!validateInput(key)) {
                errors[key] = `${key}을(를) 입력하세요!`;
            } 
        });
        setFormErrors(errors);
        const isValid = Object.keys(errors).length === 0;
        if (!isValid) {
            return;
        }
        
        console.log('회원가입이 정상적으로 처리되었습니다.');
        alert('회원가입이 정상적으로 처리되었습니다.');
        console.log(formData);
        // 여기에 폼 제출에 필요한 로직 추가

        onRegister({idname:formData.idname, password: formData.password});
        navigate('/login-page');

        
    };

    // 모든 오류가 없으면 폼 제출 버튼 활성화
    const isFormValid = Object.values(formErrors).every(error => error === '');

    return (
        <Wrapper_join>
            <form onSubmit={handleSubmit}>
                <Title>회원가입 페이지</Title>
                <InputsContainer>
                    <InputContainer>
                        <Styleinput
                            type="text"
                            id="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="이름을 입력해주세요"
                        />
                        {formErrors.username && <ErrorMessage>{formErrors.username}</ErrorMessage>}
                    </InputContainer>
                    <InputContainer>
                    <Styleinput
                            type="text"
                            id="idname"
                            value={formData.idname}
                            onChange={handleChange}
                            placeholder="아이디를 입력해주세요"
                        />
                        {formErrors.idname && <ErrorMessage>{formErrors.idname}</ErrorMessage>}
                    </InputContainer>
                    {/* 이메일 입력란과 메시지 */}
                    <InputContainer>
                        <Styleinput
                            type="text"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="이메일을 입력해주세요"
                        />
                        {formErrors.email && <ErrorMessage>{formErrors.email}</ErrorMessage>}
                    </InputContainer>
                    {/* 나이 입력란과 메시지 */}
                    <InputContainer>
                        <Styleinput
                            type="text"
                            id="age"
                            value={formData.age}
                            onChange={handleChange}
                            placeholder="나이를 입력해주세요"
                        />
                        {formErrors.age && <ErrorMessage>{formErrors.age}</ErrorMessage>}
                    </InputContainer>
                    {/* 비밀번호 입력란과 메시지 */}
                    <InputContainer>
                        <Styleinput
                            type="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="비밀번호를 입력해주세요"
                        />
                        {formErrors.password && <ErrorMessage>{formErrors.password}</ErrorMessage>}
                    </InputContainer>
                    {/* 비밀번호 확인 입력란과 메시지 */}
                    <InputContainer>
                        <Styleinput
                            type="password"
                            id="password2"
                            value={formData.password2}
                            onChange={handleChange}
                            placeholder="비밀번호 확인"
                        />
                                                {formErrors.password2 && <ErrorMessage>{formErrors.password2}</ErrorMessage>}
                    </InputContainer>
                </InputsContainer>
                <Button disabled={!isFormValid}>제출하기</Button>

                
            </form>
            <Moviehaveitem>
                <Havelogin>이미 아이디가 있으신가요?</Havelogin>
                <Link to="/login-page"><Movelogin>로그인 페이지로 이동하기</Movelogin></Link>
            </Moviehaveitem>
    </Wrapper_join>
    );
}
const Moviehaveitem = styled.div`
    flex-direction: row;
    display: flex;
    padding-top : 40px
`;

const Havelogin = styled.div`
    margin-right: 150px;
    margin-left : 30px;
`;
const Movelogin = styled.div`
    font-size : 18px;
    color: white;
`;
const Wrapper_join = styled.div`
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

const Styleinput = styled.input`
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

export default Join;

