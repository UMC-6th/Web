
import Fetch from "../components/fetch";

function TopRated() {
  const url = 'https://api.themoviedb.org/3/movie/top_rated?language=ko-KR&page=1';
  return (
    <Fetch url={url}/>
  );
}

export default TopRated;