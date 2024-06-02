// MainPage.jsx

import styled from 'styled-components';
import BannerComponent from '../components/MainPage/BannerComponent';
import MovieSearchComponent from '../components/MainPage/MovieSearchComponent';

function MainPage() {
    return(
        <Wrap>
            <BannerComponent/>
            <MovieSearchComponent></MovieSearchComponent>

            
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


export default MainPage; 
