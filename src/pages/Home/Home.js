import React, { useState, useEffect } from "react";
import { useHomeFetch } from "../../hooks/useHomeFetch";
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../../config";
import NoImage from "../../images/noImage.png";
//components
import HeroImage from "../../components/HeroImage/HeroImage";
import Grid from "../../components/Grid/Grid";
import Thumb from "../../components/Thumb/Thumb";
import Spinner from "../../components/Spinner/Spinner";
import SearchBar from "../../components/SearchBar/SearchBar";
import Button from "../../components/Button/Button";

const Home = () => {
  const {
    error,
    state,
    loading,
    setSearchValue,
    searchValue,
    setIsLoadingMore,
  } = useHomeFetch();

  if (error) return <div>Error...</div>;

  return (
    <div>
      {state.results[0] && !searchValue && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      )}

      <SearchBar setSearchValue={setSearchValue} />

      {/* popular Movies */}
      <Grid header={searchValue ? "Search Result" : "Populer Movies"}>
        {state.results.map((movie) => (
          <Thumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
          />
        ))}
      </Grid>

      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button
          text="Load More"
          onClickHandler={() => setIsLoadingMore(true)}
        />
      )}
    </div>
  );
};

export default Home;
