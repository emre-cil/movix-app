import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 720px;
  border-radius: 1rem;
  border-top-right-radius: ${(props) =>
    props.clickable !== false ? "1rem" : "0"};
  border-bottom-right-radius: ${(props) =>
    props.clickable !== false ? "1rem" : "0"};
  object-fit: cover;
  -webkit-box-shadow: 0px 0px 2px 2px rgba(255, 255, 255, 0.05);
  -moz-box-shadow: 0px 0px 2px 2px rgba(255, 255, 255, 0.05);
  box-shadow: 0px 0px 2px 2px rgba(255, 255, 255, 0.05);
  cursor: ${(props) => (props.clickable !== false ? "pointer" : "default")};
  animation: thumbAnimation 0.5s;
  @keyframes thumbAnimation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  :hover {
    opacity: 0.87;
  }
  @media screen and (max-width: 768px) {
    border-top-right-radius: 1rem;
    border-bottom-left-radius: ${(props) =>
      props.clickable !== false ? "1rem" : "0"};
  }
`;
