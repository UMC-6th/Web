import MoviesFetchComponent from '../components/MoviesFetchComponent';

function NowPlayingPage() {
    const address = 'https://api.themoviedb.org/3/movie/now_playing?language=ko-KRx&page=1';

    return (
        <MoviesFetchComponent address={address}/>
    );
}

export default NowPlayingPage;