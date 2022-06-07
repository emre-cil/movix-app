import React, { useContext } from "react";
import PropTypes from "prop-types";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Image, Wrapper } from "./Thumb.styles";
import AuthContext from "../../store/auth-context";
const Thumb = ({ image, movieId, clickable, favorite }) => {
  const authCtx = useContext(AuthContext);
  return (
    <Wrapper>
      {clickable ? (
        <>
          {authCtx.isLoggedIn && favorite ? (
            <BsHeartFill style={{ color: "ffd700" }} />
          ) : (
            <BsHeart />
          )}
          <Link to={`/${movieId}`}>
            <Image src={image} alt="movie" />
          </Link>
        </>
      ) : (
        <Image clickable={clickable} src={image} alt="movie" />
      )}
    </Wrapper>
  );
};
Thumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
};

export default Thumb;
