import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  place-items: center;
  height: calc(100vh - 6rem);
`;

export const Content = styled.div`
  width: 24rem;
  height: 29rem;
  background-color: var(--medGrey);
  border-radius: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 500px) {
    width: 85%;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  width: 18rem;

  @media screen and (max-width: 500px) {
    width: 65vw;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 3rem;
  border-radius: 0.5rem;
  background-color: var(--darkGrey);
  color: var(--white);
  font-size: 1.2rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
  margin-top: 2rem;
  opacity: 0.8;
  transition: ease-in-out 0.3s;

  &:hover {
    color: var(--gold);
    opacity: 1;
  }
`;

export const Input = styled.input`
  height: 3rem;
  border-radius: 0.5rem;
  background-color: var(--lightGrey);
  color: var(--medGrey);
  font-size: 1.2rem;
  padding-left: 0.5rem;
  font-weight: bold;
  border: none;
  outline: none;
  &:focus {
    color: var(--gold);
  }
`;

export const Label = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--white);
  margin-bottom: 0.25rem;
  user-select: none;
`;

export const Logo = styled.img`
  width: 18rem;
  height: 5rem;
  border-radius: 0.5rem;
  margin: 2rem 0;
  user-select: none;

  @media screen and (max-width: 500px) {
    width: 65vw;
  }
`;
