import React, { useState } from "react";
import { data } from "../data";
import MovieCard from "./MovieCard.js";
import "./MovieList.scss";

export default function MovieList() {
  const [movies, setMovies] = useState(data);
  console.log(movies);
  return (
    <div className="movielist-container">
      <div className="movielist-inner">
        {movies.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export function getMovie(id){
  const movie = data.filter(movie=> movie.imdbID === id);
  return movie[0];
}
