import React from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 70vh;
`;

const Title = styled.h1`
    color: white;
`;

const ErrorMessage = styled.h3`
    color: white; 
    margin: 10px 0;
`;

const StyledLink = styled(Link)`
    color: white; 
    text-decoration:none;
    font-size:30px;
    &:hover {
        color: white;
      }
`;

export default function NotFound(){
    return(
        <Container>
            <Title>Oops!</Title>
            <ErrorMessage>예상치못한 에러가 발생했습니다.</ErrorMessage>
            <ErrorMessage>NotFound.</ErrorMessage>
            <StyledLink to={"/"}>메인으로 이동하기</StyledLink>
        </Container>
    )
}