import { Draggable } from "react-beautiful-dnd";
import { Container, Description, Title } from "./Card.styles";

export interface CardItemProps {
  id: string;
  title: string;
  content: string;
  index: number;
}

export const CardItem: React.FC<CardItemProps> = ({
  id,
  title,
  content,
  index,
}) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Title>{title}</Title>
          <Description>{content}</Description>
        </Container>
      )}
    </Draggable>
  );
};
