import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Popular from './Pages/Popular';
import NowPlaying from './Pages/NowPlaying';
import TopRated from './Pages/TopRated';
import Upcoming from './Pages/UpComing';
import Header from './Pages/Header';
import NotFound from './Pages/NotFound';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import DetailPages from './Pages/DetailPages';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Popular' element={<Popular/>}/>
        <Route path='/Popular/:id' element={<DetailPages />} />
        <Route path='/NowPlaying' element={<NowPlaying/>}/>
        <Route path='/NowPlaying/:id' element={<DetailPages />} />
        <Route path='/TopRated' element={<TopRated/>}/>
        <Route path='/TopRated/:id' element={<DetailPages />} />
        <Route path='/UpComing' element={<Upcoming/>}/>
        <Route path='/UpComing/:id' element={<DetailPages />} />
        <Route path='/*' element={<NotFound/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Login' element={<Login/>}/>
        </Routes>
       </BrowserRouter>
    
    </div>
  );
}

export default App;
