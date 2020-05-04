import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import movieApi from '../../service/movieApi';

export default function Home(){

    const [movies, setMovies] = useState([]);

    

    useEffect(()=>{
        movieApi.get('movies').then(response => {
            setMovies(response.data);
        });
    }, [movies]);

    function getMovie(movie){
        localStorage.setItem('movieName', movie);
    }

    return(
        <div>
            <h1>Filmes</h1>
            <div>
                {
                    movies.map(movie => (
                        <li key={movie} >
                            <Link to="/movie" onClick={()=>getMovie(movie)} >{movie}</Link> 
                            </li>
                    ))
                }
            </div>
        </div>
    );
}