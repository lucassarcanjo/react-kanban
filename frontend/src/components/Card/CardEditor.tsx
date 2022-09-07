import { useState } from "react";
import { StatusType } from "../../types/cards";
import { Button, Container, Editor, Footer } from "./Card.styles";

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

  return (
    <Container>
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
          <Button
            type="button"
            onClick={() =>
              onSubmit?.({
                id,
                title: cardTitle,
                content: cardContent,
                status: type,
              })
            }
          >
            Salvar
          </Button>
        </Footer>
      </form>
    </Container>
  );
};
