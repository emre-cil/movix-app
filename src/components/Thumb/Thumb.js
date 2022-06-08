import React, { useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Image, Wrapper } from "./Thumb.styles";

import AuthContext from "../../store/auth-context";
const Thumb = ({ image, movieId, clickable, favsUpdate }) => {
  const authCtx = useContext(AuthContext);
  const [isFavorite, setIsFavorite] = useState(false);

  const addFavoriteOnClickHandler = () => {
    const favs = localStorage.getItem("favorites");
    if (favs) {
      const favsArray = JSON.parse(favs);
      favsArray.push({ movieId, image });
      localStorage.setItem("favorites", JSON.stringify(favsArray));
    } else {
      localStorage.setItem("favorites", JSON.stringify([{ movieId, image }]));
    }
    setIsFavorite(true);
  };

  const deleteFavoriteOnClickHandler = () => {
    const favs = localStorage.getItem("favorites");
    if (favs) {
      const favsArray = JSON.parse(favs);
      const newFavsArray = favsArray.filter((fav) => fav.movieId !== movieId);
      localStorage.setItem("favorites", JSON.stringify(newFavsArray));
      favsUpdate && favsUpdate(newFavsArray);
    }
    setIsFavorite(false);
  };

  useEffect(() => {
    const favs = localStorage.getItem("favorites");
    if (favs) {
      const favsArray = JSON.parse(favs);
      const isFavorite = favsArray.some((fav) => fav.movieId === movieId);
      setIsFavorite(isFavorite);
    }
  }, []);

  return (
    <Wrapper>
      {clickable ? (
        <>
          {authCtx.isLoggedIn &&
            (isFavorite ? (
              <BsHeartFill
                style={{ color: "ffd700" }}
                onClick={deleteFavoriteOnClickHandler}
              />
            ) : (
              <BsHeart onClick={addFavoriteOnClickHandler} />
            ))}
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
