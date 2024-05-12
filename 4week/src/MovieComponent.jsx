import React from "react";
import { useNavigate } from "react-router-dom";

function MovieComponent(props) {
  const navigate = useNavigate();
  
  const onClickDetail = () =>{
    navigate(`/movie/${props.title}`,{
        state:props
    });
  };
  return (
    <div className="box" onClick={onClickDetail}>
      <img src={props.imgUrl} alt="Movie Poster" />
      <div className="title-wrap">
        <p className="title">{props.title}</p>
        <p className="score">{props.voteAverage.toFixed(1)}</p>
      </div>
      <div id="modal">
        <h4 className="title">{props.title}</h4>
        <p className="desc">{props.overview}</p>
      </div>
    </div>
  );
}

export default MovieComponent;
