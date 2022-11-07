import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Movie from './components/pages/Movie';
import MovieDetail from './components/pages/MovieDetail';

function App() {
  return (
    <div className="App">
     <Navbar/>
      <Routes>
        <Route path= '' element={<Home />}></Route>
        <Route path= 'about' element={<About />}></Route>
        <Route path= 'movies' element={<Movie />}></Route>
        <Route path= 'movies/:id' element={<MovieDetail />}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
