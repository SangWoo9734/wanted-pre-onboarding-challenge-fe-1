import React, { useCallback, useEffect, useState } from "react";

import * as S from "./style";
import { getTodoById, TodoType, deleteTodo } from "../../api/todoApi";
import Button from "../../components/Button";
import { Link, useNavigate, useParams } from "react-router-dom";

function TodoDetail() {
  const [todoDetail, setTodoDetail] = useState<TodoType>();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      void getTodoById(id).then((response) => {
        if (response) setTodoDetail(response);
        else {
          navigate("/todo");
        }
      });
    } else {
      navigate("/todo");
    }
  }, []);

  const dateFormating = useCallback((date: string) => {
    const [first, last] = date.split("T");

    return `${first} ${last.slice(0, last.length - 5)}`;
  }, []);

  const deleteAction = (id: string) => {
    void deleteTodo(id).then(() => navigate("/todo"));
  };

  return (
    <S.ComponentWrapper>
      {todoDetail && (
        <>
          <S.TodoDetailHeader>
            <div>
              <input type="checkbox" />
              <p>{todoDetail.title}</p>
            </div>
            <button onClick={() => navigate("/todo")}>Back</button>
          </S.TodoDetailHeader>
          <S.TodoDetailDate>
            <p>
              <span>Created At:</span> {dateFormating(todoDetail.createdAt)}
            </p>
            <p>
              <span>Updated At:</span> {dateFormating(todoDetail.updatedAt)}
            </p>
          </S.TodoDetailDate>
          <S.TodoDetailContent>
            <p className="content-title">Content</p>
            <p className="content-body">{todoDetail.content}</p>
          </S.TodoDetailContent>
          <S.TodoDetailButtons>
            <Link to="/todo/edit" state={{ id }}>
              <Button content="Edit" />
            </Link>
            <Button content="Delete" onClick={() => deleteAction(todoDetail.id)} />
          </S.TodoDetailButtons>
        </>
      )}
    </S.ComponentWrapper>
  );
}

export default TodoDetail;
