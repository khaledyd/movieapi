import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Card({ recomendations }) {
  let text = recomendations.release_date;

  const myArray = text.split("-");
  let word = myArray[0];
  console.log(word);
  return (
    <Box
      sx={{
        width: "25%",
        height: "550px",
        backgroundColor: "#144272",
        alignSelf: "flex-start",
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "85%",
          backgroundColor: "red",
          borderRadius: "20px",
        }}
      >
        <img
          className="img-src"
          src={`https://image.tmdb.org/t/p/w500/${recomendations.poster_path}`}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "20px",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          align: "center",
          fontFamily: "Open Sans, sans-serif",
          fontWeight: "normal",
          fontSize: "20px",
          color: "#fff",
          margin: "5px 10px",
          flexDirection: "column",
        }}
      >
        <Typography sx={{}}>{recomendations.original_title}</Typography>
        <Typography
          sx={{
            fontFamily: "Open Sans, sans-serif",
            fontWeight: "lighter",
            fontSize: "15px",
            color: "#fff",
            margin: "5px 10px",
          }}
        >
          {word}
        </Typography>
      </Box>
    </Box>
  );
}

export default Card;
