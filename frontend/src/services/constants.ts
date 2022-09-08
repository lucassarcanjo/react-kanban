import { QueryCache, QueryClientConfig } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const rqOptions: QueryClientConfig = {
  defaultOptions: {
    mutations: {
      onError: (error) => {
        toast.error(`Erro com o servidor: ${error}`);
      },
    },
  },
  queryCache: new QueryCache({
    onError: () => {
      toast.error(`Erro ao tentar conectar com o servidor`);
    },
  }),
};
