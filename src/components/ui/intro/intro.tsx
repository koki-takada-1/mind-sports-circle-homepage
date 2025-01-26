"use client";

import { Marquee } from "@/components/ui/marquee";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { cn } from "@/lib/utils";
import { TextAnimateDemo } from "./text";
const reviews = [
  {
    img: "/billiards.jpeg",
  },
  {
    img: "/c.png",
  },
  {
    img: "/janso.jpeg",
  },
  {
    img: "/majan1.jpeg",
  },
  {
    img: "/majan2.jpeg",
  },
  {
    img: "/shogi1.jpeg",
  },
  {
    img: "/shogi2.jpeg",
  },
  {
    img: "/shogi3.jpeg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
}: {
  img: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-40 h-40 sm:w-80 sm:h-80 cursor-pointer overflow-hidden rounded-xl border",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <img className="w-full h-full object-cover rounded-xl" alt="Review Image" src={img} />
    </figure>
  );
};

export function Intro() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg  bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s] [--gap:1rem]">
        {firstRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s] [--gap:1rem]">
        {secondRow.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </Marquee>
      <div className="absolute -inset-96 bg-white opacity-50 z-10"></div>
      <div className="absolute inset-0 flex flex-col gap-10 items-center justify-center z-20 mix-blend-multiply">
        <TextAnimateDemo />
        <TypingAnimation>頭脳を鍛え、仲間と共に成長する</TypingAnimation>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
