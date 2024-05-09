// LoadingSpinner.jsx

import React from 'react';
import './LoadingSpinner.css'; // 스피너 스타일을 가져옵니다.

export default function LoadingSpinner() {
  return (
    <div className="loading-spinner-container">
      <div className="loading-spinner"></div>
    </div>
  );
}
