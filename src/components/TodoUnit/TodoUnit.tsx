import React from "react";
import { BiEditAlt, BiTrash } from "react-icons/bi";

import * as S from "./style";

interface Props {
  title: string;
  updatedAt: string;
}

function TodoUnit({ title, updatedAt }: Props) {
  return (
    <S.ComponentWrapper>
      <div>
        <S.ContentTitle>{title}</S.ContentTitle>
        <S.ContentDate>{updatedAt}</S.ContentDate>
      </div>
      <S.TodoButton>
        <button className="edit">
          <BiEditAlt />
        </button>
        <button className="delete">
          <BiTrash />
        </button>
      </S.TodoButton>
    </S.ComponentWrapper>
  );
}

export default TodoUnit;
