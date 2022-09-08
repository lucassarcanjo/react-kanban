import styled from "@emotion/styled";

export const Input = styled.input`
  width: 100%;
  font-weight: 700;
  margin-bottom: 4px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  background-color: #fff;
  resize: none;

  ::-webkit-scrollbar {
    background-color: #fff;
    width: 16px;
  }

  ::-webkit-scrollbar-track {
    background-color: #fff;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #babac0;
    border-radius: 16px;
    border: 4px solid #fff;
  }

  ::-webkit-scrollbar-button {
    display: none;
  }
`;
