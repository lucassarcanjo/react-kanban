import { Card, StatusType } from "../../types/cards";

export const transformCardData = (data?: Card[]) => {
  const transformedData = data?.reduce((acc, card) => {
    if (acc[card.status]) {
      acc[card.status].push(card);
    } else {
      acc[card.status] = [card];
    }

    return acc;
  }, {} as Record<StatusType, Card[]>);

  return transformedData;
};
