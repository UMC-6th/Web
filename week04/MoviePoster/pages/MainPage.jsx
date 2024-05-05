// MainPage.jsx

import styled from 'styled-components';
import BannerComponent from '../components/MainPage/BannerComponent';

function MainPage() {
    return(
        <Wrap>
            <BannerComponent/>

            <SearchContainer>
                <SearchText>영화를 검색하세요.</SearchText>
                <SearchInput></SearchInput>
            </SearchContainer>
        </Wrap>
    );
}

const Wrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
`;

const SearchContainer = styled.div`
    width: 100%;
    height: 20px;
    min-height: 80vh;
    background-color: rgb(19, 19, 19);
    display: flex;
    justify-content: start;
    align-items: center;
    flex-direction: column;
`;

const SearchText = styled.div`
    color: white;
    font-size: 30px;
    font-weight: 600;
    padding-top: 100px;
`;

const SearchInput = styled.input`
    width: 550px;
    height: 50px;
    margin-top: 50px;
    border-radius: 50px;
`;

export default MainPage; 
