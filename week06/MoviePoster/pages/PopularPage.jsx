// PopularPage.jsx

import MoviesFetchComponent from '../components/MoviesFetchComponent';

function PopularPage() {
    const address = 'https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1';

    return(
        <MoviesFetchComponent address={address}/>
    );
}

export default PopularPage; // PopularPage 컴포넌트를 기본으로 내보내기
