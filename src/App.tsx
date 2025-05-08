import { useState } from "react";
import { Header } from "./components/Header";
import { List } from "./components/List";
import { Detail } from "./components/Detail";
import { useTitledPlayers } from "./api/playersByTitle/hook";

export default function App() {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const { data: players, isLoading, error } = useTitledPlayers("GM");

  return (
    <div className="h-screen flex flex-col bg-gray-100 overflow-hidden">
      <Header title="WikiChess" />
      <main
        className={`
          flex-1 flex flex-col p-6 container grid gap-6 grid-rows-1 overflow-hidden
          ${selectedUser ? "grid-cols-5" : "grid-cols-1"}
        `}
      >
        <div
          className={`
            flex flex-col gap-4 overflow-hidden h-full
            ${selectedUser ? "col-span-2" : "col-span-1"}
        `}
        >
          <h2 className="text-xl font-semibold">Lista de Grandes Maestros</h2>
          {isLoading && <p>Loading...</p>}
          {error && <p className="text-red-600">Error: {error}</p>}
          {!isLoading && !error && (
            <List items={players} onSelect={setSelectedUser} />
          )}
        </div>

        {selectedUser && (
          <div className="col-span-3 bg-white rounded shadow p-4 overflow-y-auto">
            <Detail
              username={selectedUser}
              onBack={() => setSelectedUser(null)}
            />
          </div>
        )}
      </main>
    </div>
  );
}
