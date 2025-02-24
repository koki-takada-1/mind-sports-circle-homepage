// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardTitle,
//   } from "@/components/ui/card";
import { BoxReveal } from "@/components/ui/box-reveal"
import { NeonGradientCard } from "@/components/ui/neon-gradient-card"
import { PulsatingButton } from "@/components/ui/pulsating-button"
// import { WarpBackground } from "@/components/warp-background"
import Link from "next/link"

export default function Join() {
  return (
    <>
    {/* <WarpBackground> */}
    <div className="mt-40 mb-11 lg:mt-72 text-2xl md:text-5xl lg:text-6xl text-center lg:mb-32 font-bold">Join our mind sports journey</div>
    <div className="flex justify-center w-full h-full mb-20 md:mb-48">

        <NeonGradientCard className="flex items-center justify-center text-center md:w-3/4 w-full">
            <br></br>
            <div className="flex flex-col items-center justify-centerr">
            <BoxReveal boxColor={"#000000"} duration={0.7}>
                <span className="mb-24 pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-xl md:text-3xl lg:text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                    メンバー常時募集中!
                </span>
            </BoxReveal>
            <Link href="/contact" className="flex justify-center mt-9">
                <PulsatingButton className="p-4 md:p-7 bg-slate-800 text-neutral-50 text-xl md:text-2xl font-bold">JOIN US</PulsatingButton>
            </Link>
            </div>
        </NeonGradientCard>
    </div>
    </>
  )
}
