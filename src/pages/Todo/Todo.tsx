import React, { useState } from "react";
import { BiPlusCircle } from "react-icons/bi";

import * as S from "./style";
import TodoUnit from "../../components/TodoUnit";

function Todo() {
  const [todoList, setTodoList] = useState([]);
  const [isAdd, setIsAdd] = useState(false);

  return (
    <S.ComponentWrapper>
      <h1>To-Do List</h1>
      <S.UnitWrapper>
        <button className="add" onClick={() => setIsAdd(true)}>
          <BiPlusCircle />
          <p>Add</p>
        </button>
        {todoList.map((d) => {
          return <TodoUnit key={d.id} title={d.title} updatedAt={d.updatedAt} />;
        })}
      </S.UnitWrapper>
    </S.ComponentWrapper>
  );
}

export default Todo;
