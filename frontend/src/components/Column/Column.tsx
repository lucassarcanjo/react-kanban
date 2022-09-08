import { useState } from "react";
import { Droppable } from "react-beautiful-dnd";
import { Plus } from "react-feather";

import { CardType, StatusType } from "../../types/cards";
import { Card } from "../Card";
import {
  AddCardButton,
  CardContainer,
  Container,
  TitleContainer,
} from "./Column.styles";

export interface ColumnProps {
  title: string;
  type: StatusType;
  cards?: CardType[];
  hasAddButton?: boolean;
}

export const Column: React.FC<ColumnProps> = ({
  title,
  type,
  cards,
  hasAddButton = false,
}) => {
  const [isAddingCard, setIsAddingCard] = useState(false);

  const handleAddCard = () => {
    setIsAddingCard(true);
  };

  return (
    <Container>
      <TitleContainer>
        <h3>{title}</h3>
        {cards?.length && <span>{cards.length}</span>}
      </TitleContainer>

      <Droppable droppableId={type}>
        {(provided) => (
          <CardContainer ref={provided.innerRef} {...provided.droppableProps}>
            {cards?.map((card, index) => (
              <Card
                key={card.id}
                index={index}
                id={card.id}
                content={card.content}
                title={card.title}
                type={type}
                mode="view"
              />
            ))}

            {isAddingCard && (
              <Card
                mode="edit"
                type={type}
                onFinish={() => setIsAddingCard(false)}
              />
            )}

            {provided.placeholder}

            {hasAddButton && !isAddingCard && (
              <AddCardButton type="button" onClick={handleAddCard}>
                <Plus width={16} height={16} />
                Nova Tarefa
              </AddCardButton>
            )}
          </CardContainer>
        )}
      </Droppable>
    </Container>
  );
};
