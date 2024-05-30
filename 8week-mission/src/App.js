import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import MainPage from "./MainPage";
import { AppContainer, Navbar } from "./styled";
import PopularPage from "./PopularPage";
import TopRatedPage from "./TopRatedPage";
import Upcoming from "./Upcoming";
import NowPlayingPage from "./NowPlayingPage";
import NotFound from "./NotFound";
import Signup from "./signup";
import Login from "./Login";
import MovieDetailComponent from "./MovieDetailComponent";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true); // 토큰이 있으면 로그인 상태로 설정
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    setIsLoggedIn(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      <Router>
        <AppContainer>
          <Navbar>
          <Link to="/" className="NavTitle">
              UMC Movie
            </Link>
            <div className="menuwrap">
              
                {!isLoggedIn ? (
                  <>
                    <Link to="/signup">회원가입</Link>
                    <Link to="/login">로그인</Link>
                    <Link to="/PopularPage">Popular</Link>
                    <Link to="/NowPlaying">Now Playing</Link>
                    <Link to="/TopRated">Top Rated</Link>
                    <Link to="/Upcoming">Upcoming</Link>
                  </>
                ) : (
                  <>
                    <button onClick={handleLogout}>로그아웃</button>
                    <Link to="/PopularPage">Popular</Link>
                    <Link to="/NowPlaying">Now Playing</Link>
                    <Link to="/TopRated">Top Rated</Link>
                    <Link to="/Upcoming">Upcoming</Link>
                  </>
                )}
              
              <button className="menu-icon" onClick={toggleMenu}>
                ☰
              </button>
            </div>
            <button className="menu-icon" onClick={toggleMenu}>
              ☰
            </button>
          </Navbar>
          <div className={`menu ${menuOpen ? "open" : ""}`}>
            {!isLoggedIn ? (
              <>
                <Link to="/signup" onClick={toggleMenu}>회원가입</Link>
                <Link to="/login" onClick={toggleMenu}>로그인</Link>
                <Link to="/PopularPage" onClick={toggleMenu}>Popular</Link>
                <Link to="/NowPlaying" onClick={toggleMenu}>Now Playing</Link>
                <Link to="/TopRated" onClick={toggleMenu}>Top Rated</Link>
                <Link to="/Upcoming" onClick={toggleMenu}>Upcoming</Link>
              </>
            ) : (
              <>
                <button onClick={() => { handleLogout(); toggleMenu(); }}>로그아웃</button>
                <Link to="/PopularPage" onClick={toggleMenu}>Popular</Link>
                <Link to="/NowPlaying" onClick={toggleMenu}>Now Playing</Link>
                <Link to="/TopRated" onClick={toggleMenu}>Top Rated</Link>
                <Link to="/Upcoming" onClick={toggleMenu}>Upcoming</Link>
              </>
            )}
          </div>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/PopularPage" element={<PopularPage />} />
            <Route path="/NowPlaying" element={<NowPlayingPage />} />
            <Route path="/TopRated" element={<TopRatedPage />} />
            <Route path="/Upcoming" element={<Upcoming />} />
            <Route path="/movie/:id" element={<MovieDetailComponent />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </AppContainer>
      </Router>
    </div>
  );
}

export default App;
