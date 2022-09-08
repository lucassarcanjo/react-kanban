import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    height: 300px;
    width: clamp(300px, 33vw, 400px);
  }

  h3 {
    margin: 0;
    font-size: 16px;
    font-style: italic;
  }
`;
