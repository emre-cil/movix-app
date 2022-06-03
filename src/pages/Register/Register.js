import React, { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
  const error = (errorText) =>
    toast.error(errorText, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const axios = require("axios").default;
  const firstName = useRef("");
  const lastName = useRef("");
  const email = useRef("");
  const userName = useRef("");
  const password = useRef("");
  const confirmPassword = useRef("");
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (password.current.value !== confirmPassword.current.value) {
      error("Passwords do not match");
      return;
    }

    console.table(
      firstName.current.value,
      lastName.current.value,
      email.current.value,
      userName.current.value,
      password.current.value,
      confirmPassword.current.value
    );

    axios
      .post("https://movixapi1.azurewebsites.net/api/Account/register", {
        firstName: firstName.current.value.trim(),
        lastName: lastName.current.value.trim(),
        email: email.current.value.trim(),
        userName: userName.current.value.trim(),
        password: password.current.value.trim(),
        confirmPassword: confirmPassword.current.value.trim(),
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <Wrapper>
        <Content>
          <Title>Register</Title>
          <form action="submit" onSubmit={onSubmitHandler}>
            <div className="nameWrapper">
              <InputWrapper>
                <Label htmlFor="text">First Name</Label>
                <Input type="text" required ref={firstName} />
              </InputWrapper>
              <InputWrapper>
                <Label htmlFor="text">Last Name</Label>
                <Input type="text" required ref={lastName} />
              </InputWrapper>
            </div>
            <InputWrapper>
              <Label htmlFor="email">Email</Label>
              <Input type="email" required ref={email} />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="text">Username</Label>
              <Input type="text" required ref={userName} />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="password">Password</Label>
              <Input type="password" required ref={password} />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="password">Confirm Password</Label>
              <Input type="password" required ref={confirmPassword} />
            </InputWrapper>
            <Button type="submit">Sign Up</Button>
          </form>
          <div className="formFooter">
            Already Have an Account?
            <a href="/login">Sign In</a>
          </div>
        </Content>
      </Wrapper>

      <ToastContainer
        position="top-center"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Register;
