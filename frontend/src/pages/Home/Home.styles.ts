import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  padding: 48px;

  @media (max-width: 1000px) {
    padding: 16px;
  }
`;

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 24px;
`;

export const KanbanContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  gap: 18px;
  align-items: flex-start;

  @media (max-width: 1000px) {
    flex-wrap: wrap;
  }
`;
