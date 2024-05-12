import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const Img_Base_URL = "https://image.tmdb.org/t/p/w500"

export const Body = styled.body`
    background-color: #22254b;
`;

export const MovieContainer = styled.div`
    position: relative;
    width: 190px;
    height: 370px; /* 높이 지정 */
    margin: 16px;
    background-color: #373b69;
    color: white;
    font-size:small;
    border-radius: 5px;

`;

export const MovieImage = styled.img`
    width: 190px;
    height: 290px; 
`;

export const MovieInfo = styled.div`
    display: flex; 
    padding: 20px;
    justify-content: space-between;
    align-items: center;
`;

export const MovieTitle = styled.h4`
    margin: 0;
`;

export const MovieInfoSpan = styled.span`
    margin-left: 3px;
`;

export default function MovieFile(props){
     
        const navigate = useNavigate();

        const onClickMovieItem = () =>{
            const { title, poster_path, vote_average,overview } = props;
            navigate(`/Popular/${title})`,{
                state: { title, poster_path, vote_average,overview }
            })
        }


    return(
        <Body>
      < MovieContainer>
            <MovieImage onClick={onClickMovieItem} src={Img_Base_URL + props.poster_path} alt='영화포스터' />
            <MovieInfo>
            <MovieTitle>{props.title}</MovieTitle>
            <MovieInfoSpan>{props.vote_average}</MovieInfoSpan>
            </MovieInfo>
        </MovieContainer>
        </Body>
    )
}