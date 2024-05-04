import Fetch from '../components/fetch';

function Popular() {
  const url = 'https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1';
  return (
    <Fetch url={url}/>
  );
}

export default Popular;
