import { NO_DATA } from "../constants";

export const getImg = (data: Record<string, unknown>, key: string): string => {
  const v = data[key];
  return typeof v === "string" && v.trim() !== ""
    ? v
    : "/avatar-placeholder.svg";
};

export const getStr = (data: Record<string, unknown>, key: string): string => {
  const v = data[key];
  return typeof v === "string" && v.trim() !== "" ? v : NO_DATA;
};

export const getNum = (data: Record<string, unknown>, key: string): number => {
  const v = data[key];
  return typeof v === "number" && !isNaN(v) ? v : 0;
};

export const getBool = (data: Record<string, unknown>, key: string): boolean =>
  typeof data[key] === "boolean" ? data[key] : false;

export const getStrArr = (
  data: Record<string, unknown>,
  key: string
): string[] => {
  const v = data[key];
  return Array.isArray(v) ? v.filter((x) => typeof x === "string") : [];
};
