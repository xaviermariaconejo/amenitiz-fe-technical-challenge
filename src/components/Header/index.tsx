import type { FC } from "react";

interface HeaderProps {
  title?: string;
}

export const Header: FC<HeaderProps> = ({ title = "WikiChess" }) => {
  return (
    <header className="bg-green-600 text-white py-4 px-6 shadow-md">
      <h1 className="container text-3xl font-extrabold">{title}</h1>
    </header>
  );
};
