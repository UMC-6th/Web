// MainPage.jsx

import styled from 'styled-components';
import BannerComponent from '../components/MainPage/BannerComponent';
import MovieSearchComponent from '../components/MainPage/MovieSearchComponent';

function MainPage() {
    return (
        <Wrap>
            <BannerComponent />
            <MovieSearchComponent />
        </Wrap>
    );
}

const Wrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center; /* 가운데 정렬 */
`;

export default MainPage;
