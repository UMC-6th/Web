import React, { useState } from "react";
import { AppContainer, Navbar, HiContainer, SearchContainer } from "./styled";
import { Link, BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PopularPage from "./PopularPage";
import TopRatedPage from "./TopRatedPage";
import Upcoming from "./Upcoming";
import NowPlayingPage from "./NowPlayingPage";
import NotFound from "./NotFound";
import Signup from "./signup";
import MovieDetailComponent from "./MovieDetailComponent";
import App from "./App";
import './App.css'
function MainPage() {
  return (
    <AppContainer>
      <HiContainer>
        <h2>환영합니다!</h2>
      </HiContainer>
      <SearchContainer>
        <h2 className="highlight">Find your movies!</h2>
        <div className="searchwrap">
          <input className="searchInput" type="text" placeholder="Search"></input>
          <button className="searchButton">Search</button>
        </div>
      </SearchContainer>
    </AppContainer>
  );
}

export default MainPage;
