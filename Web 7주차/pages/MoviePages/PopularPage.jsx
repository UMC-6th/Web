import PaginationFetchComponent from '../../components/PaginationFetchComponent';

function PopularPage() {
    // const address = 'https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=1';
    const address = 'https://api.themoviedb.org/3/movie/popular?language=ko-KR';

    return(
        <PaginationFetchComponent address={address}/>
    );
}

export default PopularPage;