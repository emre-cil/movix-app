import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  place-items: center;
  height: calc(100vh - 6rem);
`;

export const Content = styled.div`
  width: 28rem;
  background-color: var(--medGrey);
  border-radius: 0.5rem;
  padding: 1rem 3rem 2rem 3rem;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 500px) {
    width: 85%;
    padding: 0.5rem 1.5rem 2rem 1.5rem;
  }
  .formFooter {
    margin-top: 1rem;
    font-size: 0.8rem;
    text-align: center;
    color: var(--white);
    a {
      text-decoration: underline;
      margin-left: 0.25rem;
      color: var(--gold);
    }
  }
  .nameWrapper {
    display: flex;
    input {
      width: 100%;
    }
    div + div {
      margin-left: 1rem;
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
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
    color: rgb(245, 205, 0);
  }
`;

export const Label = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--white);
  margin-bottom: 0.25rem;
  user-select: none;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--white);
  margin-bottom: 1.5rem;
  user-select: none;
  @media screen and (max-width: 500px) {
    font-size: 2rem;
  }
`;
