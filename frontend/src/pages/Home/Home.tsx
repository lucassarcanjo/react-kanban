import { Loading } from "../../components";
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
          <Column
            title="💡 To-Do"
            type="todo"
            cards={kanbanData?.todo}
            hasAddButton
          />
          <Column title="⏳ Doing" type="doing" cards={kanbanData?.doing} />
          <Column title="✅ Done" type="done" cards={kanbanData?.done} />
        </KanbanContainer>
      )}
    </Container>
  );
};
