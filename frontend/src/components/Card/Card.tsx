import { useState } from "react";
import { usePostCard } from "../../services/cards/methods";
import { StatusType } from "../../types/cards";
import {
  Button,
  Container,
  Description,
  Editor,
  Footer,
  Title,
} from "./Card.styles";

export interface CardProps {
  type: StatusType;
  title?: string;
  content?: string;
  mode?: "edit" | "view";
  onFinish?: () => void;
}

export const Card: React.FC<CardProps> = ({
  title,
  content,
  type,
  mode = "view",
  onFinish,
}) => {
  const [cardTitle, setCardTitle] = useState("");
  const [cardContent, setCardContent] = useState("");

  const createCard = usePostCard();

  const handleSubmit = () => {
    createCard.mutateAsync({
      title: cardTitle,
      content: cardContent,
      status: type,
    });

    onFinish?.();
  };

  if (mode === "edit") {
    return (
      <Container>
        <form>
          <Editor
            placeholder="Digite um titulo"
            value={cardTitle}
            onChange={(e) => setCardTitle(e.target.value)}
          />
          <Editor
            placeholder="Digite um conteudo"
            value={cardContent}
            onChange={(e) => setCardContent(e.target.value)}
          />
          <Footer>
            <Button type="button" onClick={onFinish}>
              Cancelar
            </Button>
            <Button type="button" onClick={handleSubmit}>
              Salvar
            </Button>
          </Footer>
        </form>
      </Container>
    );
  }

  return (
    <Container>
      <Title>{title}</Title>
      <Description>{content}</Description>
    </Container>
  );
};
