import styled from 'styled-components';
export const Wrapper = styled.div`
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  border-radius: ${(props) => (props.clickable ? '16px' : '20px 0 0 20px')};
  @media screen and (max-width: 768px) {
    border-top-right-radius: 20px;
    border-bottom-left-radius: ${(props) => (props.clickable ? '16px' : '0')};
  }
  svg {
    font-size: 1.65rem;
    color: #fff;
    z-index: 99;
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }
  a {
    text-decoration: none;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 720px;
  object-fit: cover;
  transition: transform 0.3s ease;
  cursor: ${(props) => (props.clickable !== false ? 'pointer' : 'default')};
  animation: thumbAnimation 0.5s;
  @keyframes thumbAnimation {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  &:hover {
    transform: scale(1.15);
  }
`;
export const NoImageText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 1rem;
  color: #fff;
  background: #000;
  transition: transform 0.3s ease;
  font-size: 1.5rem;
  &:hover {
    transform: scale(1.15);
  }
`;
