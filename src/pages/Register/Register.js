import React, { useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import { useNavigate } from "react-router-dom";
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
  let navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const axios = require("axios").default;
  const firstName = useRef("");
  const lastName = useRef("");
  const email = useRef("");
  const userName = useRef("");
  const password = useRef("");
  const confirmPassword = useRef("");

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

  //check upper case
  const checkUppercase = (str) => {
    return /[A-Z]/.test(str);
  };
  //check special characters
  const checkSpecialCharacters = (str) => {
    return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(str);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (password.current.value.length < 6) {
      error("Password must be at least 6 characters");
      return;
    }
    if (userName.current.value.length < 6) {
      error("Username must be at least 6 characters");
      return;
    }
    if (password.current.value !== confirmPassword.current.value) {
      toast.error("Passwords do not match");
      return;
    }
    if (!checkUppercase(userName.current.value)) {
      toast.error("Username must contain at least one uppercase letter");
      return;
    }
    if (!checkUppercase(password.current.value)) {
      toast.error("Password must contain at least one uppercase letter");
      return;
    }
    if (!checkSpecialCharacters(password.current.value)) {
      toast.error("Password must contain at least one special character");
      return;
    }
    setloading(true);

    axios
      .post("https://movixapi1.azurewebsites.net/api/Account/register", {
        firstName: firstName.current.value.trim(),
        lastName: lastName.current.value.trim(),
        email: email.current.value.trim(),
        userName: userName.current.value.trim(),
        password: password.current.value.trim(),
        confirmPassword: confirmPassword.current.value.trim(),
      })
      .then((response) => {
        if (response.status === 200) {
          axios
            .get(response.data.message)
            .then((response) => {})
            .catch((error) => {
              toast.error(error.response.data.message);
            });

          setloading(false);
          navigate("/login", { replace: true });
        }
      })
      .catch((error) => {
        toast.error(error.response.data.Message);
        setloading(false);
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
            {loading ? <Spinner /> : <Button type="submit">Sign Up</Button>}
          </form>
          <div className="formFooter">
            Already Have an Account?
            <Link to="/login">Sign In</Link>
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
