import styled from "@emotion/styled";

export const Container = styled.section`
  background-color: #ccc;
  padding: 8px;
  display: flex;
  flex-direction: column;
  flex-basis: 33%;
  border-radius: 4px;
  color: #000;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const TitleContainer = styled.div`
  padding: 8px 0;
`;

export const AddCardButton = styled.button`
  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
  text-align: center;
`;
