import styled from "styled-components";

export const ComponentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin: 10px 0;
  padding: 15px;
  border: 1px solid lightgray;
  border-radius: 10px;
`;

export const ContentTitle = styled.h3`
  margin-bottom: 10px;
`;

export const ContentDate = styled.p`
  font-size: 0.9rem;
  color: lightgray;
`;

export const TodoButton = styled.div`
  & button {
    width: 40px;
    height: 40px;
    margin-left: 10px;
    border: 1px solid black;
    border-radius: 5px;
    font-size: 1.3rem;
    line-height: 20px;
  }
`;
