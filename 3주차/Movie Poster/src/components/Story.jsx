/* 커서 갖다대면 영화 제목 및 설명 나오는 컴포넌트*/
import React from 'react';
import './Story.css'

function Story({movie}){
    return (
        <body id="storybody">
            <div className="storycontents">
                <div>
                    <h2>{movie.title}</h2> 
                </div>
                <div>
                    <p>{movie.overview}</p>
                </div>
            </div> 
        </body>
    );
}

export default Story;