// LoadingSpinner.jsx

import React from 'react';
import './LoadingSpinner.css'; // 스피너 스타일을 가져옵니다.

export default function LoadingSpinner() {
  return (
    <div className="loading-spinner-container">
      <div className="loading-spinner">
      </div>  
      <div className = "loading-text">데이터를 받아오는 중입니다.</div>    
    </div>
    
  );
}
