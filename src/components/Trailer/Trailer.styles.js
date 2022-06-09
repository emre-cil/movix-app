import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: center;
`;

export const IFrame = styled.iframe`
  border-radius: 0.75;
  width: 100%;
  max-width: var(--maxWidth);
  height: 45rem;
  border: none;

  @media (max-width: 768px) {
    height: 20rem;
  }
`;
