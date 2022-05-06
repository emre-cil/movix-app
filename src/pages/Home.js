import React, { useState, useEffect } from "react";
import { useHomeFetch } from "../hooks/useHomeFetch";
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
import NoImage from "../images/noImage.jpg";
//components
import HeroImage from "../components/HeroImage/HeroImage";
const Home = () => {
  const { state, loading, error } = useHomeFetch();
  console.log(state);
  return (
    <>
      {state.results[0] && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      )}
    </>
  );
};

export default Home;
