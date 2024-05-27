import React, { useState, useEffect } from "react";
import "./App.css";
import MovieComponent from "./MovieComponent";
import { PageIndexWrap, PageNum, PaginationButton } from "./styled";

function PopularPage() {
  const [movies, setMovies] = useState([]);
  const [pageIndex, setPageIndex] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchPopularMovies = async (page) => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
          {
            method: "GET",
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3Y2Y2ZmM5ZDNiNGE5YTY5NDU3OGM2YjU0OWIxN2Q1ZSIsInN1YiI6IjY2MjYzYjJhMjIxYmE2MDBjODEyNGU0YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8NO-FgnQW-5s_IfqUVUPF1fDbPHCXmUL0UNzgVNFzU0",
            },
          }
        );
        const data = await response.json();
        setMovies(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };

    fetchPopularMovies(pageIndex);
  }, [pageIndex]);

  const handlePrevPage = () => {
    if (pageIndex > 1) {
      setPageIndex(pageIndex - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNextPage = () => {
    if (pageIndex < totalPages) {
      setPageIndex(pageIndex + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <div className="movie-wrap">
        {movies.map((movie) => (
          <MovieComponent
            id={movie.id}
            title={movie.title}
            voteAverage={movie.vote_average}
            release={movie.release_date}
            overview={movie.overview}
            imgUrl={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
          />
        ))}
      </div>
      <PageIndexWrap>
        <PaginationButton onClick={handlePrevPage} disabled={pageIndex === 1}>&lt;</PaginationButton>
        <PageNum>{pageIndex}</PageNum>
        <PaginationButton onClick={handleNextPage} disabled={pageIndex === totalPages}>&gt;</PaginationButton>
      </PageIndexWrap>
    </div>
  );
}

export default PopularPage;
