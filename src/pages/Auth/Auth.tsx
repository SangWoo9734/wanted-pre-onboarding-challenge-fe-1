import React from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./style";

function Auth() {
  const navigate = useNavigate();

  return (
    <S.ComponentWrapper>
      <h1>Login</h1>
      <S.InputSector>
        <p>Email</p>
        <input type="text" />
      </S.InputSector>
      <S.InputSector>
        <p>Password</p>
        <input type="password" />
      </S.InputSector>
      <S.Button>Login</S.Button>
      <S.Button onClick={() => navigate("/")}>Back</S.Button>
    </S.ComponentWrapper>
  );
}

export default Auth;
