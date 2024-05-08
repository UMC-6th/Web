import Fetch from '../components/fetch';

function Upcoming() {
  const url = 'https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=1';
  return (
    <Fetch url={url}/>
  );
}

export default Upcoming;
