import { getStr, getNum, getBool, getStrArr, getImg } from "../utils";
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

export function mapPlayer(data: unknown): Player {
  if (typeof data !== "object" || data === null) {
    throw new Error("Invalid player data");
  }
  const raw = data as Record<string, unknown>;

  const titleRaw = raw.title;
  const title: Title | null =
    typeof titleRaw === "string" && titleRaw !== ""
      ? (titleRaw as Title)
      : null;

  return {
    avatar: getImg(raw, "avatar"),
    player_id: getNum(raw, "player_id"),
    "@id": getStr(raw, "@id"),
    url: getStr(raw, "url"),
    name: getStr(raw, "name"),
    username: getStr(raw, "username"),
    title,
    followers: getNum(raw, "followers"),
    country: getStr(raw, "country"),
    location: getStr(raw, "location"),
    last_online: getNum(raw, "last_online"),
    joined: getNum(raw, "joined"),
    status: getStr(raw, "status"),
    is_streamer: getBool(raw, "is_streamer"),
    verified: getBool(raw, "verified"),
    league: getStr(raw, "league"),
    streaming_platforms: getStrArr(raw, "streaming_platforms"),
  };
}
