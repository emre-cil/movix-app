import React, { useState, useEffect } from "react";
import axios from "axios";
import { Wrapper, IFrame } from "./Trailer.styles";
const Trailer = ({ filmId }) => {
  const [trailerURl, setTrailerURl] = useState("");
  useEffect(() => {
    const videosUrl = `https://api.themoviedb.org/3/movie/${filmId}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`;
    const trailerInfo = async () => {
      const { data } = await axios.get(videosUrl);
      setTrailerURl(data.results[0].key);
    };

    trailerInfo();
  }, []);

  return (
    <Wrapper>
      <IFrame
        src={"https://www.youtube.com/embed/" + trailerURl}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </Wrapper>
  );
};

export default Trailer;
