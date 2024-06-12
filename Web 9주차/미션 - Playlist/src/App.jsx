import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import styled from 'styled-components'

import MainPage from '../pages/MainPage';

function App() {
  return (
    <BrowserRouter>
      <AppWrapper>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
        </Routes>
      </AppWrapper>
    </BrowserRouter>
  )
}

const AppWrapper = styled.div`
  width: 100vw;
  height: 100vh;
`;

export default App
