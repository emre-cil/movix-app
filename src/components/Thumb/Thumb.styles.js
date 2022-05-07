import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 720px;
  border-radius: 1rem;
  object-fit: cover;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  cursor: pointer;
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
