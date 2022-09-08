import { useState, KeyboardEventHandler } from "react";
import { StatusType } from "../../types/cards";
import { Editor } from "../Editor";
import { Button, Container, Footer } from "./Card.styles";

export interface CardFormData {
  id?: string;
  title: string;
  content: string;
  status: StatusType;
}

export interface CardEditorProps {
  id?: string;
  type: StatusType;
  title?: string;
  content?: string;
  onFinish?: () => void;
  onSubmit?: (data: CardFormData) => void;
}

export const CardEditor: React.FC<CardEditorProps> = ({
  id,
  title = "",
  content = "",
  type,
  onFinish,
  onSubmit,
}) => {
  const [cardTitle, setCardTitle] = useState(title);
  const [cardContent, setCardContent] = useState(content);

  const handleSubmit = () => {
    onSubmit?.({
      id,
      title: cardTitle,
      content: cardContent,
      status: type,
    });
  };

  const handleKeyShortcuts: KeyboardEventHandler = (e) => {
    if (e.key === "Escape") onFinish?.();

    if (e.key === "Enter" && !e.shiftKey) handleSubmit();
  };

  return (
    <Container>
      <form>
        <Editor
          placeholder="Digite um titulo"
          value={cardTitle}
          onChange={(e) => setCardTitle(e.target.value)}
          onKeyDown={handleKeyShortcuts}
          autoFocus
        />
        <Editor
          placeholder="Digite um conteudo"
          value={cardContent}
          onKeyDown={handleKeyShortcuts}
          onChange={(e) => setCardContent(e.target.value)}
          textArea
          autoSize
        />
        <Footer>
          <Button type="button" onClick={onFinish}>
            Cancelar
          </Button>
          <Button type="button" onClick={handleSubmit} primary>
            Salvar
          </Button>
        </Footer>
      </form>
    </Container>
  );
};
