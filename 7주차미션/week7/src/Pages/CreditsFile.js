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

`

export const CreditImg = styled.img`
width:80px;
height:70px;
border-radius: 70%;
overflow: hidden;
margin-bottom: 10%;
`
const CreditName = styled.div`
color:white;
margin-bottom: 10%;
`

export default function CreditsFile(props) { //props으로 데이터 만들기

    return (
        
        <CreditContainer>    
            <CreditName>{props.name}</CreditName>
            <CreditImg src={props.imgURL} alt={props.name} />
        </CreditContainer>
        
    );
}