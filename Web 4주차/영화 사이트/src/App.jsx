import styled from 'styled-components';
import NavbarComponent from '../components/NavbarComponent';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import MainPage from '../pages/MainPage';
import NowPlayingPage from '../pages/NowPlayingPage';
import PopularPage from '../pages/PopularPage';
import TopRatedPage from '../pages/TopRatedPage';
import UpComing from '../pages/UpComing';
import MovieDetailPage from '../pages/MovieDetailPage';
import NotFoundPage from '../pages/NotFoundPage';

// App component
function App() {

  return (
    <BrowserRouter>

      <NavbarComponent/>
      <Container>
        <Routes>
          <Route path='/' element={<Navigate replace to="/main-page" />} />
          <Route path='/main-page' element={<MainPage/>}/>
          <Route path='/now-playing-page' element={<NowPlayingPage/>}/>
          <Route path='/popular-page' element={<PopularPage/>}/>
          <Route path='/top-rated-page' element={<TopRatedPage/>}/>
          <Route path='/up-coming-page' element={<UpComing/>}/>
          <Route path='/movie/:originalTitle' element={<MovieDetailPage/>}/>
          <Route path='/*' element={<NotFoundPage/>}/>
        </Routes>
      </Container>

    </BrowserRouter>
  )
}

const Container = styled.div`
  width: 100vw;
  min-height: 100vh; 
  padding: 0px 0px;
  background-color: rgb(19, 19, 19);
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow-y: scroll;
  margin: 0;
  align-items: center;
`;

export default App;
