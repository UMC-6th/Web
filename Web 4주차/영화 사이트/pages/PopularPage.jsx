import MoviesFetchComponent from '../components/MoviesFetchComponent';

function PopularPage() {
    const address = 'https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1';

    return(
        <MoviesFetchComponent address={address}/>
    );
}

export default PopularPage;