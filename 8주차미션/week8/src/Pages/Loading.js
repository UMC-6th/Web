import React from "react";
import styled, { keyframes } from 'styled-components';


export const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const LoadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh; /* 전체 화면 중앙에 배치 */
`;

export const Spinner = styled.div`
    border: 3px solid #f3f3f3; /* Light grey */
    border-top: 3px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 40px; /* 크기를 더 키움 */
    height: 40px; /* 크기를 더 키움 */
    animation: ${spin} 1s linear infinite;
`;

export const LoadingText = styled.div`
    margin-top: 10px;
    font-size: 1.2em;
    color: #09f;
`;

export default function Loading(){
    return(
        <LoadingContainer>
        <Spinner />
        <LoadingText>데이터를 불러오는 중입니다.</LoadingText>
    </LoadingContainer>
    )
}