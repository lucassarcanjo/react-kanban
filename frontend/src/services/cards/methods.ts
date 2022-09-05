import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { CardType } from "../../types/cards";
import { api } from "../api";
import {
  cardMapper,
  cardPostRequestMapper,
  cardPutRequestMapper,
} from "./mappers";
import { GetCardsResponse, PutCardResponse } from "./types";

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

export const useMoveCard = () => {
  const queryClient = useQueryClient();

  return useMutation(
    (card: CardType) =>
      api
        .put<PutCardResponse>(`/cards/${card.id}`, cardPutRequestMapper(card))
        .then((res) => res.data),
    {
      onMutate: async (card) => {
        await queryClient.cancelQueries(["cards"]);

        const previousCards = queryClient.getQueryData<CardType[]>(["cards"]);

        if (!previousCards) return;

        // edit current card on the list
        const newCards = previousCards.map((item) => {
          if (item.id === card.id) {
            return card;
          }
          return item;
        });

        queryClient.setQueryData<CardType[]>(["cards"], [...newCards]);

        return { previousCards };
      },
      onError: (err, variables, context) => {
        if (context?.previousCards) {
          queryClient.setQueryData<CardType[]>(
            ["cards"],
            context.previousCards
          );
        }
      },
      onSettled: () => {
        queryClient.invalidateQueries(["cards"]);
      },
    }
  );
};
