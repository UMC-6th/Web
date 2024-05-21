import styled from 'styled-components';

function Mainpageup() {
    return(
        <WelcomeContainer>환영합니다(debounce 검색기능 개선) </WelcomeContainer>
    );
}


const WelcomeContainer = styled.div`
    width: 100%;
    height: 20vh;
    background-color: rgb(31,21,54);
    margin: 0;
    color: white;
    font-size: 40px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 10px;
`;

export default Mainpageup;