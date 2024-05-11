import React from 'react'
import OverView from './overview';

const Img_Base_URL = "https://image.tmdb.org/t/p/w500"


function MovieFile({title,poster_path,vote_average,overview}){
    return(
      <div className='movie-container'>
        <OverView overview={overview}/>
            <img className='img-info' src={Img_Base_URL + poster_path} alt='영화포스터' / >
            <div className='movie-info'>
            <h4 className='movie-title'>{title}</h4>
            <span>{vote_average}</span>
            </div>
        </div>
    )
}

export default MovieFile;