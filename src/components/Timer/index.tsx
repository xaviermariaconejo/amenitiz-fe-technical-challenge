import { useEffect, useState, type FC } from "react";

interface TimerProps {
  startAt: number;
}

function calculateElapsedTime(start: number): number {
  return Math.max(0, Math.floor((Date.now() - start * 1000) / 1000));
}

export const Timer: FC<TimerProps> = ({ startAt }) => {
  const [elapsed, setElapsed] = useState<number>(calculateElapsedTime(startAt));

  useEffect(() => {
    const timerId = setInterval(() => {
      setElapsed(calculateElapsedTime(startAt));
    }, 1000);

    return () => clearInterval(timerId);
  }, [startAt]);

  const hours = Math.floor(elapsed / 3600);
  const mins = Math.floor((elapsed % 3600) / 60);
  const secs = elapsed % 60;
  const fmt = (n: number) => String(n).padStart(2, "0");

  return (
    <span className="font-mono">
      {fmt(hours)}:{fmt(mins)}:{fmt(secs)}(hh:mm:ss)
    </span>
  );
};
