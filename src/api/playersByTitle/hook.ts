import { useEffect, useState } from "react";
import { getTitledPlayers } from "./fetch";
import type { Title } from "../../types/Title";

// TODO: Use React Query
export function useTitledPlayers(title: Title) {
  const [data, setData] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    getTitledPlayers(title)
      .then(setData)
      .catch((err) => {
        console.error(err);
        setError(err.message || "Unkown Error");
      })
      .finally(() => setIsLoading(false));
  }, [title]);

  return { data, isLoading, error };
}
