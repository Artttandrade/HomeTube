import React from 'react';
import ReactPlayer from 'react-player';

export default function Movie(){

    const movie = localStorage.getItem('movieName');

    return(
        <div>
            <h1>Movie: {movie}</h1>
            <div >
                <ReactPlayer style={{margin: 'auto', textAlign: 'center'}} url={`http://arttandrade.ddns.net:3333/movies/${movie}`} controls />
            </div>
        </div>
    );
}