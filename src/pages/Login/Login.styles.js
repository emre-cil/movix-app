import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  place-items: center;
  padding: 1rem 0;
  height: calc(100vh - 5.25rem);
  animation: animate 0.75s;

  @keyframes animate {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  width: 26rem;
  background-color: var(--medGrey);
  border-radius: 0.5rem;
  padding: 1.25rem 2.5rem 1rem 2.5rem;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 500px) {
    width: 85%;
    padding: 0.5rem 1.5rem 2rem 1.5rem;
  }
  .formFooter {
    margin-top: 0.75rem;
    font-size: 0.8rem;
    text-align: center;
    color: var(--white);
    a {
      text-decoration: underline;
      margin-left: 0.25rem;
      color: var(--gold);
      -webkit-tap-highlight-color: transparent;
    }
  }
  .nameWrapper {
    display: flex;
    input {
      width: 100%;
    }
    div + div {
      margin-left: 1.25rem;
    }
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.75rem;
`;

export const Button = styled.button`
  width: 100%;
  height: 2.5rem;
  -webkit-tap-highlight-color: transparent;
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
  height: 2.5rem;
  border-radius: 0.5rem;
  background-color: gray;
  color: var(--medGrey);
  font-size: 1.1rem;
  padding-left: 0.5rem;
  font-weight: bold;
  border: none;
  outline: none;
  &:focus {
    color: rgb(245, 205, 0);
  }
`;

export const Label = styled.label`
  font-weight: bold;
  color: var(--white);
  margin-bottom: 0.15rem;
  user-select: none;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--white);
  margin: 0;
  margin-bottom: 0.5rem;
  user-select: none;
  @media screen and (max-width: 500px) {
    font-size: 2rem;
  }
`;
