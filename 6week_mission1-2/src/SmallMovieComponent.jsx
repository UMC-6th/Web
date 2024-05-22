import React from "react";
import { useNavigate } from "react-router-dom";
import { MovieImg, MovieDesc, MovieModal, MovieTitleWrap, SmallMovieContainer } from "./styled";

function SmallMovieComponent(props) {
  const navigate = useNavigate();
  
  const onClickDetail = () =>{
    navigate(`/movie/${props.id}`,{
        state:props
    });
  };
  return (
    <SmallMovieContainer onClick={onClickDetail}>
      <MovieImg src={props.imgUrl} alt="Movie Poster" />
      <MovieTitleWrap className="title-wrap">
        <p className="title">{props.title}</p>
        <p className="score">{props.voteAverage.toFixed(1)}</p>
      </MovieTitleWrap>
      <MovieModal>
        <h4 className="title">{props.title}</h4>
        <MovieDesc>{props.overview}</MovieDesc>
      </MovieModal>
    </SmallMovieContainer>
  );
}

export default SmallMovieComponent;
