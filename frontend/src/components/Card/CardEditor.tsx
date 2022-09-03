import { useState } from "react";
import { usePostCard } from "../../services/cards/methods";
import { StatusType } from "../../types/cards";
import { Button, Editor, Footer } from "./Card.styles";

export interface CardEditorProps {
  type: StatusType;
  title?: string;
  content?: string;
  onFinish?: () => void;
}

export const CardEditor: React.FC<CardEditorProps> = ({
  title = "",
  content = "",
  type,
  onFinish,
}) => {
  const [cardTitle, setCardTitle] = useState(title);
  const [cardContent, setCardContent] = useState(content);

  const createCard = usePostCard();

  const handleSubmit = () => {
    createCard.mutateAsync({
      title: cardTitle,
      content: cardContent,
      status: type,
    });

    onFinish?.();
  };

  return (
    <form>
      <Editor
        placeholder="Digite um titulo"
        value={cardTitle}
        onChange={(e) => setCardTitle(e.target.value)}
        autoFocus
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
  );
};
