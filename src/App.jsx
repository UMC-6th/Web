import styled from 'styled-components';
import NavbarComponent from '../src/components/MovieNavbar';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import React, {useState} from 'react';

import MainPage from './pages/MovieMainPage';
import NowPlayingPage from '../src/pages/NowPlayingPage';
import PopularPage from '../src/pages/PopularPage';
import TopRatedPage from '../src/pages/TopRatedPage';
import UpComing from '../src/pages/UpComing';
import NotFoundPage from '../src/pages/NotFoundPage';
import MovieDetailPage from '../src/pages/MovieDetailPage';
import Join from '../src/pages/Join';
import Loginpage from '../src/pages/LoginPage'

function App() {

  const [ registeredUser, setRegisteredUser] = useState(null);

  const handleRegister = (userData ) =>{
    setRegisteredUser(userData);
  }

  return (
    <BrowserRouter>

      <NavbarComponent/>
      <Container>
        <Routes>
          <Route path='/main-page' element={<MainPage/>}/>
          <Route path='/now-playing-page' element={<NowPlayingPage/>}/>
          <Route path='/popular-page' element={<PopularPage/>}/>
          <Route path='/top-rated-page' element={<TopRatedPage/>}/>
          <Route path='/up-coming-page' element={<UpComing/>}/>
          <Route path='/movie/:id' element={<MovieDetailPage/>}/>
          <Route path='/*' element={<NotFoundPage/>}/>
          <Route path='/join-page' element={<Join onRegister={handleRegister}/>}/>
          <Route path='/login-page' element={<Loginpage registeredUser = {registeredUser}/>}/>
        </Routes>
      </Container>

    </BrowserRouter>
  )
}

const Container = styled.div`
  width: 100vw;
  min-height: 100vh; 
  padding: 10px 0px;
  background-color: rgb(19, 19, 19);
  display: flex;
  flex-direction: row;
  justify-content: center;
  overflow-y: scroll;
  margin: 0;
  align-items: center;
  
`;

export default App;