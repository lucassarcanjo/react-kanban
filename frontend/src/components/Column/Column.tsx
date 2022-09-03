import { useState } from "react";
import { useScrollToElement } from "../../hooks";
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
  const { elementRef: newCardRef, scrollToElement } =
    useScrollToElement<HTMLDivElement>();

  const handleAddCard = () => {
    setIsAddingCard(true);
    scrollToElement();
  };

  return (
    <Container>
      <TitleContainer>
        <h3>{title}</h3>
      </TitleContainer>

      <CardContainer>
        {cards?.map((card) => (
          <Card
            key={card.id}
            content={card.content}
            title={card.title}
            type={type}
          />
        ))}
        {isAddingCard && (
          <Card
            ref={newCardRef}
            mode="edit"
            type={type}
            onFinish={() => setIsAddingCard(false)}
          />
        )}

        {hasAddButton && !isAddingCard && (
          <AddCardButton type="button" onClick={handleAddCard}>
            Nova Tarefa
          </AddCardButton>
        )}
      </CardContainer>
    </Container>
  );
};
