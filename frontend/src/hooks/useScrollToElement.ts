import { useRef } from "react";

// TODO: add docs
export const useScrollToElement = <T extends HTMLElement>() => {
  const elementRef = useRef<T>(null);

  const scrollToElement = () => {
    if (!elementRef.current) {
      return;
    }

    elementRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return { elementRef, scrollToElement };
};
