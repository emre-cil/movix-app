import React from "react";
import { Wrapper, Content, Logo } from "./Header.styles";
import LogoImg from "../../images/Logo.png";
const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Logo src={LogoImg} alt="Movix" />
        sdf
      </Content>
    </Wrapper>
  );
};

export default Header;
