import React from 'react';
import { useParams } from 'react-router-dom';
import { getMovie } from './MovieList';
import "./MovieDetail.scss";

export default function MovieDetail() {
  const {id} = useParams();
  // console.log(id);
  const movie = getMovie(id);
  console.log(movie);
  return (
    <div className='moviedetail-container'>
      <div className='moviedetail-img'>
        <img src={movie.Poster} alt= {movie.Title} />
      </div>
      <div className='moviedetail-description'>
        <h3 style={{ margin: '5px' }}>Title: <span> {movie.Title}</span></h3>
        <p style={{ margin: '5px' }}>IMDb Rating: <span>{movie.imdbRating}</span></p>
        <p style={{ margin: '5px' }}>Box Office: <span>{movie.BoxOffice}</span></p>
        <p style={{ margin: '5px' }}>Director: <span>{movie.Director}</span></p>
        <p style={{ margin: '5px' }}>Actors: <span>{movie.Actors}</span></p>
        <p style={{ margin: '5px' }}>Genre: <span>{movie.Genre}</span></p>
        <p style={{ margin: '5px' }}>Released Date: <span>{movie.Released}</span></p>
        <p style={{ margin: '5px' }}>Awards: <span>{movie.Awards}</span></p>
        <p style={{ margin: '5px' }}  >Description: <span>{movie.Plot}</span></p>
      </div>
    </div>
  )
}
