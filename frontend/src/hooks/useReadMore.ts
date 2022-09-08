import { useState } from "react";

export const useReadMore = (content: string, maxLength = 500) => {
  const [readMore, setReadMore] = useState(false);
  const isLargeText = (content?.length ?? 0) > maxLength;

  const controlledContent =
    readMore || !isLargeText ? content : content?.slice(0, maxLength);

  return { isLargeText, readMore, setReadMore, controlledContent };
};
