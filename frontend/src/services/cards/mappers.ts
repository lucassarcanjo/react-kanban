import { CardResponse, PostCardRequest, PutCardRequest } from "./types";
import { CardType, StatusType } from "../../types/cards";

export const cardMapper = (card: CardResponse): CardType => {
  return {
    id: card.id,
    title: card.titulo,
    content: card.conteudo,
    status: card.lista as StatusType,
  };
};

export const cardPostRequestMapper = (
  card: Omit<CardType, "id">
): PostCardRequest => {
  return {
    titulo: card.title,
    conteudo: card.content,
    lista: card.status,
  };
};

export const cardPutRequestMapper = (card: CardType): PutCardRequest => ({
  id: card.id,
  titulo: card.title,
  conteudo: card.content,
  lista: card.status,
});
