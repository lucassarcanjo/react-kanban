export type StatusType = "todo" | "doing" | "done";

export interface CardType {
  id: string;
  title: string;
  content: string;
  status: StatusType;
}
