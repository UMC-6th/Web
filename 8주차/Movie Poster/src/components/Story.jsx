import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StoryBody = styled.div`
    display: flex;
 
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 530px;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    opacity: 0;
    

    position: relative;
    
 
    &:hover {
        opacity: 1;
    }
`;

const StoryContents = styled.div`

    div {
        p {
            margin: 20px;
            padding: 0px;
            width: 250px;
            height: 530px;
            font-size: 15px;
            color: white;
            
           
        }

        h2 {
            margin-bottom: 0px;
            margin-top: 100px;
            font-size: 15px;
            margin-left: 20px;
            padding-bottom: 0px;
            color: white;
        }
    }
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    &:hover {
        text-decoration: none;
    }
`;

function Story({ movie }) {
    return (
        <StoryBody>
            <StoryContents>
                <StyledLink to={`/movie/${movie.id}`}>
                    <div>
                        <h2>{movie.title}</h2>
                    </div>
                    <div>
                        <p>{movie.overview}</p>
                    </div>
                </StyledLink>
            </StoryContents>
        </StoryBody>
    );
}

export default Story;
