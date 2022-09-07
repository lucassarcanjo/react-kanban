import { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { useDeleteCard } from "../../services/cards/methods";
import { Container, Description, Title } from "./Card.styles";
import { CardMenu } from "./CardMenu";

export interface CardItemProps {
  id?: string;
  title?: string;
  content?: string;
  index?: number;
  onEdit: () => void;
}

export const CardItem: React.FC<CardItemProps> = ({
  id,
  title,
  content,
  index,
  onEdit,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const removeCardMutation = useDeleteCard();

  const handleRemove = () => {
    if (id === undefined) {
      throw new Error("Card id is undefined");
    }

    removeCardMutation.mutateAsync(id);
  };

  return (
    <Draggable draggableId={id ?? ""} index={index ?? 0}>
      {(provided, snapshot) => (
        <Container
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          isDragging={snapshot.isDragging}
        >
          <Title>{title}</Title>
          <CardMenu
            showButton={isHovering}
            onEdit={onEdit}
            onRemove={handleRemove}
          />
          <Description>{content}</Description>
        </Container>
      )}
    </Draggable>
  );
};
