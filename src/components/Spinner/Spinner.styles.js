import styled from "styled-components";

export const Spinner = styled.div`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 5px solid var(--lightGrey);
  border-top: 5px solid var(--medGrey);
  animation: spinner 0.5s linear infinite;
  margin: 1rem auto;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
