import React from "react";
import MovieCard from "../components/MovieCard";
import "./movies.css";

export default function Movies({ movieData }) {
  return (
    <div className="movies">
      <div className="cards-">

        <MovieCard movieData ={movieData} />
      </div>

    </div>
  );
}
