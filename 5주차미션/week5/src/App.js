import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Popular from './Pages/Popular';
import NowPlaying from './Pages/NowPlaying';
import TopRated from './Pages/TopRated';
import Upcoming from './Pages/UpComing';
import Header from './Pages/Header';
import Details from './Pages/Details';
import NotFound from './Pages/NotFound';
import Signup from './Pages/Signup';
import Login from './Pages/Login';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Popular' element={<Popular/>}/>
        <Route path='/Popular/:title' element={<Details />} />
        <Route path='/NowPlaying' element={<NowPlaying/>}/>
        <Route path='/NowPlaying/:title' element={<Details />} />
        <Route path='/TopRated' element={<TopRated/>}/>
        <Route path='/TopRated/:title' element={<Details />} />
        <Route path='/UpComing' element={<Upcoming/>}/>
        <Route path='/UpComing/:title' element={<Details />} />
        <Route path='/*' element={<NotFound/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Login' element={<Login/>}/>
        </Routes>
       </BrowserRouter>
    
    </div>
  );
}

export default App;
