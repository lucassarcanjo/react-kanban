export type StatusType = "ToDo" | "Doing" | "Done";

export interface CardType {
  id: string;
  title: string;
  content: string;
  status: StatusType;
}
