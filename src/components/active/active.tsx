"use client";
import { MagicCard } from "@/components/ui/magic-card";
import { ShineBorder } from "@/components/ui/shine-border";
import { useTheme } from "next-themes";
import Image from "next/image";

export function Active() {
  const { theme } = useTheme();
  return (
    <>
      <div className="h-full w-full text-4xl md:text-6xl lg:text-8xl font-bold px-4 md:px-8 lg:px-16 mt-40 md:mt-64 mb-20 text-center">
      Our activities
      </div>
      <div
        className={
          "flex lg:h-[250px] flex-col md:flex-row h-full w-full gap-4 md:gap-8 lg:gap-20 mt-10 px-4 md:px-8 lg:px-16 items-center justify-center"
        }
      >
      {/* "flex h-full w-full flex-row gap-20 lg:h-[250px] lg:flex-row mt-10 px-16 items-center justify-center" */}
        <ShineBorder
          className="w-full h-full overflow-hidden rounded-3xl border bg-background md:shadow-xl"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          <MagicCard
            className="flex flex-row items-center justify-center cursor-pointer whitespace-nowrap text-4xl"
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
          >
            <div className="flex flex-row items-center justify-center">
              <div className="hidden lg:block">
                <Image
                  src="/mindsports/shogi-koma.svg"
                  alt="将棋"
                  width={90}
                  height={90}
                  className="object-contain"
                />
              </div>
              <div className="hidden md:block lg:hidden">
                <Image
                  src="/mindsports/shogi-koma.svg"
                  alt="将棋"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div className="block md:hidden">
                <Image
                  src="/mindsports/shogi-koma.svg"
                  alt="将棋"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <span className="ml-4 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-slate-400 bg-clip-text text-center text-2xl md:text-6xl lg:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                将棋
              </span>
            </div>

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
            <div className="flex flex-row items-center justify-center">
              <div className="hidden lg:block">
                <Image
                  src="/mindsports/mahjong.svg"
                  alt="麻雀"
                  width={90}
                  height={90}
                  className="object-contain"
                />
              </div>
              <div className="hidden md:block lg:hidden">
                <Image
                  src="/mindsports/mahjong.svg"
                  alt="麻雀"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
              <div className="block md:hidden">
                <Image
                  src="/mindsports/mahjong.svg"
                  alt="麻雀"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <span className="ml-4 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-slate-400 bg-clip-text text-center text-2xl md:text-6xl lg:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                麻雀
              </span>
            </div>
          </MagicCard>
        </ShineBorder>
      </div>
      <div
        className={
          "flex lg:h-[250px] flex-col md:flex-row h-full w-full gap-4 md:gap-8 lg:gap-20 mt-5 md:mt-10 px-4 md:px-8 lg:px-16 items-center justify-center"
        }
      >
        <ShineBorder
          className="w-full h-full overflow-hidden rounded-3xl border bg-background md:shadow-xl"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          <MagicCard
            className="flex flex-row items-center justify-center cursor-pointer whitespace-nowrap text-4xl"
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
          >
            <div className="flex flex-row items-center justify-center">
              <div className="hidden lg:block">
                <Image
                  src="/mindsports/programming.svg"
                  alt="プログラミング"
                  width={90}
                  height={90}
                />
              </div>
              <div className="hidden md:block lg:hidden">
                <Image
                  src="/mindsports/programming.svg"
                  alt="プログラミング"
                  width={80}
                  height={80}
                />
              </div>
              <div className="block md:hidden">
                <Image
                  src="/mindsports/programming.svg"
                  alt="プログラミング"
                  width={60}
                  height={60}
                />
              </div>
              <span className="ml-4 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-slate-400 bg-clip-text text-center text-2xl md:text-6xl lg:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                プログラミング
              </span>
            </div>

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
            <div className="flex flex-row items-center justify-center">
              <div className="hidden lg:block">
                <Image
                  src="/mindsports/billiard.svg"
                  alt="ビリヤード"
                  width={90}
                  height={90}
                />
              </div>
              <div className="hidden md:block lg:hidden">
                <Image
                  src="/mindsports/billiard.svg"
                  alt="ビリヤード"
                  width={80}
                  height={80}
                />
              </div>
              <div className="block md:hidden">
                <Image
                  src="/mindsports/billiard.svg"
                  alt="ビリヤード"
                  width={60}
                  height={60}
                />
              </div>
              <span className="ml-4 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-slate-400 bg-clip-text text-center text-2xl md:text-6xl lg:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                ビリヤード
              </span>
            </div>
          </MagicCard>
        </ShineBorder>
      </div>
      <div
        className={
          "flex lg:h-[250px] flex-col md:flex-row h-full w-full gap-4 md:gap-8 lg:gap-20 mt-5 md:mt-10 px-4 md:px-8 lg:px-16 items-center justify-center"
        }
      >
        <ShineBorder
          className="w-full h-full overflow-hidden rounded-3xl border bg-background md:shadow-xl"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          <MagicCard
            className="flex flex-row items-center justify-center cursor-pointer whitespace-nowrap text-4xl"
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
          >
            <div className="flex flex-row items-center justify-center">
              <div className="hidden lg:block">
                <Image
                  src="/mindsports/go-board.svg"
                  alt="オセロ"
                  width={90}
                  height={90}
                />
              </div>
              <div className="hidden md:block lg:hidden">
                <Image
                  src="/mindsports/go-board.svg"
                  alt="オセロ"
                  width={80}
                  height={80}
                />
              </div>
              <div className="block md:hidden">
                <Image
                  src="/mindsports/go-board.svg"
                  alt="オセロ"
                  width={60}
                  height={60}
                />
              </div>
              <span className="ml-4 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-slate-400 bg-clip-text text-center text-2xl md:text-6xl lg:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                オセロ
              </span>
            </div>

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
            <div className="flex flex-row items-center justify-center">
              <div className="hidden lg:block">
                <Image
                  src="/mindsports/trump.svg"
                  alt="トランプ"
                  width={90}
                  height={90}
                />
              </div>
              <div className="hidden md:block lg:hidden">
                <Image
                  src="/mindsports/trump.svg"
                  alt="トランプ"
                  width={80}
                  height={80}
                />
              </div>
              <div className="block md:hidden">
                <Image
                  src="/mindsports/trump.svg"
                  alt="トランプ"
                  width={60}
                  height={60}
                />
              </div>
              <span className="ml-4 pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-slate-400 bg-clip-text text-center text-2xl md:text-6xl lg:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                トランプ
              </span>
            </div>
          </MagicCard>
        </ShineBorder>
      </div>
      <div
        className={
"flex lg:h-[250px] flex-col md:flex-row h-full w-full gap-4 md:gap-8 lg:gap-20 mt-5 md:mt-10 px-4 md:px-8 lg:px-16 items-center justify-center"
        }
      >
        <ShineBorder
          className="w-full h-full overflow-hidden rounded-3xl border bg-background md:shadow-xl"
          color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
        >
          <MagicCard
            className="flex flex-row items-center justify-center cursor-pointer whitespace-nowrap text-4xl"
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
          >
            <div className="flex flex-row items-center justify-center">
              <div className="hidden lg:block">
                <Image
                  src="/mindsports/game-control.svg"
                  alt="eスポーツ"
                  width={90}
                  height={90}
                />
              </div>
              <div className="hidden md:block lg:hidden">
                <Image
                  src="/mindsports/game-control.svg"
                  alt="eスポーツ"
                  width={80}
                  height={80}
                />
              </div>
              <div className="block md:hidden">
                <Image
                  src="/mindsports/game-control.svg"
                  alt="eスポーツ"
                  width={60}
                  height={60}
                />
              </div>
              <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-slate-400 bg-clip-text text-center text-2xl md:text-6xl lg:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                eスポーツ
              </span>
            </div>

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
            <div className="flex flex-row items-center justify-center">
              <div className="hidden lg:block">
                <Image
                  src="/mindsports/chess.svg"
                  alt="チェス"
                  width={90}
                  height={90}
                />
              </div>
              <div className="hidden md:block lg:hidden">
                <Image
                  src="/mindsports/chess.svg"
                  alt="チェス"
                  width={80}
                  height={80}
                />
              </div>
              <div className="block md:hidden">
                <Image
                  src="/mindsports/chess.svg"
                  alt="チェス"
                  width={60}
                  height={60}
                />
              </div>
              <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-slate-400 bg-clip-text text-center text-2xl md:text-6xl lg:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
                チェス
              </span>
            </div>
          </MagicCard>
        </ShineBorder>
      </div>
    </>
  );
}
