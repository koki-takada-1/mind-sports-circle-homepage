"use client";

import { Brain } from "lucide-react";
import { useEffect, useState } from "react";

export default function Loading() {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => (prev + 1) % 360);
    }, 10);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-background to-muted flex items-center justify-center">
      <div className="relative flex flex-col items-center justify-center gap-8">
        {/* Central brain icon with glow effect */}
        <div className="relative">
          <div className="absolute -inset-4 blur-md opacity-50">
            <Brain
              className="w-16 h-16 text-primary animate-pulse"
              style={{
                transform: `rotate(${rotation}deg)`,
              }}
            />
          </div>
          <Brain
            className="w-16 h-16 text-primary relative"
            style={{
              transform: `rotate(${rotation}deg)`,
            }}
          />
        </div>

        {/* Loading text */}
        <div>
          <p className="text-xl font-bold text-primary animate-pulse tracking-wider">
            Mind Sports Circle
          </p>
          <div className="mt-4 flex gap-1.5 justify-center">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2.5 h-2.5 rounded-full bg-slate-500"
                style={{
                  animation: `bounce 1.4s ease-in-out ${i * 0.2}s infinite`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
