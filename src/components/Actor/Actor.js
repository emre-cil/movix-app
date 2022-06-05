import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Image, ImageContent } from "./Actor.styles";
const Actor = ({ name, character, imageUrl }) => (
  <Wrapper>
    <ImageContent>
      <Image src={imageUrl} alt="actor-thumb" />
    </ImageContent>
    <h3>{name}</h3>
    <p>{character}</p>
  </Wrapper>
);
Actor.propTypes = {
  name: PropTypes.string,
  character: PropTypes.string,
  imageUrl: PropTypes.string,
};
export default Actor;
