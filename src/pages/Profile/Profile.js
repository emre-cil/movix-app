import React, { useContext } from "react";
import user from "../../images/user.png";
import { useNavigate, Link } from "react-router-dom";
import { Wrapper, Content, Image, Name, Email, Logout } from "./Profile.styles";
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
            <Link to="/reset-password">reset-password</Link>
            <Logout onClick={logoutHandler}>Logout</Logout>
          </>
        )}
      </Content>
    </Wrapper>
  );
};

export default Profile;
