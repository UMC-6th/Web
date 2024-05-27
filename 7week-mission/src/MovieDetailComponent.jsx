import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  DetailContainer,
  DetailWrap,
  DetailBox,
  CastContainer,
  CastTitle,
  CastWrap,
  CastBox,
  CastAlign,
} from "./styled";
import StarRating from "./StarRating";
import "./App.css";
import CastComponent from "./CastComponent";

function overview(isOverview) {
  return isOverview ? isOverview : "줄거리가 없습니다.";
}

function MovieDetailComponent() {
  const [crew, setCrew] = useState([]);

  const defaultImgUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz7ztleRwzXhFdiwBYqZ8cib9RvEsukVVUS3niN1YQ&s";
  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${state.id}/credits`,
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
        setCrew(data.cast);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };

    fetchPopularMovies();
    console.log('kk')
  }, []);

  
  const { state } = useLocation();

  if (!state) {
    return <div>영화 정보를 불러올 수 없습니다.</div>;
  }

  return (
    <div>
      <DetailContainer>
        <DetailBox>
          <img
            className="detailBackgroundImg"
            src={state.imgUrl}
            alt="Movie Poster"
          />
          <div className="detailBackground"></div>
          <img className="detailImg" src={state.imgUrl} alt="Movie Poster" />
          <DetailWrap>
            <div>{state.title}</div>
            <div>
              평점 <StarRating rating={parseFloat(state.voteAverage)} />
            </div>
            <div>개봉일 {state.release || "정보 없음"}</div>
            <div>줄거리 {overview(state.overview)}</div>
          </DetailWrap>
        </DetailBox>

        <CastTitle>출연진 및 제작진</CastTitle>
        <CastAlign>
          {crew.map((member) => (
            <CastComponent
              id={member.id}
              name={member.name}
              imgUrl={`${
                member.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${member.profile_path}`
                  : defaultImgUrl
              }`}
            />
          ))}
        </CastAlign>
      </DetailContainer>
    </div>
  );
}

export default MovieDetailComponent;
