import { StatusType } from "../../types/cards";
import { CardEditor } from "./CardEditor";
import { CardItem } from "./CardItem";

export type CardProps =
  | {
      type: StatusType;
      title?: string;
      content?: string;
      mode: "edit";
      onFinish?: () => void;
    }
  | {
      id: string;
      type: StatusType;
      title: string;
      content: string;
      index: number;
      mode: "view";
    };

export const Card: React.FC<CardProps> = (props) => (
  <>
    {props.mode === "view" && <CardItem {...props} />}
    {props.mode === "edit" && <CardEditor {...props} />}
  </>
);
