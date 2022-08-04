import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./style";
import { login, signUp } from "../../api/authApi";
import Button from "../../components/Button";

interface Response {
  status: number;
  token: string;
  message?: string;
  details?: string;
}

function Auth() {
  const [authMode, setAuthMode] = useState<boolean>(true);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [notice, setNotice] = useState<string>("");
  const navigate = useNavigate();

  const authOnclick = async () => {
    const response = authMode ? await login(email, password) : await signUp(email, password);

    if (response.status > 200) {
      setNotice(response.details ? response.details : "잘못된 접근 방식입니다.");
    } else {
      localStorage.setItem("token", response.token);
      navigate("/todo");
    }
  };

  return (
    <S.ComponentWrapper>
      <S.ComponentInnerWrapper>
        <S.NavSector>
          <h2>{authMode ? "Login" : "Create"}</h2>
          <button onClick={() => navigate("/")}>Back</button>
        </S.NavSector>
        <S.InputSector>
          <p>Email</p>
          <input type="text" onChange={(event) => setEmail(event.target.value)} />
        </S.InputSector>
        <S.InputSector>
          <p>Password</p>
          <input type="password" onChange={(event) => setPassword(event.target.value)} />
        </S.InputSector>
        <Button content={authMode ? "Login" : "Create"} onClick={authOnclick} />
        <S.AuthModeToggle onClick={() => setAuthMode(!authMode)}>{`Sign ${
          authMode ? "In" : "Up"
        }`}</S.AuthModeToggle>
      </S.ComponentInnerWrapper>
      {notice && <S.AuthNotice>{notice}</S.AuthNotice>}
    </S.ComponentWrapper>
  );
}

export default Auth;
