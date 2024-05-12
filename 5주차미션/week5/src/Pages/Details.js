import { useLocation, useParams } from "react-router-dom";
import { Img_Base_URL } from "./MovieFile";
import OverView from "./overview";
import styled from "styled-components"
import React from "react";

    const DetailContainer = styled.div`
    position: relative;
    `;

    const DetailImage = styled.img`
    width: 350px;
    height: 450px;
    margin-left: 15%;
    margin-top: 3%;
    `;

    const DetailTitle = styled.div`
    color: white;
    font-size: large;
    position: absolute;
    top: 150px;
    left: 600px;
    `;

    const DetailVoteAverage = styled.div`
    display: grid;
    
    color: white;
    position: absolute;
    top: 200px;
    left: 600px;
    `;

    const SvgSize = styled.svg`
    width: 20px;
    height: 20px;
    `;

    const SvgLocation = styled.div`
    display: grid;
    position: absolute;
    top: 200px;
    left: 650px;
    grid-template-columns: repeat(10, 1fr);
    `

    const DetailOverview = styled.div`
    color: white;
    font-size: small;
    position: absolute;
    top: 300px;
    left: 600px;
    width: 400px;
    `;

    const OverviewTitle = styled.h4`
    position: absolute;
    color:white;
    top: 250px;
    left: 600px;
    `;


    export default function Details(){
 
    const {title} = useParams();
    const {state} = useLocation();

    console.log(title);
    console.log(state);

    function getOverview(overview) {
        return overview? overview : '줄거리 정보가 없습니다';
      }
      
      console.log(getOverview(true));
      
      console.log(getOverview(false));
      
      console.log(getOverview(null));

    function getRating(vote_average){
        const rating = Math.floor(vote_average);
        let stars = [];

        // Loop to generate stars
        for (let i = 0; i < rating; i++) {
          stars.push(
            <SvgSize key={i} style={{ gridColumn: i + 1}}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/>
              </svg>
            </SvgSize>
          );
        }
        return stars
    }
  
    return(
        <DetailContainer>
        <DetailImage  src={Img_Base_URL + state.poster_path}/>
        <div className="detail-container">

        <DetailTitle>제목 : {state.title}</DetailTitle>
    
        <DetailVoteAverage>평점 : </DetailVoteAverage>
        <SvgLocation>{getRating(state.vote_average)}</SvgLocation>
        
        <OverviewTitle>줄거리</OverviewTitle>
        <DetailOverview><OverView overview={getOverview(state.overview)}/></DetailOverview>
        </div>
        </DetailContainer>
    )

}