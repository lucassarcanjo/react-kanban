import { Global } from "@emotion/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";

import { Home } from "./pages/Home";
import { rqOptions } from "./services/constants";
import { GlobalStyles } from "./styles/GlobalStyles";

const queryClient = new QueryClient(rqOptions);

export const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Global styles={GlobalStyles} />
      <Home />
      <Toaster position="bottom-right" />
    </QueryClientProvider>
  );
};
