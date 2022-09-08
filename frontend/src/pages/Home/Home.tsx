import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { Loading, Column } from "~/components";
import { useViewCards, useMoveCard } from "~/services/cards/methods";
import { StatusType } from "~/types/cards";
import { transformCardData } from "./Home.helpers";
import { Container, KanbanContainer, Title } from "./Home.styles";

export const Home = () => {
  const { data, isLoading } = useViewCards();
  const cardMoveMutation = useMoveCard();

  const kanbanData = transformCardData(data);

  const handleDragEnd = (result: DropResult) => {
    // droped nowhere
    if (!result.destination) return;

    const { source, destination } = result;
    const cardDragged = data?.find((item) => item.id === result.draggableId);

    // card not identified
    if (!cardDragged) {
      throw new Error("Card not found");
    }

    // reordering the same list (not supported by backend)
    if (source.droppableId === destination.droppableId) return;

    // moving card to a different column
    cardMoveMutation.mutate({
      ...cardDragged,
      status: destination.droppableId as StatusType,
    });
  };

  return (
    <Container>
      <Title>Kanban Board</Title>

      {isLoading && <Loading />}
      {data && (
        <DragDropContext onDragEnd={handleDragEnd}>
          <KanbanContainer>
            <Column
              title="💡 To Do"
              type="ToDo"
              cards={kanbanData?.ToDo}
              hasAddButton
            />
            <Column title="⏳ Doing" type="Doing" cards={kanbanData?.Doing} />
            <Column title="✅ Done" type="Done" cards={kanbanData?.Done} />
          </KanbanContainer>
        </DragDropContext>
      )}
    </Container>
  );
};
