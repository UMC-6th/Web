import React, { useState, useEffect } from "react";
import {
  AppContainer,
  HiContainer,
  SearchContainer,
  SearchResultWrap,
  SearchWrap,
  SearchInputWrap,
  SearchButton,
} from "./styled";
import SmallMovieComponent from "./SmallMovieComponent";
import "./App.css";

function MainPage() {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [debouncedSearchText, setDebouncedSearchText] = useState(searchText);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchText(searchText);
    }, 300); // 300ms 디바운스 시간 설정

    return () => {
      clearTimeout(handler);
    };
  }, [searchText]);

  useEffect(() => {
    const apiKey = "7cf6fc9d3b4a9a694578c6b549b17d5e";
    const fetchSearchedMovies = async () => {
      if (debouncedSearchText) {
        setIsLoading(true);
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${debouncedSearchText}&language=ko-KR`,
            {
              method: "GET",
              headers: {
                accept: "application/json",
              },
            }
          );
          const data = await response.json();
          setMovies(data.results);
        } catch (error) {
          console.error("Error fetching searched movies:", error);
        } finally {
          setIsLoading(false);
        }
      } else {
        setMovies([]);
      }
    };

    fetchSearchedMovies();
  }, [debouncedSearchText]);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

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
        {isLoading ? (
          <p>데이터를 받아오는 중 입니다</p>
        ) : (
          debouncedSearchText && (
            <SearchResultWrap>
              {movies.map((movie) => (
                <SmallMovieComponent
                  id={movie.id}
                  title={movie.title}
                  voteAverage={movie.vote_average}
                  overview={movie.overview}
                  imgUrl={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                />
              ))}
            </SearchResultWrap>
          )
        )}
      </SearchContainer>
    </AppContainer>
  );
}

export default MainPage;
