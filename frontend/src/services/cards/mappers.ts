import { CardResponse } from "./types";
import { Card, StatusType } from "../../types/cards";

export const cardMapper = (card: CardResponse): Card => {
  return {
    id: card.id,
    title: card.titulo,
    content: card.conteudo,
    status: card.lista as StatusType,
  };
};

export const cardPostMapper = (card: Card): CardResponse => {
  return {
    id: card.id,
    titulo: card.title,
    conteudo: card.content,
    lista: card.status,
  };
};
