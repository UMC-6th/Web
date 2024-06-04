import styled from 'styled-components';

function BannerComponent() {
    return (
        <Welcome>MOVIE</Welcome>
    );
}

const Welcome = styled.div`
    width: 100%;
    height: 200px;
    background-color: rgb(0, 0, 0);
    color: white;
    font-size: clamp(50px, 10vw, 70px); /* 반응형 폰트 크기 */
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    margin-top: -300px;

    @media (max-width: 768px) {
        height: 150px; 
`;

export default BannerComponent;
