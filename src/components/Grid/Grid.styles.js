import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 0 20px;
  h1 {
    color: var(--medGrey);
    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }

    animation: h1Animation 0.5s;
    @keyframes h1Animation {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  grid-gap: 2rem;
`;
