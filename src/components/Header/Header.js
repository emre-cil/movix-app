import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Content, Logo, LinkButton, Links } from "./Header.styles";
import LogoImg from "../../images/Logo.png";
const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <Logo src={LogoImg} alt="Movix" />
        </Link>
        <Links>
          <Link to="/signin">
            <LinkButton>Sign In</LinkButton>
          </Link>
          <Link to="/signup">
            <LinkButton>Sign Up</LinkButton>
          </Link>
        </Links>
      </Content>
    </Wrapper>
  );
};

export default Header;
