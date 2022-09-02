import { Card } from "../../components/Card";
import { Column } from "../../components/Column";
import { Container, KanbanContainer, Title } from "./Home.styles";

export const Home = () => {
  return (
    <Container>
      <Title>Kanban Board</Title>

      <KanbanContainer>
        <Column title="💡 To-Do">
          <Card content="Card 1 Lorem Card 1 Lorem Card 1 Lorem Card 1 Lorem" />
          <Card content="Card 2" />
          <Card content="Card 3" />
        </Column>
        <Column title="⏳ Doing">
          <Card content="Card 1" />
          <Card content="Card 2" />
          <Card content="Card 3" />
        </Column>
        <Column title="✅ Done">
          <Card content="Card 1" />
          <Card content="Card 2" />
          <Card content="Card 3" />
        </Column>
      </KanbanContainer>
    </Container>
  );
};
