import React from "react";
import "./movieCard.css";

export default function MovieCard({ movieData }) {
  return (
    <div className="card">
      <div className="card-data">
        <div className="card-img">
          <img
            className="img-src"
            src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
            alt=""
          />
          <p className="image-name">{movieData.original_title}</p>
        </div>

        <p className="date"></p>
      </div>
    </div>
  );
}
