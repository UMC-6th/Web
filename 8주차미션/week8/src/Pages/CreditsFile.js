import React from "react";
import styled from "styled-components";

const CreditContainer = styled.div`
position: relative;
width: 13%;
display: inline-block;
flex-wrap: wrap;
margin: 0 auto;
text-align: center;
left: 3%;
right: auto;

@media (max-width: 300px) {
    flex-direction: row;
    position: relative;
    width: auto;
    margin: 0 auto;
    text-align: center;
    left: auto;}
    
`;



export const CreditImg = styled.img`
width:80px;
height:70px;
border-radius: 70%;
overflow: hidden;
margin-bottom: 10%;
@media (max-width: 900px) {
    width:40px;
    height:30px;
}
`
const CreditName = styled.div`
color:white;
margin-bottom: 10%;
@media (max-width: 900px) {
    font-size: small;
    margin-bottom: 0; /* 중복 margin-bottom 제거 */
    margin-left: 10%; /* 이름과 이미지 간격 추가 */
  }
  `

export default function CreditsFile(props) { //props으로 데이터 만들기

    return (
        
        <CreditContainer>    
            <CreditName>{props.name}</CreditName>
            <CreditImg src={props.imgURL} alt={props.name} />
        </CreditContainer>
        
    );
}