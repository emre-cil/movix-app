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
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
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
`;
