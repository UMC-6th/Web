import logo from './logo.svg';
import './App.css';
import { AppContainer, Box, Image, TitleWrap, Modal, Description, Heading, BoxHover } from './styled';
import React from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MainPage from './MainPage';
import PopularPage from './PopularPage';
import NowPlayingPage from './NowPlayingPage';
import TopRatedPage from './TopRatedPage';
import UpComing from './UpComing';
import MovieComponent from './MovieComponent';

const App = () => {
  return (
    <div className='App'>
      <div className='spin'></div>
      <BrowserRouter>
        <header>
          <h2>
            <Link to='/Main'>UMC Movie</Link>
          </h2>
          <div className='a-wrap'>
            <Link to='/Main'>회원가입</Link>
            <Link to='/popular'>Popular</Link>
            <Link to='/NowPlaying'>Now playing</Link>
            <Link to='/TopRated'>Top Rated</Link>
            <Link to='/UpComing'>Upcoming</Link>
          </div>
        </header>
        <Routes>
          <Route path='/Main' element={<MainPage/>} />
          <Route path="/popular" element={<PopularPage />} />
          <Route path="/NowPlaying" element={<NowPlayingPage />} />
          <Route path="/TopRated" element={<TopRatedPage />} />
          <Route path="/UpComing" element={<UpComing />} />
        </Routes>
      </BrowserRouter>
      <MainPage/>
    </div>
  );
}

export default App;
