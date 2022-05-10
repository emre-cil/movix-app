import React from "react";
import { Link } from "react-router-dom";
import { Image } from "./Thumb.styles";
const Thumb = ({ image, movieId, clickable }) => {
  return (
    <div>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <Image src={image} alt="movie" />
        </Link>
      ) : (
        <Image clickable={clickable} src={image} alt="movie" />
      )}
    </div>
  );
};

export default Thumb;
