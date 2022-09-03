import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Card } from "../../types/cards";
import { api } from "../api";
import { cardMapper, cardPostMapper } from "./mappers";
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
    (card: Card) =>
      api.post("/cards", cardPostMapper(card)).then((res) => res.data),
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
    (card: Card) =>
      api
        .post(`/cards/${card.id}`, cardPostMapper(card))
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

  return useMutation((card: Card) => api.delete(`/cards/${card.id}`), {
    onSuccess: () => {
      queryClient.invalidateQueries(["cards"]);
    },
  });
};
