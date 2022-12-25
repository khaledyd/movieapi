import { Box } from "@mui/system";
import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { useState, useEffect } from "react";
import axios from "axios";
import Recommendations from "../components/Recommendations/Recommendations";

function Movies() {
  const [recomendations, setRecomendations] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const api1 = await axios.get(
          "https://api.themoviedb.org/3/movie/436270/recommendations?api_key=17b1267d22c03010b3c8a1656532005e&language=en-US&page=1"
        );

        setRecomendations(api1.data.results);
      } catch (error) {
        console.error(error);
      }
    }
    getData();
  }, []);
  return (
    <Box>
      <Navbar />
      <Recommendations recomendations={recomendations} />
    </Box>
  );
}

export default Movies;
