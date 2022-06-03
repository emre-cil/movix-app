import React, { useRef } from "react";
import LogoImg from "../../images/Logo.png";
import {
  Wrapper,
  Content,
  InputWrapper,
  Button,
  Input,
  Label,
  Logo,
} from "./Login.styles";

const Login = () => {
  const email = useRef("");
  const password = useRef("");

  return (
    <Wrapper>
      <Content>
        <Logo src={LogoImg} alt="Movix" />
        <form action="submit">
          <InputWrapper>
            <Label htmlFor="email">Email</Label>
            <Input type="email" ref={email} required />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="password">Password</Label>
            <Input type="password" ref={password} required />
          </InputWrapper>
          <Button type="submit">Login</Button>
        </form>
      </Content>
    </Wrapper>
  );
};

export default Login;
