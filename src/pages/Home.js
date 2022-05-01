import React, { useState, useEffect } from "react";
import { useHomeFetch } from "../hooks/useHomeFetch";
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from "../config";
import NoImage from "../images/noImage.jpg";

const Home = () => {
  const { state, loading, error } = useHomeFetch();
  console.log(state);
  return <div>Home</div>;
};

export default Home;
