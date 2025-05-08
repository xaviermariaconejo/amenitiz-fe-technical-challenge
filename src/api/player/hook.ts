import { useEffect, useState } from "react";
import { getPlayer } from "./fetch";
import type { Player } from "../../types/Player";

// TODO: Use React Query
export function usePlayer(username: string) {
  const [data, setData] = useState<Player>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setIsLoading(true);
    getPlayer(username)
      .then(setData)
      .catch((err) => {
        console.error(err);
        setError(err.message || "Unkown Error");
      })
      .finally(() => setIsLoading(false));
  }, [username]);

  return { data, isLoading, error };
}
