import React from "react";
import { Link } from "react-router-dom";
import { Wrapper, Content, Logo } from "./Header.styles";
import LogoImg from "../../images/Logo.png";
const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <Logo src={LogoImg} alt="Movix" />
        </Link>
      </Content>
    </Wrapper>
  );
};

export default Header;
