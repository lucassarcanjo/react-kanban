import { Global } from "@emotion/react";
import { AppContainer } from "./App.styles";
import { Home } from "./pages/Home";
import { GlobalStyles } from "./styles/GlobalStyles";

export const App = () => {
  return (
    <AppContainer>
      <Global styles={GlobalStyles} />
      <Home />
    </AppContainer>
  );
};
