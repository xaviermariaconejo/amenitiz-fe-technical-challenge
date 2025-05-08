import type { FC } from "react";
import { usePlayer } from "../../api/player/hook";
import { Timer } from "../Timer";

interface DetailProps {
  username: string;
  onBack: () => void;
}

export const Detail: FC<DetailProps> = ({ username, onBack }) => {
  const { data: player, error } = usePlayer(username);

  if (!player) {
    return (
      <div className="p-6">
        <p>
          Loading data of: <strong>{username}</strong>…
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6">
        <p className="text-red-600">Error: {error}</p>
      </div>
    );
  }

  const joinedDate = new Date(player.joined * 1000).toLocaleDateString(
    "es-ES",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  const lastOnline = new Date(player.last_online * 1000).toLocaleString(
    "es-ES"
  );

  const countryCode = player.country.split("/").pop() || "";

  const streaming =
    player.streaming_platforms.length > 0
      ? player.streaming_platforms.join(", ")
      : "—";

  return (
    <div className="bg-white p-6 rounded shadow space-y-6">
      <div className="flex justify-between">
        <p className="text-gray-600 text-sm font-medium mb-4">
          Last connection: <Timer startAt={player.last_online} />
        </p>
        <button
          onClick={onBack}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
        >
          ← Go Back
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <img
          src={player.avatar}
          alt={`${player.username} avatar`}
          className="w-32 h-32 rounded-full object-cover flex-shrink-0 bg-gray-100"
        />
        <div className="flex-1 space-y-2">
          <h2 className="text-3xl font-bold">
            {player.name}
            {player.title && (
              <span className="text-green-600 ml-2 text-xl">
                {player.title}
              </span>
            )}
          </h2>
          <p className="text-gray-600">@{player.username}</p>
        </div>
      </div>

      <ul className="grid grid-cols-2 gap-4 text-gray-700">
        <li>
          <strong>Followers:</strong> {player.followers}
        </li>
        <li>
          <strong>Country:</strong>{" "}
          <a
            href={player.country}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            {countryCode}
          </a>
        </li>
        <li>
          <strong>Location:</strong> {player.location || "—"}
        </li>
        <li>
          <strong>Status:</strong> {player.status}
        </li>
        <li>
          <strong>Joined:</strong> {joinedDate}
        </li>
        <li>
          <strong>Last online:</strong> {lastOnline}
        </li>
        <li>
          <strong>Verified:</strong> {player.verified ? "Sí" : "No"}
        </li>
        <li>
          <strong>Streamer:</strong> {player.is_streamer ? "Sí" : "No"}
        </li>
        <li>
          <strong>League:</strong> {player.league}
        </li>
        <li>
          <strong>Platforms:</strong> {streaming}
        </li>
      </ul>
    </div>
  );
};
