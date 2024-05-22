import FetchComponent from '../components/MoviesFetchComponent';

function Upcoming() {
    const address = 'https://api.themoviedb.org/3/movie/upcoming?language=ko-KR&page=1';

    return(
        <FetchComponent address={address}/>
    );
}

export default Upcoming;