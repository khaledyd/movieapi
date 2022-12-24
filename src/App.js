// import React, { useEffect, useState } from "react";

import Movie from "./pages/Movies";
import axios from "axios";

import { useState, useEffect } from "react";

function App() {
  const [movieData, setMovieData] = useState([]);
  const [genList, setGenList] = useState();

  useEffect(() => {
    async function getData() {
      try {
        const api1 = await axios.get(
          "https://api.themoviedb.org/3/movie/436270/recommendations?api_key=17b1267d22c03010b3c8a1656532005e&language=en-US&page=1"
        );

        setMovieData(api1.data.results);
        const api2 = await axios.get(
          "https://api.themoviedb.org/3/trending/all/week?api_key=17b1267d22c03010b3c8a1656532005e"
        );
        //console.log(api2.data);
        const api3 = await axios.get(
          "https://api.themoviedb.org/3/trending/all/day?api_key=17b1267d22c03010b3c8a1656532005e"
        );
        //console.log(api3.data);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, []);

  console.log(movieData);
  return (
    <div className="App">
      {movieData.map((movie) => {
        return <Movie movieData={movie} key={movie.id} />;
      })}
    </div>
  );
}
export default App;
