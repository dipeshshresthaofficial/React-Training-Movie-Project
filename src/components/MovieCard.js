import React from "react";
import { Link } from "react-router-dom";
import "./MovieCard.scss";

export default function MovieCard(props) {
  const { movie } = props;
  return (
    <Link to={`/movie/${movie.imdbID}`} style={{ textDecoration: 'none' }}>
      <div className="moviecard-container">
        <img src={movie.Poster} alt={movie.Title} />
        <div className="movie-detail">
          <p style={{ margin: "0px" }}>{movie.Title}</p>
          <p style={{ margin: "0px" }}>IMDb: {movie.imdbRating}</p>
        </div>
      </div>
    </Link>
  );
}
