import { Loading } from "../../components";
import { Card } from "../../components/Card";
import { Column } from "../../components/Column";
import { useGetCards } from "../../services/cards/methods";
import { transformCardData } from "./Home.helpers";
import { Container, KanbanContainer, Title } from "./Home.styles";

export const Home = () => {
  const { data, isLoading } = useGetCards();

  const kanbanData = transformCardData(data);

  return (
    <Container>
      <Title>Kanban Board</Title>

      {isLoading && <Loading />}
      {data && (
        <KanbanContainer>
          <Column title="💡 To-Do">
            {kanbanData?.todo?.map((card) => (
              <Card key={card.id} content={card.content} />
            ))}
          </Column>
          <Column title="⏳ Doing">
            {kanbanData?.doing?.map((card) => (
              <Card key={card.id} content={card.content} />
            ))}
          </Column>
          <Column title="✅ Done">
            {kanbanData?.doing?.map((card) => (
              <Card key={card.id} content={card.content} />
            ))}
          </Column>
        </KanbanContainer>
      )}
    </Container>
  );
};
