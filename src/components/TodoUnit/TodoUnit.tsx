import React, { useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";

import * as S from "./style";

interface Props {
  title: string;
  updatedAt: string;
}

function TodoUnit({ title, updatedAt }: Props) {
  const [showControl, setShowControl] = useState<boolean>(false);
  const [isClear, setIsClear] = useState();

  return (
    <S.ComponentWrapper>
      <S.TodoUnitContent>
        <div>
          <S.TodoUnitControl type="checkbox" />
          <S.ContentTitle>{title}</S.ContentTitle>
          <S.ContentDate>{updatedAt.split("T")[0]}</S.ContentDate>
        </div>
        <button className="edit" onClick={() => setShowControl(!showControl)}>
          <BiDotsHorizontalRounded />
        </button>
      </S.TodoUnitContent>
      <S.TodoAdditionalControl showControl={showControl}>
        <button>Edit</button>
        <button>Delete</button>
      </S.TodoAdditionalControl>
    </S.ComponentWrapper>
  );
}

export default TodoUnit;
