import  { useState } from 'react';
import styled from 'styled-components';
import MoviesFetchComponent from '../components/MoviesFetchComponent';

const Page = styled.span`
    font-size: 20px;
    font-weight: bold;
    color: white;
    margin: 0 10px;
`;

const PageButton = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 10px;
    background-color: black;
    color: white;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
    margin: 10px;
    border: none;
    outline: none;
    opacity: ${({ disabled }) => (disabled ? '0.2' : '1.0')};
    &:disabled {
        background-color: gray;
        cursor: not-allowed;
    }
`;

const Container = styled.div`
    text-align: center;
    margin-top: 20px;
`;

const Pop = styled.div`
    width: 100%;
`;

function PopularPage() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10; 

    const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage(prevPage => prevPage - 1);
    };

    const address = `https://api.themoviedb.org/3/movie/popular?language=ko-KR&page=${currentPage}`;

    return (
        <Pop>
            <MoviesFetchComponent address={address} />
            <Container>
                <PageButton
                    disabled={currentPage === 1} 
                    onClick={handlePrevPage}
                >
                    {"<"} 
                </PageButton>
                <Page> {currentPage}</Page>
                <PageButton 
                    disabled={currentPage === totalPages} 
                    onClick={handleNextPage}
                >
                    {">"}
                </PageButton>
            </Container>
        </Pop>
    );
}

export default PopularPage;
