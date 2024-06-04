import React from 'react';
import Movie from './MovieTitle.jsx';
import Story from './Story.jsx';
import styled from 'styled-components';

const ParentComponent = () => {
    return (
      <div style={{ position: "relative" }}>
        <Movie style={{ position: "absolute", zIndex: "0" }} />
        <Story style={{ position: "absolute", zIndex: "1" }} />
      </div>
    );
  };
  
  export default ParentComponent;