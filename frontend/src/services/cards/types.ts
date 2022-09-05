export type GetCardsResponse = CardResponse[];

export type PostCardRequest = Omit<CardResponse, "id">;

export type PutCardRequest = CardResponse;

export type PutCardResponse = CardResponse;

export interface CardResponse {
  id: string;
  titulo: string;
  conteudo: string;
  lista: string;
}
