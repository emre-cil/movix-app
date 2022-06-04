import styled from "styled-components";

export const Wrapper = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 50%,
      rgba(0, 0, 0, 0.4) 100%
    ),
    url(${(props) => props.image}), var(--darkGrey);
  background-size: 100%, cover;
  background-position: center;
  height: calc(100vh - 5.2rem);
  position: relative;
  animation: heroImageAnimation 0.75s;

  @keyframes heroImageAnimation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: var(--maxWidth);
  padding: 1rem 0;
  margin: 0 auto;
`;

export const Image = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  cursor: pointer;
`;

export const Name = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: var(--gold);
  @media screen and (max-width: 500px) {
    font-size: 1.5rem;
  }
`;

export const Email = styled.p`
  font-size: 1.5rem;
  color: var(--white);
  margin-bottom: 1rem;
  @media screen and (max-width: 500px) {
    font-size: 1.2rem;
  }
`;

export const Logout = styled.button`
  background-color: var(--gold);
  color: var(--white);
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  cursor: pointer;
  margin-top: 1rem;
  &:hover {
    background-color: var(--white);
    color: var(--gold);
  }
`;
export const ResetPassword = styled.a`
  color: var(--gold);
  text-decoration: none;
  margin-top: 1rem;
  cursor: pointer;
  &:hover {
    color: var(--white);
  }
`;
