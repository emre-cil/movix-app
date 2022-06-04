import React, { useContext } from "react";
import user from "../../images/user.png";
import { useNavigate } from "react-router-dom";
import {
  Wrapper,
  Content,
  Image,
  Name,
  Email,
  ResetPassword,
  Logout,
} from "./Profile.styles";
import AuthContext from "../../store/auth-context";

const Profile = () => {
  let navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const logoutHandler = () => {
    navigate("/", { replace: true });
    authCtx.logout();
  };
  return (
    <Wrapper>
      <Content>
        <Image src={user} alt="user" />
        {authCtx.isLoggedIn && (
          <>
            <Name>{authCtx.userName}</Name>
            <Email>{authCtx.email}</Email>
            <ResetPassword>reset-password</ResetPassword>
            <Logout onClick={logoutHandler}>Logout</Logout>
          </>
        )}
      </Content>
    </Wrapper>
  );
};

export default Profile;
