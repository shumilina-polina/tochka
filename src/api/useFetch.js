import useSWR from "swr";
import { fetcher } from "./api";

export function useFetch(endpoint) {
  const { data, error, isValidating } = useSWR(endpoint, fetcher, {
    revalidateOnFocus: false, // не обновлять при возврате на вкладку
  });

  return {
    data,
    isLoading: !error && !data,
    isError: !!error,
    isValidating,
  };
}
