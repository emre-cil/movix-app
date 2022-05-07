import { useState, useEffect, useRef } from "react";
import API from "../API";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const fetchMovies = async (page, searchValue = "") => {
    try {
      setError(false);
      setLoading(true);
      const movies = await API.fetchMovies(searchValue, page);
      setState((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }));
    } catch (error) {
      setError(true);
      console.log(error.message);
    }
    setLoading(false);
  };

  //initial and when search happen
  useEffect(() => {
    setState(initialState);
    fetchMovies(1, searchValue);
  }, [searchValue]);

  //load more
  useEffect(() => {
    if (!isLoadingMore) return;
    fetchMovies(state.page + 1, searchValue);
    setIsLoadingMore(false);
  }, [isLoadingMore, searchValue, state.page]);

  return {
    state,
    loading,
    error,
    setSearchValue,
    searchValue,
    setIsLoadingMore,
  };
};
