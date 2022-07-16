import styled from 'styled-components';
import { IMAGE_BASE_URL, BACKDROP_SIZE } from '../../config';

export const Wrapper = styled.div`
  background: ${({ backdrop }) =>
    backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : '#000'};
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation: movieInfoAnimation 1s;
  @keyframes movieInfoAnimation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
export const Content = styled.div`
  max-width: var(--maxWidth);
  display: flex;
  margin: 0 auto;
  border-radius: 20px;
  background: rgba(0, 0, 0, 0.7);

  @media screen and (max-width: 768px) {
    display: block;
    max-height: none;
  }
`;
export const Text = styled.div`
  width: 100%;
  padding: 20px 40px;
  color: var(--white);
  overflow: hidden;
  .rating-directors {
    display: flex;
    justify-content: flex-start;
  }
  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 45px;
    background: var(--white);
    color: #000;
    font-weight: 800;
    border-radius: 50%;
    margin: 0;
  }
  .director {
    margin: 0 0 0 40px;
    p {
      margin: 0;
    }
  }
  h1 {
    font-size: 2.2rem;
    @media screen and (max-width: 768px) {
      font-size: 1.5rem;
    }
  }
`;
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 20px 0;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  svg {
    font-size: 1.5rem;
    cursor: pointer;
  }
  button {
    background: var(--gold);
    font-weight: 800;
    padding: 0.5rem 0.75rem;
    display: flex;
    align-items: center;
    outline: none;
    border: none;
    border-radius: 5px;
    margin-left: 1rem;
    font-size: 1.1rem;
    cursor: pointer;

    svg {
      margin-left: 4px;
      font-size: 1.5rem;
    }
  }
  div {
    display: flex;
    align-items: center;
  }
`;
