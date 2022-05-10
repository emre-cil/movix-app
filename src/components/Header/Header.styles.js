import styled from "styled-components";

export const Wrapper = styled.div`
  background: var(--darkGrey);
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 1rem 0;
  margin: 0 auto;
`;

export const Logo = styled.img`
  width: 150px;
  cursor: pointer;
  @media screen and (max-width: 500px) {
    width: 100px;
  }
`;
