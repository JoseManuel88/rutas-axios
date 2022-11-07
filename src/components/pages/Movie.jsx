import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


const Movie = () => {
const [movies, setMovies] = useState([]);

useEffect(() =>{

// const getMovies = async () => {
// const res = await fetch("https://ghibliapi.herokuapp.com/films");
// const resJson = await res.json();
// console.log(resJson);
// setMovies(resJson);
// }
const getMovies = async () => {
    const res = await axios.get("https://ghibliapi.herokuapp.com/films");
    console.log(res);
    setMovies(res.data);
}
  
getMovies();
  },[])
  return (
    <div>
        {movies && movies.map((movie, index) => {
            return(
            <div key={movie.id}>
                <img src = {movie.image} alt={movie.title}/>
                <p> {movie.title}</p>
                <Link to={`/movies/${movie.id}`}>Ver mas</Link>
            </div>
                
 )
            })}
    </div>
  )
}

export default Movie