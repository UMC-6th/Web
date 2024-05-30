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

export const Spinner = styled.div`
    border: 3px solid #f3f3f3; /* Light grey */
    border-top: 3px solid #3498db; /* Blue */
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: ${spin} 1s linear infinite;
    margin-right: 50%;
    margin-top: 50%;
`;

export default function Loading(){
    return(
        <Spinner></Spinner>
    )
}