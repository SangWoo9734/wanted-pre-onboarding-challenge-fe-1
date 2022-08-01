import React from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./style";

function Main() {
  const navigate = useNavigate();
  return (
    <S.ComponentWrapper>
      <div>
        <h1>To-Do</h1>
        <p>Check what you have to do!</p>
      </div>
      <div>
        <S.LoginButton onClick={() => navigate("/auth")}>Login</S.LoginButton>
        <S.LoginButton>Join</S.LoginButton>
      </div>
    </S.ComponentWrapper>
  );
}

export default Main;
