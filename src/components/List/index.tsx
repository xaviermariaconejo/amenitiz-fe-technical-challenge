import { useMemo, useState, type FC } from "react";
import { useDebounce } from "../../hooks/useDebounce";

interface ListProps {
  items: string[];
  onSelect: (user: string) => void;
}

export const List: FC<ListProps> = ({ items, onSelect }) => {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search);

  const filteredItems = useMemo(
    () =>
      items.filter((item) =>
        item.toLowerCase().includes(debouncedSearch.trim().toLowerCase())
      ),
    [items, debouncedSearch]
  );

  return (
    <div className="flex flex-col flex-1 overflow-hidden">
      <input
        type="text"
        placeholder="Buscar usuario…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="
          mb-4 w-full px-3 py-2
          border border-gray-300 rounded
          focus:outline-none focus:ring-2 focus:ring-primary-500
          transition
        "
      />

      <ul className="flex-1 overflow-y-auto divide-y divide-gray-200">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <li key={item}>
              <button
                onClick={() => onSelect(item)}
                className="w-full text-left p-4 hover:bg-green-100 transition"
              >
                {item}
              </button>
            </li>
          ))
        ) : (
          <li className="p-4 text-gray-500">No se encontraron resultados.</li>
        )}
      </ul>
    </div>
  );
};
