import styled from "styled-components";
export const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--medGrey);
  color: var(--white);
`;
export const Content = styled.div`
  width: 100%;
  max-width: var(--maxWidth);
  padding: 0 20px;
  display: flex;

  span {
    font-size: var(--fontMed);
    color: var(--white);
    padding-right: 10px;
    @media screen and (max-width: 768px) {
      font-size: var(--fontSmall);
    }
  }
`;
