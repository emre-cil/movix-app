import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import { BsHeart, BsBookmarkPlus } from "react-icons/bs";
import Thumb from "../Thumb/Thumb";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import NoImage from "../../images/noImage.png";
import { Wrapper, Content, Text, HeaderWrapper } from "./MovieInfo.styles";
import AuthContext from "../../store/auth-context";

const MovieInfo = ({ movie }) => {
  let navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  return (
    <Wrapper backdrop={movie.backdrop_path}>
      <Content>
        <Thumb
          image={
            movie.backdrop_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
          }
          clickable={false}
        />
        <Text>
          <HeaderWrapper>
            <h1>{movie.title}</h1>
            <div>
              <BsHeart
                onClick={() => {
                  !authCtx.isLoggedIn && navigate("/login", { replace: true });
                }}
              />
              <button
                onClick={() => {
                  !authCtx.isLoggedIn && navigate("/login", { replace: true });
                }}
              >
                Watch Later <BsBookmarkPlus />
              </button>
            </div>
          </HeaderWrapper>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>

          <div className="rating-directors">
            <div>
              <h3>RATING</h3>
              <div className="score">{movie.vote_average}</div>
            </div>
            <div className="director">
              <h3>DIRECTOR{movie.directors.length > 1 && "S"}</h3>
              {movie.directors.map((director) => (
                <p key={director.credit_id}>{director.name}</p>
              ))}
            </div>
          </div>
        </Text>
      </Content>
    </Wrapper>
  );
};
MovieInfo.propTypes = {
  movie: PropTypes.object,
};
export default MovieInfo;
