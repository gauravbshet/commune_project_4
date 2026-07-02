"use client";

import { useEffect, useState } from "react";

export default function LiveClock() {
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const update = () =>
      setTime(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    update();
    const id = setInterval(update, 1000 * 15);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="text-center md:text-left">
      <span className="font-script text-3xl sm:text-4xl text-ink/80 block">
        it&apos;s
      </span>
      <span className="font-display font-medium text-sage-dark text-6xl sm:text-7xl block -mt-2 tabular-nums">
        {time ?? "--:--"}
      </span>
      <span className="text-ink/60 text-sm tracking-wide mt-2 block">
        at GREEN TREE
      </span>
    </div>
  );
}
