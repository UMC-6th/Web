import InfiniteScrollComponent from '../components/InfiniteScrollComponent';


function NowPlayingPage() {
    const address = 'https://api.themoviedb.org/3/movie/now_playing?language=ko-KR';

    return (
        <InfiniteScrollComponent address={address}/>
    );
}

export default NowPlayingPage; 
