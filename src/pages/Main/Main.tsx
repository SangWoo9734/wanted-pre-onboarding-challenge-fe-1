import React from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./style";
import Button from "../../components/Button";

function Main() {
  const navigate = useNavigate();
  return (
    <S.ComponentWrapper>
      <div>
        <h2>To-Do</h2>
        <p>Check what you have to do!</p>
      </div>
      <div>
        <Button content="Login" onClick={() => navigate("/auth")} />
        <Button content="Join" />
      </div>
    </S.ComponentWrapper>
  );
}

export default Main;
