import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MovieDetailBox = styled.div`
    width: 280px;
    height: 350px;
    position: relative;
    display: flex;
    justify-content: start;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.8);
`;

const TextDetailBox = styled.div`
    margin: 10px 15px;
    color: white;
`;

const TitleDetail = styled.p`
    font-size: 13px;
    font-weight: 500;
`;

const Overview = styled.p`
    height: 270px;
    font-size: 13px;
    overflow: auto;
    &::-webkit-scrollbar {
        width: 4px;
    }
    &::-webkit-scrollbar-thumb {
        border-radius: 2px;
        background: yellow;
    }
    word-break: break-all;
    white-space: normal;
`;

function MovieDetailComponents({ id, title, overview, originalTitle }) {
    const navigate = useNavigate();
    const [movieDetail, setMovieDetail] = useState(null);

    useEffect(() => {
        const fetchMovieDetail = async () => {
            try {
                const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=d81db69360007704f1d39205b9305389`);
                setMovieDetail(response.data);
            } catch (error) {
                console.error('Error fetching movie detail:', error);
            }
        };

        fetchMovieDetail();
    }, [id]);

    const handleClick = () => {
        navigate(`/movie/${id}`, { state: { id: id } });

    };

    return (
        <MovieDetailBox onClick={handleClick}>
            <TextDetailBox>
                <TitleDetail>{title}</TitleDetail>
                <Overview>{overview}</Overview>
            </TextDetailBox>
        </MovieDetailBox>
    );
}

export default MovieDetailComponents;
