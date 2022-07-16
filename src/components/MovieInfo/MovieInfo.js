import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BsBookmarkPlus, BsBookmarkCheck } from 'react-icons/bs';
import Thumb from '../Thumb/Thumb';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../config';
import NoImage from '../../images/noImage.png';
import { Wrapper, Content, Text, HeaderWrapper } from './MovieInfo.styles';
import AuthContext from '../../store/auth-context';

const MovieInfo = ({ movie }) => {
  const authCtx = useContext(AuthContext);
  const [isWatchLater, setIsWatchLater] = useState(false);
  const addWatchLaterOnClickHandler = () => {
    const WLs = localStorage.getItem('watchLater');
    const movieId = movie.id;
    const image = `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`;
    if (WLs) {
      const WLsArray = JSON.parse(WLs);
      WLsArray.push({ movieId, image });
      localStorage.setItem('watchLater', JSON.stringify(WLsArray));
    } else {
      localStorage.setItem('watchLater', JSON.stringify([{ movieId, image }]));
    }
    setIsWatchLater(true);
  };

  const deleteWatchLaterOnClickHandler = () => {
    const WLs = localStorage.getItem('watchLater');
    if (WLs) {
      const WLsArray = JSON.parse(WLs);
      const newWLsArray = WLsArray.filter((wl) => wl.movieId !== movie.id);
      localStorage.setItem('watchLater', JSON.stringify(newWLsArray));
    }
    setIsWatchLater(false);
  };

  useEffect(() => {
    const WLs = localStorage.getItem('watchLater');
    if (WLs) {
      const WLsArray = JSON.parse(WLs);
      const isWatchLater = WLsArray.some((wl) => wl.movieId === movie.id);
      setIsWatchLater(isWatchLater);
    }
  }, [movie.id]);

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
            {authCtx.isLoggedIn && (
              <button
                onClick={
                  isWatchLater
                    ? deleteWatchLaterOnClickHandler
                    : addWatchLaterOnClickHandler
                }
                style={isWatchLater ? { backgroundColor: 'lightgrey' } : {}}
              >
                Watch Later
                {isWatchLater ? <BsBookmarkCheck /> : <BsBookmarkPlus />}
              </button>
            )}
          </HeaderWrapper>
          <h3>PLOT</h3>
          <p>{movie.overview}</p>

          <div className="rating-directors">
            <div>
              <h3>RATING</h3>
              <div className="score">{movie.vote_average}</div>
            </div>
            <div className="director">
              <h3>DIRECTOR{movie.directors.length > 1 && 'S'}</h3>
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
