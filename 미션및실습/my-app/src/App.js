import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Movie from './Pages/Movie';
import Popular from './Pages/Popular';
import NowPlaying from './Pages/NowPlaying';
import TopRated from './Pages/TopRated';
import Upcoming from './Pages/UpComing';
import Header from './Pages/Header';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Popular' element={<Popular/>}/>
        <Route path='/NowPlaying' element={<NowPlaying/>}/>
        <Route path='/TopRated' element={<TopRated/>}/>
        <Route path='/UpComing' element={<Upcoming/>}/>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
