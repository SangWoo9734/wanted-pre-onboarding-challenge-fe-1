import styled from "styled-components";

export const ComponentWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 0 20px;

  & h2 {
    margin-bottom: 15px;
  }
`;

export const UnitWrapper = styled.div`
  width: 100%;
  max-height: 500px;

  border-radius: 10px;
  overflow: auto;

  & .add {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 10px 0;
    padding: 10px;
    border-radius: 10px;
    font-size: 1.2rem;
    background: #1363df;
    color: white;

    & p {
      margin-left: 10px;
    }
  }
`;

export const NoTodo = styled.div`
  background: #00000018;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
`;
