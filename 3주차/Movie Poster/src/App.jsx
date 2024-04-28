import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'

import {BrowserRouter, Route, Routes} from "react-router-dom";

import MainPage from "./pages/MainPage.jsx";
import Login from "./pages/Login.jsx";
import Movies from "./pages/PopularPage.jsx"
import NowPlayingPage from './pages/NowPlayingPage.jsx';
import TopRatedPage from './pages/TopRatedPage.jsx';
import UpComing from "./pages/UpComing.jsx";

function App() {

  return (
    
    
    <body>
<div className='root-wrap'>
  <BrowserRouter>
  <Header />
    <Routes>
      <Route path = "/" element={<MainPage />} />
      
      <Route path = "/Login" element={<Login />} />
      <Route path = "/Popular" element={<Movies />} />
      <Route path = "/Nowplay" element={<NowPlayingPage/>} />
      <Route path = "/Top" element={<TopRatedPage/>} />
      <Route path = "/Upcomming" element={<UpComing />} />
      </Routes>
  <Footer />
  </BrowserRouter>
  
</div>
    </body>
    
);
}


export default App
