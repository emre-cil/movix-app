import React from "react";
import {
  Wrapper,
  Content,
  InputWrapper,
  Button,
  Input,
  Label,
  Title,
} from "../Login/Login.styles";
const Register = () => {
  return (
    <Wrapper>
      <Content>
        <Title>Register</Title>
        <form action="submit">
          <div className="nameWrapper">
            <InputWrapper>
              <Label htmlFor="text">First Name</Label>
              <Input type="text" required />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="text">Last Name</Label>
              <Input type="text" required />
            </InputWrapper>
          </div>
          <InputWrapper>
            <Label htmlFor="email">Email</Label>
            <Input type="email" required />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="text">Username</Label>
            <Input type="text" required />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="password">Password</Label>
            <Input type="password" required />
          </InputWrapper>
          <InputWrapper>
            <Label htmlFor="password">Confirm Password</Label>
            <Input type="password" required />
          </InputWrapper>
          <Button type="submit">Sign Up</Button>
        </form>
        <div className="formFooter">
          Already Have an Account?
          <a href="/login">Sign In</a>
        </div>
      </Content>
    </Wrapper>
  );
};

export default Register;
