// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import MovieDetailComponent from '../components/MovieDetailComponent';

const Image = styled.img`
    width: 100%;
    height: auto;
`;

const PosterBox = styled.div`
    width: 40%;
    height: auto;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DetailPageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 50px;
    padding: 20px;
`;

const TextBox = styled.div`
    width: 50%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

export default function MovieDetailPage() {
    const location = useLocation();
    const movie = location.state;

    return (
        <DetailPageContainer>
            <PosterBox>
                <Image src={movie.image} alt={movie.title} />               
            </PosterBox>
            <TextBox>
                <MovieDetailComponent title={movie.title} overview={movie.overview} />
            </TextBox>
        </DetailPageContainer>
    );
}
