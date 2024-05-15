// LoginPage.jsx
import styled from 'styled-components';
import React from 'react';
import Join from './Join'; 

function LoginPage() {
    return (
        <Wrapper_Login>
            <Title>로그인 페이지</Title>
            <InputsContainer>
                <InputContainer>
                    <Styleinput
                        type="text"
                        id="inputid"
                        placeholder="아이디"
                    />
                </InputContainer>
                <InputContainer>
                    <Styleinput
                        type="text"
                        id="inputpassword"
                        placeholder="비밀번호"
                    />
                </InputContainer>
            </InputsContainer>
            <Button>로그인</Button>
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

const Button = styled.button`
    margin-top: 20px;
    width: 618px;
    height: 40px;
    border-radius: 20px;
`;

export default LoginPage;
