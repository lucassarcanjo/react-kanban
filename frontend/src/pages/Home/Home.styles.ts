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
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 33%;

  align-items: flex-start;
  grid-gap: 18px;
  width: 100%;

  @media (max-width: 1000px) {
    grid-auto-columns: 100%;
    grid-auto-flow: dense;
  }
`;
