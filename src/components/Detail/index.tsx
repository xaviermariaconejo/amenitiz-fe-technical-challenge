import type { FC } from "react";
import { usePlayer } from "../../api/player/hook";

interface DetailProps {
  username: string;
  onBack: () => void;
}

export const Detail: FC<DetailProps> = ({ username, onBack }) => {
  // const { data: player, isLoading, error } = usePlayer(username);

  return (
    <div className="p-6">
      <button
        onClick={onBack}
        className="mb-4 inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        ← Volver
      </button>

      <h2 className="text-2xl font-bold mb-2">{username}</h2>
      <p className="text-gray-700">
        [Detalle de <strong>{username}</strong>…]
      </p>
    </div>
  );
};
