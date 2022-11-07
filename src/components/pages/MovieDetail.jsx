import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const MovieDetail = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [movie, setMovie] = useState({})
    useEffect(() =>{
        const getMovie = async () => {
            const res = await axios.get(`https://ghibliapi.herokuapp.com/films/${id}`);
            console.log(res);
            setMovie(res.data);
        }
        getMovie();
    },[])
  return (
    <div>
        <img src = {movie.image} alt={movie.title}/>
                <p> {movie.title}</p>
               <p>{movie.description}</p> 
               <button onClick={()=>navigate("/movies")}>go back</button>
    </div>
  )
}

export default MovieDetail