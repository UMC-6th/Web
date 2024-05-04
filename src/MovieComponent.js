import React, { useState, useEffect } from 'react';
import './App.css';



function MovieComponent({ title, voteAverage, overview, imgUrl }) {
    return (
        <div className='box'>
            <img src={imgUrl} alt='Movie Poster' />
            <div className='title-wrap'>
                <p className='title'>{title}</p>
                <p className='score'>{voteAverage}</p>
            </div>
            <div id='modal'>
                <h4 className='title'>{title}</h4>
                <p className='desc'>{overview}</p>
            </div>
        </div>
    );
}


export default MovieComponent;