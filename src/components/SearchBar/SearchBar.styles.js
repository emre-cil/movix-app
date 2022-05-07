import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100px;
  background-color: var(--darkGrey);
  padding: 0 20px;
`;
export const Content = styled.div`
  width: 100%;
  height: 55px;
  margin: 0 auto;
  color: var(--white);
  position: relative;
  max-width: 1240px;
  background-color: var(--medGrey);
  border-radius: 1.75rem;

  img {
    position: absolute;
    left: 15px;
    top: 14px;
    width: 30px;
  }
  input {
    position: absolute;
    left: 0;
    width: 95%;
    height: 40px;
    margin: 0.5rem 0;
    padding-left: 4rem;
    font-size: var(--fontBig);
    background-color: transparent;
    color: var(--white);
    border: 0;

    :focus {
      outline: none;
    }
  }

  @media screen and (max-width: 768px) {
    input {
      font-size: var(--fontMed);
    }
  }
`;
