import InfiniteScrollFetchComponent from '../../components/InfiniteScrollFetchComponent';

function NowPlayingPage() {
    const address = 'https://api.themoviedb.org/3/movie/now_playing?language=ko-KR';
    

    return (
        <InfiniteScrollFetchComponent address={address}/>
    );
}

export default NowPlayingPage;