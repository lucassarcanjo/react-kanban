import { Container } from "./Card.styles";

export interface CardProps {
  content: string;
}

export const Card: React.FC<CardProps> = ({ content }) => {
  return <Container>{content}</Container>;
};
