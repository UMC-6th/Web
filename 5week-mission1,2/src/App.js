import React from "react";
import "./App.css";
import MainPage from "./MainPage";
import { AppContainer, Navbar, HiContainer, SearchContainer } from "./styled";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import PopularPage from "./PopularPage";
import TopRatedPage from "./TopRatedPage";
import Upcoming from "./Upcoming";
import NowPlayingPage from "./NowPlayingPage";
import NotFound from "./NotFound";
import Signup from "./signup";
import Login from "./Login";
import MovieDetailComponent from "./MovieDetailComponent";



function App() {
  function handleLoginClick() {
    const login = document.querySelector(".Login");
    if (login) {
      if (login.innerHTML === "로그인") {
        login.innerHTML = "로그아웃";
      } else {
        login.innerHTML = "로그인";
      }
    }
  }

  
  return (
    <div className="App">

      <BrowserRouter>
        <AppContainer>
          <Navbar>
            <Link to="/" className="NavTitle">
              UMC Movie
            </Link>
            <div className="menuwrap">
              <Link to="/signup">회원가입</Link>
              
              <Link to="/PopularPage">Popular</Link>
              <Link to="/NowPlaying">Now Playing</Link>
              <Link to="/TopRated">Top Rated</Link>
              <Link to="/Upcoming">Upcoming</Link>
            </div>
          </Navbar>

          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/Login" element={<Login/>}/>
            
            <Route path="/PopularPage" element={<PopularPage />} />
            <Route path="/NowPlaying" element={<NowPlayingPage />} />
            <Route path="/NowPlaying/:title" element={<MovieDetailComponent />} />
            <Route path="/TopRated" element={<TopRatedPage />} />
            <Route path="/TopRated/:title" element={<MovieDetailComponent />} />
            <Route path="/Upcoming" element={<Upcoming />} />
            <Route path="/movie/:title" element={<MovieDetailComponent />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </AppContainer>


      </BrowserRouter>

    </div>
  );
}

export default App;
