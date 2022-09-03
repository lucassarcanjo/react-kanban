export type StatusType = "todo" | "doing" | "done";

export interface Card {
  id: string;
  title: string;
  content: string;
  status: StatusType;
}
