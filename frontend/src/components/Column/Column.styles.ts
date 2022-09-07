import styled from "@emotion/styled";

export const Container = styled.section`
  background-color: #f5f5f5;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  flex: 0 0 33%;
  border-radius: 8px;
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
  border: none;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.15);

  &:active {
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.05);
  }
`;
