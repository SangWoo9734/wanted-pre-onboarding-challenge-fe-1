import React, { useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";

import * as S from "./style";
import { deleteTodo } from "../../api/todoApi";
import { Link, useNavigate } from "react-router-dom";

interface Props {
  id: string;
  title: string;
  updatedAt: string;
}

function TodoUnit({ id, title, updatedAt }: Props) {
  const navigate = useNavigate();
  const [showControl, setShowControl] = useState<boolean>(false);

  return (
    <S.ComponentWrapper>
      <S.TodoUnitContent>
        <div>
          <S.TodoUnitControl type="checkbox" />
          <S.ContentTitle onClick={() => navigate(`/todo/${id}`)}>{title}</S.ContentTitle>
          <S.ContentDate>{updatedAt.split("T")[0]}</S.ContentDate>
        </div>
        <button className="edit" onClick={() => setShowControl(!showControl)}>
          <BiDotsHorizontalRounded />
        </button>
      </S.TodoUnitContent>
      <S.TodoAdditionalControl showControl={showControl}>
        <Link className="todo-control" to="/todo/edit" state={{ id }}>
          Edit
        </Link>
        <button className="todo-control" onClick={() => void deleteTodo(id)}>
          Delete
        </button>
      </S.TodoAdditionalControl>
    </S.ComponentWrapper>
  );
}

export default TodoUnit;
