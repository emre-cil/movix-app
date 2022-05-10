import { useState, useEffect } from "react";
import API from "../API";
import { isPersistedState } from "../helpers";
export const useMovieFetch = (movieId) => {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const sessionState = isPersistedState(movieId);
      if (sessionState) {
        setState(sessionState);
        setLoading(false);
        return;
      }
      try {
        setLoading(true);
        console.log("1kere");
        setError(false);
        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);
        const directors = credits.crew.filter(
          (member) => member.job === "Director"
        );
        setState({
          ...movie,
          actors: credits.cast,
          directors,
        });
        sessionStorage.setItem(
          movieId,
          JSON.stringify({
            ...movie,
            actors: credits.cast,
            directors,
          })
        );

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    fetchData();
  }, [movieId]);
  return { state, loading, error };
};
