import React, { useRef, useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import AuthContext from "../../store/auth-context";
import {
  Wrapper,
  Content,
  InputWrapper,
  Button,
  Input,
  Label,
  Title,
} from "./Login.styles";

const Login = () => {
  let navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const [loading, setloading] = useState(false);
  const email = useRef("");
  const password = useRef("");
  const axios = require("axios").default;

  const onSubmitHandler = (e) => {
    e.preventDefault();
    setloading(true);
    axios
      .post("https://movixapi1.azurewebsites.net/api/Account/authenticate", {
        email: email.current.value.trim(),
        password: password.current.value.trim(),
      })
      .then((response) => {
        if (response.data.data.jwToken) {
          const expirationTime = new Date(new Date().getTime() + 6000 * 1000);
          authCtx.login(
            response.data.data.jwToken,
            expirationTime.toISOString(),
            response.data.data.userName,
            response.data.data.email
          );
        }
        setloading(false);
        navigate("/", { replace: true });
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
          <Title>Login</Title>
          <form action="submit" onSubmit={onSubmitHandler}>
            <InputWrapper>
              <Label htmlFor="email">Email</Label>
              <Input type="email" ref={email} required />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="password">Password</Label>
              <Input type="password" ref={password} required />
            </InputWrapper>
            {loading ? <Spinner /> : <Button type="submit">Sign In</Button>}
          </form>
          <div className="formFooter">
            New Here?
            <Link to="/register">Create an Account</Link>
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

export default Login;
