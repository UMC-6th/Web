import MoviesFetchComponent from '../components/Moviepop';

function TopRatedPage() {
    const address = 'https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1';

    return (
        <MoviesFetchComponent address={address}/>
    );
}

export default TopRatedPage;