import React from 'react'
import { useNavigate } from 'react-router-dom';

export const Img_Base_URL = "https://image.tmdb.org/t/p/w500"

function MovieFile(props){
        
        const navigate = useNavigate();

        const onClickMovieItem = () =>{
            const { title, poster_path, vote_average,overview } = props;
            navigate(`/Popular/${title})`,{
                state: { title, poster_path, vote_average,overview }
            })
        }


    return(
      <div className='movie-container'>
        
            <img className='img-info'  onClick={onClickMovieItem} src={Img_Base_URL + props.poster_path} alt='영화포스터' / >
            <div className='movie-info'>
            <h4 className='movie-title'>{props.title}</h4>
            <span>{props.vote_average}</span>
            </div>
        </div>
    )
}

export default MovieFile;