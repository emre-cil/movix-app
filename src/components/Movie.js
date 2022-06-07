import React from "react";
import { useParams } from "react-router-dom";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../config";
import Grid from "./Grid/Grid";
import Spinner from "./Spinner/Spinner";
import NoImage from "../images/noImage.png";
import MovieInfo from "./MovieInfo/MovieInfo";
import MovieInfoBar from "./MovieInfoBar/MovieInfoBar";
import Actor from "./Actor/Actor";
import { useMovieFetch } from "../hooks/useMovieFetch";
import Trailer from "./Trailer/Trailer";

const Movie = () => {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);
  if (loading) return <Spinner />;
  if (error) return <div>Error...</div>;
  return (
    <>
      <MovieInfo movie={movie} />
      <MovieInfoBar
        releaseDate={movie.release_date}
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />

      <Trailer />
      <Grid header="Actors">
        {movie.actors.map((actor) => (
          <Actor
            key={actor.credit_id}
            name={actor.name}
            character={actor.character}
            imageUrl={
              actor.profile_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
                : NoImage
            }
          />
        ))}
      </Grid>
    </>
  );
};

export default Movie;
