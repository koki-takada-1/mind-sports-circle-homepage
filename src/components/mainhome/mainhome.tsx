import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import Image from "next/image";

export function MainHome() {
  return (
    <div className="relative flex h-[500px] flex-col items-center justify-center overflow-hidden rounded-lg">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
        Mind Sports
      </span>

      <OrbitingCircles iconSize={40}>
        <Image src="mindsports/billiard.svg" alt="Billiard" width={40} height={40} />
        {/* <Image src="mindsports/chess.svg" alt="Chess" width={40} height={40} /> */}
        {/* <Image src="mindsports/game-control.svg" alt="Game Control" width={40} height={40} /> */}
        <Image src="mindsports/go-board.svg" alt="Go Board" width={40} height={40} />
        <Image src="mindsports/mahjong.svg" alt="Mahjong" width={40} height={40} />
        <Image src="mindsports/programming.svg" alt="Programming" width={40} height={40} />
        <Image src="mindsports/shogi-koma.svg" alt="Shogi Koma" width={40} height={40} />
        {/* <Image src="mindsports/trump.svg" alt="Trump" width={40} height={40} /> */}
      </OrbitingCircles>
      <OrbitingCircles iconSize={40} radius={100} reverse speed={2}>
        {/* <Image src="mindsports/billiard.svg" alt="Billiard" width={30} height={30} /> */}
        <Image src="mindsports/chess.svg" alt="Chess" width={40} height={40} />
        <Image src="mindsports/game-control.svg" alt="Game Control" width={40} height={40} />
        {/* <Image src="mindsports/go-board.svg" alt="Go Board" width={30} height={30} />
        <Image src="mindsports/mahjong.svg" alt="Mahjong" width={30} height={30} />
        <Image src="mindsports/programming.svg" alt="Programming" width={30} height={30} />
        <Image src="mindsports/shogi-koma.svg" alt="Shogi Koma" width={40} height={40} /> */}
        <Image src="mindsports/trump.svg" alt="Trump" width={40} height={40} />
      </OrbitingCircles>
    </div>
  );
}

