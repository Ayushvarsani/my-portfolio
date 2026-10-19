import { useEffect, useState } from "react";

export function useCarousel(length, delay = 5500) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || length < 2) return undefined;
    const id = setInterval(() => {
      setIndex((current) => (current + 1) % length);
    }, delay);
    return () => clearInterval(id);
  }, [delay, length, paused]);

  return { index, setIndex, setPaused };
}
