"use client";
import { useTheme } from "next-themes";

import { MagicCard } from "@/components/ui/magic-card";
import { ShineBorder } from "@/components/ui/shine-border";
export function Active() {
  const { theme } = useTheme();
  return (
    <>
      <div
        className={
          "flex h-full w-full flex-row gap-20 lg:h-[250px] lg:flex-row mt-10 px-16 items-center justify-center"
      }
      >
        <ShineBorder
          className="w-full h-full overflow-hidden rounded-3xl border bg-background md:shadow-xl"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          <MagicCard
            className="flex flex-col items-center justify-center cursor-pointer whitespace-nowrap text-4xl"
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
          >
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-slate-400 bg-clip-text text-center text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
              将棋
            </span>
            <br></br>
            <br></br>
          </MagicCard>
        </ShineBorder>
        <ShineBorder
          className="w-full h-full overflow-hidden rounded-3xl border bg-background md:shadow-xl"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          <MagicCard
            className="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl"
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
          >
            麻雀
          </MagicCard>
        </ShineBorder>
      </div>

    <div
        className={
          "flex h-[500px] w-full flex-row gap-20 lg:h-[250px] lg:flex-row mt-10 px-16 items-center justify-center"
        }
      >
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl shadow-2xl"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          プログラミング
        </MagicCard>
        <MagicCard
          className="cursor-pointer flex-col items-center justify-center whitespace-nowrap text-4xl shadow-2xl"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        >
          麻雀
        </MagicCard>
      </div>
    </>
  );
}
