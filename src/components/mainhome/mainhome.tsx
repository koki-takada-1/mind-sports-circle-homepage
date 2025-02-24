"use client"
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { TextAnimate } from "@/components/ui/text-animate";
import Image from "next/image";

export function MainHome() {
  // const { theme } = useTheme();
  return (
    <>
    <TextAnimate className="md:mt-48 lg:mt-80 mt-20 text-2xl md:text-4xl lg:text-6xl text-center w-full font-bold"           animation="blurInUp"
          by="character">東京国際工科専門職大学公認</TextAnimate>
    <TextAnimate className="mt-3 md:mt-5 text-center w-full font-bold text-2xl md:text-4xl lg:text-6xl"           animation="blurInUp"
          by="character">マインドスポーツサークル</TextAnimate>
    <div className="md:ml-20 md:mt-36 mt-10 flex md:flex-row flex-col items-center justify-center bg-background md:gap-28 gap-10">
        <div className="flex flex-col items-center justify-center md:ml-11">
            <div className="relative flex h-[500px] flex-col items-center justify-center overflow-visible rounded-lg">
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
                Mind Sports
            </span>

            <OrbitingCircles iconSize={40}>
                <Image src="/mindsports/billiard.svg" alt="Billiard" width={40} height={40} />
                {/* <Image src="mindsports/chess.svg" alt="Chess" width={40} height={40} /> */}
                {/* <Image src="mindsports/game-control.svg" alt="Game Control" width={40} height={40} /> */}
                <Image src="/mindsports/go-board.svg" alt="Go Board" width={40} height={40} />
                <Image src="/mindsports/mahjong.svg" alt="Mahjong" width={40} height={40} />
                <Image src="/mindsports/programming.svg" alt="Programming" width={40} height={40} />
                <Image src="/mindsports/shogi-koma.svg" alt="Shogi Koma" width={40} height={40} />
                {/* <Image src="mindsports/trump.svg" alt="Trump" width={40} height={40} /> */}
            </OrbitingCircles>
            <OrbitingCircles iconSize={40} radius={100} reverse speed={2}>
                {/* <Image src="mindsports/billiard.svg" alt="Billiard" width={30} height={30} /> */}
                <Image src="/mindsports/chess.svg" alt="Chess" width={40} height={40} />
                <Image src="/mindsports/game-control.svg" alt="Game Control" width={40} height={40} />
                {/* <Image src="mindsports/go-board.svg" alt="Go Board" width={30} height={30} />
                <Image src="mindsports/mahjong.svg" alt="Mahjong" width={30} height={30} />
                <Image src="mindsports/programming.svg" alt="Programming" width={30} height={30} />
                <Image src="mindsports/shogi-koma.svg" alt="Shogi Koma" width={40} height={40} /> */}
                <Image src="/mindsports/trump.svg" alt="Trump" width={40} height={40} />
            </OrbitingCircles>
            </div>
        </div>
        <div className="md:pr-16 sm:px-7 px-3">
          <p className="leading-10 md:leading-loose text-2xl md:text-5xl font-bold">
            マインドスポーツサークルは
          </p>
          <p className="leading-10 md:leading-loose text-2xl md:text-5xl font-bold">
            知的な遊戯に皆で興じながら知力と精神力を研き合うための団体です。
          </p>
        </div>
    </div>
    </>
  );
}

