import React, { useState, useEffect } from "react";
import {
  AppContainer,
  Navbar,
  HiContainer,
  SearchContainer,
  SearchResultWrap,
  SearchWrap,
  SearchInputWrap,
  SearchButton,
} from "./styled";
import PopularPage from "./PopularPage";
import TopRatedPage from "./TopRatedPage";
import Upcoming from "./Upcoming";
import NowPlayingPage from "./NowPlayingPage";
import NotFound from "./NotFound";
import Signup from "./signup";
import MovieDetailComponent from "./MovieDetailComponent";
import App from "./App";
import "./App.css";
import MovieComponent from "./MovieComponent";
import SmallMovieComponent from "./SmallMovieComponent";
function MainPage() {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
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
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };

    fetchPopularMovies();
  }, []);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <AppContainer>
      <HiContainer>
        <h2>환영합니다!</h2>
      </HiContainer>
      <SearchContainer>
        <SearchWrap>
          <h2 className="highlight">Find your movies!</h2>
          <SearchInputWrap>
            <input
              className="searchInput"
              type="text"
              placeholder="Search"
              value={searchText}
              onChange={handleSearch}
            />
            <SearchButton></SearchButton>
          </SearchInputWrap>
        </SearchWrap>
        {searchText && (
          <SearchResultWrap>
            {filteredMovies.map((movie) => (
              <SmallMovieComponent
                key={movie.id}
                title={movie.title}
                voteAverage={movie.vote_average}
                overview={movie.overview}
                imgUrl={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              />
            ))}
          </SearchResultWrap>
        )}
      </SearchContainer>
    </AppContainer>
  );
}  

export default MainPage;
