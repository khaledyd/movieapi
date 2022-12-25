import { Box, padding } from "@mui/system";
import React from "react";
import "../../App.css";
import "../../pages/Movies";
import Card from "./Card";
import "./Recommendations.css";

function Recommendations({ recomendations }) {
  console.log(recomendations);
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
      }}
    >
      <Box
        sx={{
          width: "20%",
        }}
      >
        sidebar
      </Box>
      <Box
        sx={{
          width: "80%",


          height: "10%",
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          marginTop: "100px",
          alignItems: "center",
          justifyContent: "flexstart",
        }}
      >
        {recomendations.map((recomendation) => {
          return <Card recomendations={recomendation} key={recomendation.id} />;
        })}
      </Box>
    </Box>
  );
}

export default Recommendations;
