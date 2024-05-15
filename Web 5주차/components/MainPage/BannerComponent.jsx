import styled from 'styled-components';

function BannerComponent() {
    return(
        <WelcomeContainer>Chacco의 Movie에 오신 걸 환영합니다 🥳</WelcomeContainer>
    );
}

const WelcomeContainer = styled.div`
    width: 100%;
    height: 15vh;
    background-color: rgb(19, 19, 19);
    margin: 0;
    color: white;
    font-size: 20px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 15px;
`;

export default BannerComponent;