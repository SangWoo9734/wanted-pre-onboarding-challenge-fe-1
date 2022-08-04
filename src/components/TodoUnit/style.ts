import styled from "styled-components";

export const ComponentWrapper = styled.div`
  margin: 10px 0;
  border: 1px solid lightgray;
  border-radius: 5px;
`;

export const TodoUnitContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  & div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & button {
    font-size: 1.2rem;
  }
`;

export const TodoUnitControl = styled.input``;

export const ContentTitle = styled.p`
  width: 150px;
  margin-left: 10px;
  font-size: 1.1rem;
  font-weight: bold;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  &:hover {
    cursor: pointer;
  }
`;

export const ContentDate = styled.p`
  margin-left: 10px;
  font-size: 0.9rem;
  color: lightgray;
`;

export const TodoAdditionalControl = styled.div<{ showControl: boolean }>`
  height: ${({ showControl }) => (showControl ? "30px" : "0px")};
  transition: 0.2s all linear;
  overflow: hidden;

  & .todo-control {
    padding: 5px 0px;
    width: 50%;
    height: 100%;
    text-align: center;
    display: inline-block;
    font-size: 1rem;
  }

  & .todo-control:hover {
    background: #3d96ff4f;
  }

  & :first-child {
    border-radius: 0 0 0 5px;
  }

  & :last-child {
    border-radius: 0 0 5px 0;
  }
`;
