import React, { useCallback, useState } from "react";

import * as S from "./style";
import Button from "../../components/Button";

interface Todo {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
}

function TodoDetail() {
  const [todoDetail, setTodoDetail] = useState<Todo>({
    title: "hi",
    content: "hello",
    id: "z3FGrcRL55qDCFnP4KRtn",
    createdAt: "2022-07-24T14:15:55.537Z",
    updatedAt: "2022-07-25T14:15:55.537Z",
  });

  const dateFormating = useCallback((date: string) => {
    const [first, last] = date.split("T");

    return `${first} ${last.slice(0, last.length - 5)}`;
  }, []);

  return (
    <S.ComponentWrapper>
      <S.TodoDetailHeader>
        <input type="checkbox" />
        <p>{todoDetail.title}</p>
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
        <Button content="Edit" />
        <Button content="Delete" />
      </S.TodoDetailButtons>
    </S.ComponentWrapper>
  );
}

export default TodoDetail;
