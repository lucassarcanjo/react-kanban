import { useState } from "react";

import { useCreateCard, useEditCard } from "~/services/cards/methods";
import { StatusType } from "~/types/cards";
import { CardEditor, CardFormData } from "./CardEditor";
import { CardItem } from "./CardItem";

export interface CardProps {
  id?: string;
  title?: string;
  content?: string;
  type: StatusType;
  index?: number;
  mode?: "view" | "edit";
  onFinish?: () => void;
}

export const Card: React.FC<CardProps> = ({
  mode: initialMode,
  onFinish,
  ...props
}) => {
  const [mode, setMode] = useState(initialMode);

  const createCard = useCreateCard();
  const editCard = useEditCard();

  const handleSubmit = async (data: CardFormData) => {
    if (data.id) {
      await editCard.mutateAsync({
        id: data.id,
        title: data.title,
        content: data.content,
        status: data.status,
      });

      setMode("view");
    } else {
      await createCard.mutateAsync({
        title: data.title,
        content: data.content,
        status: data.status,
      });

      onFinish?.();
    }
  };

  return (
    <>
      {mode === "view" && (
        <CardItem {...props} onEdit={() => setMode("edit")} />
      )}
      {mode === "edit" && (
        <CardEditor
          {...props}
          onSubmit={handleSubmit}
          onFinish={onFinish ?? (() => setMode("view"))}
        />
      )}
    </>
  );
};
