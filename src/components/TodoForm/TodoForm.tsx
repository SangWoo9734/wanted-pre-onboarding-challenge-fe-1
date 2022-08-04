import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import * as S from "./style";
import { createdTodo, getTodoById, updateTodo } from "../../api/todoApi";
import Button from "../Button";

interface Path {
  pathname: string;
  state: { id: string };
}

function TodoForm() {
  const { pathname, state } = useLocation() as Path;
  const { id } = state;
  const navigate = useNavigate();
  const [formMode, setFormMode] = useState("new");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (pathname.split("/")[2] === "edit" && state?.id) {
      setFormMode("edit");
      void getTodoById(state.id).then((response) => {
        if (response) {
          setTitle(response.title);
          setContent(response.content);
        }
      });
    } else {
      navigate("/todo");
    }
  }, [state]);

  const createNewTodo = () => {
    void createdTodo(title, content).then(() => navigate("/todo"));
  };

  const editTodo = () => {
    void updateTodo(id, title, content).then(() => navigate("/todo"));
  };

  return (
    <S.ComponentWrapper>
      <S.FormHeader>
        <h2>{`${formMode} To-Do`}</h2>
        <button onClick={() => navigate("/todo")}>Back</button>
      </S.FormHeader>
      <S.FormInput>
        <p>Title</p>
        <input
          type="text"
          className="title"
          placeholder="Title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </S.FormInput>
      <S.FormInput>
        <p>Content</p>
        <textarea
          className="content"
          placeholder="Enter Your Todo Plan"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
      </S.FormInput>
      <Button content="Save" onClick={formMode === "new" ? createNewTodo : editTodo} />
    </S.ComponentWrapper>
  );
}

export default TodoForm;
