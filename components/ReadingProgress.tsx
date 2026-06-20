"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const updateScrollCompletion = () => {
      const currentProgress = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      if (scrollHeight) {
        setCompletion((currentProgress / scrollHeight) * 100);
      }
    };

    window.addEventListener("scroll", updateScrollCompletion);

    return () =>
      window.removeEventListener("scroll", updateScrollCompletion);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[100] h-1 w-full bg-white/5">
      <div
        className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-violet-500 transition-all"
        style={{
          width: `${completion}%`,
        }}
      />
    </div>
  );
}