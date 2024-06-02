import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams,useNavigate } from "react-router-dom";
import styled from "styled-components";
import Credits from "./Credits";



const DetailContainer = styled.div`
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 100%; /* Ensure it covers the full height of the viewport */
`;

const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: ${({ posterPath }) =>
    posterPath ? `url(${Img_Base_URL}${posterPath})` : "none"};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  opacity: 0.5; /* 배경 이미지의 투명도 설정 */
`;

const DetailImage = styled.img`
  width: 350px;
  height: 450px;
  margin-left: 15%;
  margin-top: 3%;
  @media (max-width: 900px) {
    width: 200px;
    height: 250px;
  }
`;

const DetailTitle = styled.div`
  color: white;
  font-size: large;
  position: absolute;
  top: 150px;
  left: 600px;
  @media (max-width: 900px) {
    font-size: small;
    width: 400px;
    top: 50px;
    left: 600px;
  }
`;

const DetailVoteAverage = styled.div`
  display: grid;
  color: white;
  position: absolute;
  top: 200px;
  left: 600px;
  @media (max-width: 900px) {
    position: absolute;
    font-size: small;
    top: 100px;
    width: 400px;
  }
`;

const SvgSize = styled.svg`
  width: 20px;
  height: 20px;
  @media (max-width: 900px) {
    width: 10px;
    height: 10px;
  }
`;

const SvgLocation = styled.div`
  display: grid;
  position: absolute;
  top: 200px;
  left: 650px;
  grid-template-columns: repeat(10, 1fr);
  @media (max-width: 900px) {
    position: absolute;
    top: 100px;
    left: 650px;
  }
`;

const DetailOverview = styled.div`
  color: white;
  font-size: small;
  position: absolute;
  top: 300px;
  left: 600px;
  width: 400px;
  @media (max-width: 900px) {
    position: absolute;
    top: 200px;
    left: 600px;
    width: 400px;
  }
`;

const OverviewTitle = styled.h4`
  position: absolute;
  color: white;
  top: 250px;
  left: 600px;
  @media (max-width: 900px) {
    top: 150px;
    font-size: x-small;
    width: 400px;
  }
`;

const ReleaseDate = styled.div`
  position: absolute;
  color: white;
  top: 240px;
  left: 600px;
  @media (max-width: 900px) {
    font-size: small;
    top: 140px;
    width: 400px;
  }
`;

export const Img_Base_URL = "https://image.tmdb.org/t/p/w500";

export default function DetailPages() {
  const API_KEY = "40af110aa06b1051f6264617ea84fe22";
  const [details, setDetails] = useState([]);
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const movie_id = params.id;
  const { state } = useLocation(); // MovieFiles의 state를 가져옴(현재경로의 정보), 이를 통해 페이지 간 데이터 전달이 가능

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${API_KEY}&language=ko-KR&page=1&query=${movie_id}`
      )
      .then((res) => {
        setDetails(res.data);
        setLoading(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [movie_id]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=${API_KEY}&language=ko-KR&page=1&query=${movie_id}`
      )
      .then((res) => {
        setCredits(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, [movie_id]);

  console.log("Credits state:", credits);

  function getOverview(overview) {
    return overview ? overview : "줄거리 정보가 없습니다";
  }

  function getRating(vote_average) {
    const rating = Math.floor(vote_average);
    let stars = [];

    // Loop to generate stars
    for (let i = 0; i < rating; i++) {
      stars.push(
        <SvgSize key={i} style={{ gridColumn: i + 1 }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
          </svg>
        </SvgSize>
      );
    }
    return stars;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <DetailContainer style={{ backgroundImage: `url(${Img_Base_URL}${state.poster_path})`, opacity: 0.8}}>
      
      {state && state.poster_path && (
        <>
          <DetailImage src={Img_Base_URL + state.poster_path} />
          <div className="detail-container">
            <DetailTitle>제목 : {state.title}</DetailTitle>
            <ReleaseDate> 개봉일:{state.release_date}</ReleaseDate>

            <DetailVoteAverage>평점 : </DetailVoteAverage>
            <SvgLocation>{getRating(state.vote_average)}</SvgLocation>

            <OverviewTitle>줄거리</OverviewTitle>
            <DetailOverview>{getOverview(state.overview)}</DetailOverview>

            <div>
              <Credits credits={credits} />
            </div>
          </div>
        </>
      )}
    </DetailContainer>
  );
}






