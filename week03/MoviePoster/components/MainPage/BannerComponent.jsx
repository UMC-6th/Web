import styled from 'styled-components';

function BannerComponent() {
    return(
        <Welcome>MOVIE</Welcome>
    );
}

const Welcome = styled.div`
    width: 100%;
    height: 200px;
    background-color: rgb(0,0,0);
    color: white;
    font-size: 70px;
    
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
    
`;

export default BannerComponent;