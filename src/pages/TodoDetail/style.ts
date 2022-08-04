import styled from "styled-components";

export const ComponentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  padding: 20px;
  border: 1px solid lightgray;
  border-radius: 10px;
`;

export const TodoDetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & div {
    display: flex;
    font-size: 1.3rem;
    font-weight: bold;
    text-transform: capitalize;
  }

  & p {
    margin-left: 15px;
  }

  & button {
    color: lightgray;
    text-decoration: underline;
  }
`;
export const TodoDetailDate = styled.div`
  margin: 15px 0;

  & span {
    font-weight: bold;
  }
`;

export const TodoDetailContent = styled.div`
  & .content-title {
    margin-bottom: 5px;
    font-weight: bold;
  }

  & .content-body {
    min-height: 300px;
    padding: 20px;
    background: #00000018;
    border-radius: 10px;
  }
`;

export const TodoDetailButtons = styled.div`
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;
