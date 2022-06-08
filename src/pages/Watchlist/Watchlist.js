import React from "react";
import Grid from "../../components/Grid/Grid";
import Thumb from "../../components/Thumb/Thumb";
const Watchlist = () => {
  const movies = JSON.parse(localStorage.getItem("watchLater"));

  return (
    <Grid header="Watch Later">
      {movies &&
        movies.map((movie) => (
          <Thumb
            key={movie.movieId}
            clickable
            image={movie.image}
            movieId={movie.movieId}
          />
        ))}
    </Grid>
  );
};
export default Watchlist;
