import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./style";
import { getTodos, TodoType } from "../../api/todoApi";
import TodoUnit from "../../components/TodoUnit";
import Button from "../../components/Button";

function Todo() {
  const navigate = useNavigate();
  const [todoList, setTodoList] = useState<TodoType[]>([]);
  const [isAdd, setIsAdd] = useState(false);

  useEffect(() => {
    void getTodos().then((result) => {
      console.log(result);
      if (result.length !== todoList.length) setTodoList(result);
    });
  }, [todoList]);

  return (
    <S.ComponentWrapper>
      <h2>To-Do List</h2>
      <S.UnitWrapper>
        {todoList.length > 0 ? (
          todoList.map((d) => {
            return <TodoUnit key={d.id} id={d.id} title={d.title} updatedAt={d.updatedAt} />;
          })
        ) : (
          <S.NoTodo>No Todo. Add New Todo.</S.NoTodo>
        )}
      </S.UnitWrapper>
      <Button content="Add Todo" onClick={() => navigate("/todo/new")} />
    </S.ComponentWrapper>
  );
}

export default Todo;
