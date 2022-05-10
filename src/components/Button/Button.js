import React from "react";
import PropTypes from "prop-types";

import { Wrapper } from "./Button.styles";

const Button = ({ text, onClickHandler }) => (
  <Wrapper type="button" onClick={onClickHandler}>
    {text}
  </Wrapper>
);

Button.propTypes = {
  text: PropTypes.string,
  callback: PropTypes.func,
};
export default Button;
