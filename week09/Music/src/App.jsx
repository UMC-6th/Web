// src/App.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Cart from './components/cart';
import styled from 'styled-components';
function App() {
  return (
    <Provider store={store}>
      <Box className="App">
        <Cart />
        
      </Box>
    </Provider>
  );
}

const Box = styled.div`
  background-color: cornsilk;
  padding: 20px;
`;

export default App;
