import React, { useRef, useState, useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
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
} from "../Login/Login.styles";
const ResetPassword = () => {
  let navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const [loading, setloading] = useState(false);
  const password = useRef("");
  const passwordConfirm = useRef("");
  const axios = require("axios").default;

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Wrapper>
        <Content>
          <Title>Reset Password</Title>
          <form action="submit" onSubmit={onSubmitHandler}>
            <InputWrapper>
              <Label htmlFor="password">Password</Label>
              <Input type="password" ref={password} required />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="password">Password Confirm</Label>
              <Input type="password" ref={passwordConfirm} required />
            </InputWrapper>
            {loading ? <Spinner /> : <Button type="submit">Reset</Button>}
          </form>
          <div className="formFooter"></div>
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

export default ResetPassword;
