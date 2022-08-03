import React from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./style";
import Button from "../../components/Button";

function Auth() {
  const navigate = useNavigate();

  return (
    <S.ComponentWrapper>
      <S.NavSector>
        <h2>Login</h2>
        <button onClick={() => navigate("/")}>Back</button>
      </S.NavSector>
      <S.InputSector>
        <p>Email</p>
        <input type="text" />
      </S.InputSector>
      <S.InputSector>
        <p>Password</p>
        <input type="password" />
      </S.InputSector>
      <Button content="Login" />
    </S.ComponentWrapper>
  );
}

export default Auth;
