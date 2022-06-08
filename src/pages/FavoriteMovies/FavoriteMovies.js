import React, { useState } from "react";
import Grid from "../../components/Grid/Grid";
import Thumb from "../../components/Thumb/Thumb";

const FavoriteMovies = () => {
  const [movies, setMovies] = useState(
    JSON.parse(localStorage.getItem("favorites"))
  );

  const moviesUpdate = (newMovies) => {
    setMovies(newMovies);
  };

  return (
    <Grid header="Favorite Movies">
      {movies &&
        movies.map((movie) => (
          <Thumb
            key={movie.movieId}
            clickable
            image={movie.image}
            movieId={movie.movieId}
            favsUpdate={moviesUpdate}
          />
        ))}
    </Grid>
  );
};

export default FavoriteMovies;
