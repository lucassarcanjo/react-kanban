import { Global } from "@emotion/react";
import { Home } from "./pages/Home";
import { GlobalStyles } from "./styles/GlobalStyles";

export const App = () => {
  return (
    <>
      <Global styles={GlobalStyles} />
      <Home />
    </>
  );
};
