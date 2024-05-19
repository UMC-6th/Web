import styled from 'styled-components';

function LoginPage() {
    return(
        <Container>
            <LoginContainer>
                <MainText>로그인 페이지</MainText>
                <FormWrapper>
                    <InputBox type="text" id="login-id" placeholder="아이디"/>
                    <InputBox type="password" id="login-pw" placeholder="비밀번호"/>
                    <SubmitButton>로그인</SubmitButton>
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

const SubmitButton = styled.button`
    width: 64%;
    height: 50px;
    background-color: orange;
    // background-color: ${({ isActive }) => (isActive ? 'orange' : 'white')};
    border-radius: 23px;
    font-size: 17px;
    margin-top: 40px;
`;


export default LoginPage;