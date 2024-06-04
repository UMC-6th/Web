import React from 'react';
import styled, { keyframes } from 'styled-components';

// 회전 애니메이션 설정
const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

// 스타일 컴포넌트 생성
const LoadingSpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const LoadingSpinnerElement = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.3);
  border-top: 4px solid #007bff; /* 로딩 스피너 색상 설정 */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite; /* 회전 애니메이션 적용 */
`;

const LoadingText = styled.div`
  color: white;
  margin: 50px;
`;

export default function LoadingSpinner() {
  return (
    <LoadingSpinnerContainer>
      <LoadingSpinnerElement />
      <LoadingText>데이터를 받아오는 중입니다.</LoadingText>
    </LoadingSpinnerContainer>
  );
}
