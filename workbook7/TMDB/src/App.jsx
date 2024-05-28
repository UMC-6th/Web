import { BrowserRouter, Routes, Route } from 'react-router-dom';
import styled from 'styled-components'
import "./App.css";
import NowPlaying from './pages/nowplaying';
import Popular from './pages/popular';
import TopRated from './pages/toprated';
import Upcoming from './pages/upcoming';
import Main from './pages/main';
import NotFound from './pages/notfound';
import MovieDetail from './pages/moviedetail';

import Footer from './components/footer';
import NavBar from './components/navbar';
import SignUp from './pages/signup';
import Login from './pages/login';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Wrap>
          <NavBar />
              <Container>
                <Routes>
                  <Route path='/' element={<Main />}/>
                  <Route path='/signup' element={<SignUp />}/>
                  <Route path='/login' element={<Login />}/>
                  <Route path='/popular' element={<Popular />}/>
                  <Route path='/nowplaying' element={<NowPlaying />}/>
                  <Route path='/toprated' element={<TopRated />}/>
                  <Route path='/upcoming' element={<Upcoming />}/>
                  <Route path='/*' element={<NotFound />}/>
                  <Route path='/movie/:originalName' element={<MovieDetail />} />
                </Routes>
              </Container>

              <Footer />
          </Wrap>
        </div>
      </BrowserRouter>
  );
}

const Wrap = styled.div`
  width: 100vw;
  min-height: 100vh;
`;


const Container = styled.div`
  background-color: rgb(34, 37, 75);
`;

export default App;