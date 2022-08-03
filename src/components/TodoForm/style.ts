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

export const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;

  & button {
    color: lightgray;
    text-decoration: underline;
  }
`;

export const FormInput = styled.div`
  margin-bottom: 15px;

  & p {
    font-size: 1.1rem;
    font-weight: bold;
  }

  & input,
  & textarea {
    width: 100%;
    padding: 10px 15px;
    border: 1px solid lightgray;
    border-radius: 10px;
  }

  & .content {
    min-height: 200px;
    resize: none;
  }
`;
