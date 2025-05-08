import type { Player } from "../../types/Player";
import { BASE_URL } from "../config";

const URL = "pub/player";

export async function getPlayer(username: string): Promise<Player> {
  const endpoint = `${BASE_URL}/${URL}/${username}`;
  const res = await fetch(endpoint);

  if (!res.ok) {
    throw new Error(
      `Error fetching player ${username} (${res.status}): ${res.statusText}`
    );
  }

  const data: Player = await res.json();
  return data;
}
