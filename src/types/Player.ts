import type { Title } from "./Title";

export interface Player {
  avatar: string;
  player_id: number;
  "@id": string;
  url: string;
  name: string;
  username: string;
  title: Title | null;
  followers: number;
  country: string;
  location: string;
  last_online: number;
  joined: number;
  status: string;
  is_streamer: boolean;
  verified: boolean;
  league: string;
  streaming_platforms: string[];
}
