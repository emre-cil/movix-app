import React from "react";
import PropTypes from "prop-types";
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
Thumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
};

export default Thumb;
