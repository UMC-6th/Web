import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { DetailContainer, DetailWrap } from "./styled";
import StarRating from "./StarRating"; 
import "./App.css";

function overview(isOverview) {
  return isOverview ? isOverview : "줄거리가 없습니다.";
}

function MovieDetailComponent() {
  const { state } = useLocation(); 

  return (
    <div>
      <DetailContainer>
        <img
          className="detailBackgroundImg"
          src={state.imgUrl}
          alt="Movie Poster"
        />
        <div className="detailBackground"></div>
        <img className="detailImg" src={state.imgUrl} alt="Movie Poster" />
        <DetailWrap>
          <div>{state.title}</div>
          
          <div>평점 <StarRating rating={parseFloat(state.voteAverage)} /></div>
          <div>개봉일 {state.release || "정보 없음"}</div>
          <div>줄거리 {overview(state.overview)}</div>
        </DetailWrap>
      </DetailContainer>
    </div>
  );
}

export default MovieDetailComponent;
