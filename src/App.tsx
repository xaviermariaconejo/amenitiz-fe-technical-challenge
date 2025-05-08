import { useState } from "react";
import { Header } from "./components/Header";
import { List } from "./components/List";
import { Detail } from "./components/Detail";
import { useTitledPlayers } from "./api/playersByTitle/hook";

export default function App() {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const { data: players, error } = useTitledPlayers("GM");

  return (
    <div className="h-screen flex flex-col bg-gray-100 overflow-hidden">
      <Header title="WikiChess" />
      <main
        className={`
          flex-1 flex flex-col py-6 container grid gap-6 grid-rows-1 overflow-hidden items-start
          grid-cols-1
          ${selectedUser ? "md:grid-cols-5" : "md:grid-cols-1"}
        `}
      >
        <div
          className={`
            flex-col gap-4 overflow-hidden h-full col-span-1
            md:flex
            ${selectedUser ? "hidden" : "flex"}
            ${selectedUser ? "md:col-span-2" : "md:col-span-1"}
        `}
        >
          <h2 className="text-xl font-semibold">List of Grandmasters</h2>
          {!players && <p>Loading...</p>}
          {error && <p className="text-red-600">Error: {error}</p>}
          {players && <List items={players} onSelect={setSelectedUser} />}
        </div>

        {selectedUser && (
          <div className="col-span-1 md:col-span-3 bg-white rounded shadow p-4 overflow-y-auto">
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
