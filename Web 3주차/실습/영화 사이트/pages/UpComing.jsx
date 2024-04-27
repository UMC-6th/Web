import MoviesFetchComponent from '../components/MoviesFetchComponent';

function UpComing() {
    const address = 'https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=1';

    return(
        <MoviesFetchComponent address={address}/>
    );
}

export default UpComing;