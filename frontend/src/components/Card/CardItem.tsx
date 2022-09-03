import { Description, Title } from "./Card.styles";

export interface CardItemProps {
  title?: string;
  content?: string;
}

export const CardItem: React.FC<CardItemProps> = ({ title, content }) => {
  return (
    <>
      <Title>{title}</Title>
      <Description>{content}</Description>
    </>
  );
};
