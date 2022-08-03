import React from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./style";
import Button from "../Button";

function TodoForm() {
  const navigate = useNavigate();
  return (
    <S.ComponentWrapper>
      <S.FormHeader>
        <h2>New To-Do</h2>
        <button onClick={() => navigate("/todo")}>Back</button>
      </S.FormHeader>
      <S.FormInput>
        <p>Title</p>
        <input type="text" className="title" placeholder="Title" />
      </S.FormInput>
      <S.FormInput>
        <p>Content</p>
        <textarea className="content" placeholder="Enter Your Todo Plan" />
      </S.FormInput>
      <Button content="Save" />
    </S.ComponentWrapper>
  );
}

export default TodoForm;
