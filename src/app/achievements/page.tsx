import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import Link from "next/link";

export default function Achievement() {
  const data = [
    {
      title: "2025年2月",
      content: (
        <div>

          <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-2xl mb-8">
            公式ホームページ開設
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-2xl font-normal mb-8">
            Next.js, TailwindCSS, Framer Motion, shadcn/uiなどの技術スタックで制作
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="next-js.svg"
              alt="startup template"
              width={50}
              height={50}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <Image
              src="/tailwindcss.svg"
              alt="startup template"
              width={50}
              height={50}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024年12月",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-2xl mb-8">
            メンバーの山口奏が将棋ソフト「奏」で文部科学大臣杯第5回世界将棋AI電竜戦本戦に出場し, 14位入賞
          </p>
          <Link href="https://denryu-sen.jp/denryusen/dr5_production/dr1_live.php" className="text-neutral-800 dark:text-neutral-200 text-xl md:text-2xl mb-8 underline">
            結果url
          </Link>

        </div>
      ),
    },
    {
      title: "2024/6月",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-2xl mb-8">
            マインドスポーツサークルに名前を改名し，マインドスポーツサークルが東京国際工科専門職大学公認化
          </p>

        </div>
      ),
    },
    {
      title: "2024/5月",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-2xl mb-8">
            将棋サークルとして活動を開始
          </p>

        </div>
      ),
    },
  ];
  return (
    <>
    <Header/>
    <div className="min-h-screen w-full">
      <div className="absolute top-0 left-0 w-full">
        <Timeline data={data} />
        <Footer/>
      </div>
    </div>
    </>
  );
}
