import { Container } from "./Card.styles";
import { StatusType } from "../../types/cards";
import { CardEditor } from "./CardEditor";
import { CardItem } from "./CardItem";
import { forwardRef } from "react";

export interface CardProps {
  type: StatusType;
  title?: string;
  content?: string;
  mode?: "edit" | "view";
  onFinish?: () => void;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ title, content, type, mode = "view", onFinish }, ref) => (
    <Container ref={ref}>
      {mode === "view" && <CardItem title={title} content={content} />}
      {mode === "edit" && (
        <CardEditor
          title={title}
          content={content}
          type={type}
          onFinish={onFinish}
        />
      )}
    </Container>
  )
);
