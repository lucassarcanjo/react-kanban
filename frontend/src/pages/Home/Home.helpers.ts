import { CardType, StatusType } from "../../types/cards";

export const transformCardData = (data?: CardType[]) => {
  const transformedData = data?.reduce((acc, card) => {
    if (acc[card.status]) {
      acc[card.status].push(card);
    } else {
      acc[card.status] = [card];
    }

    return acc;
  }, {} as Record<StatusType, CardType[]>);

  return transformedData;
};
