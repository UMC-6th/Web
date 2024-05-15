import MoviesFetchComponent from '../components/Moviepop';

function NowPlayingPage() {
    const address = 'https://api.themoviedb.org/3/movie/now_playing?language=ko-KRx&page=1';

    return (
        <MoviesFetchComponent address={address}/>
    );
}

export default NowPlayingPage;