import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/api";
import { JokeResponse } from "../types/Types";

export const useGetJoke = () =>
  useQuery<JokeResponse>({
    queryKey: ["joke"],
    queryFn: () => api("/"),
  });
