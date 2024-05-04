import Fetch from '../components/fetch';

function NowPlaying() {
  const url = 'https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=1';
  return (
    <Fetch url={url}/>
  );
}

export default NowPlaying;
