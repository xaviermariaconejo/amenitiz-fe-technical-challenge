import type { Title } from "../../types/Title";
import { BASE_URL } from "../config";

const URL = "pub/titled";

export interface TitledPlayersResponse {
  players: string[];
}

export async function getTitledPlayers(title: Title): Promise<string[]> {
  const endpoint = `${BASE_URL}/${URL}/${title}`;
  const res = await fetch(endpoint);

  if (!res.ok) {
    throw new Error(
      `Error fetching titled players (${res.status}): ${res.statusText}`
    );
  }

  const data: TitledPlayersResponse = await res.json();
  return data.players;
}
