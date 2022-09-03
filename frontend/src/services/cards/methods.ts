import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CardType } from "../../types/cards";
import { api } from "../api";
import { cardMapper, cardPostRequestMapper } from "./mappers";
import { GetCardsResponse } from "./types";

export const useGetCards = () => {
  return useQuery(["cards"], () =>
    api
      .get<GetCardsResponse>("/cards")
      .then((res) => res.data.map((item) => cardMapper(item)))
  );
};

export const usePostCard = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (card: Omit<CardType, "id">) =>
      api.post("/cards", cardPostRequestMapper(card)).then((res) => res.data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["cards"]);
      },
    }
  );
};

export const usePutCard = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (card: CardType) =>
      api
        .post(`/cards/${card.id}`, cardPostRequestMapper(card))
        .then((res) => res.data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["cards"]);
      },
    }
  );
};

export const useDeleteCard = () => {
  const queryClient = useQueryClient();

  return useMutation((cardId: string) => api.delete(`/cards/${cardId}`), {
    onSuccess: () => {
      queryClient.invalidateQueries(["cards"]);
    },
  });
};
