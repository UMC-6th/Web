/* 커서 갖다대면 영화 제목 및 설명 나오는 컴포넌트*/
import React from 'react';
import './Story.css'
import { Link } from 'react-router-dom';

function Story({movie}){
    return (
        <div id="storybody">
            <div className="storycontents">
                
                <Link className='story-deco' to={`/movie/${movie.id}`}>
          <div>
                <h2>{movie.title}</h2> 
                </div>
                <div>
                    <p>{movie.overview}</p>
                </div>
            </Link>
            </div> 
        </div>
    );
}

export default Story;