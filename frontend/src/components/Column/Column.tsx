import {
  AddCardButton,
  CardContainer,
  Container,
  TitleContainer,
} from "./Column.styles";

export interface ColumnProps {
  title: string;
  children?: React.ReactNode | React.ReactNode[];
}

export const Column: React.FC<ColumnProps> = ({ title, children }) => {
  return (
    <Container>
      <TitleContainer>
        <h3>{title}</h3>
      </TitleContainer>

      <CardContainer>
        {children}
        <AddCardButton>Add Task</AddCardButton>
      </CardContainer>
    </Container>
  );
};
