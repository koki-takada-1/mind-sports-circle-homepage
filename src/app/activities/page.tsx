"use client";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import { useRef } from "react";

const dummyContent = Array.from({ length: 10 }, (_, i) => (
<p key={i} className="pb-4 font-mono text-sm text-zinc-500">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam
  lectus. Sed sit amet ipsum mauris. Maecenas congue ligula ac quam viverra
  nec consectetur ante hendrerit. Donec et mollis dolor. Praesent et diam eget
  libero egestas mattis sit amet vitae augue. Nam tincidunt congue enim, ut
  porta lorem lacinia consectetur. Donec ut libero sed arcu vehicula ultricies
  a non tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
</p>
));

function ScrollProgressBasic1() {
const containerRef = useRef<HTMLDivElement>(null);

  return (
  <div className="h-[350px] overflow-auto px-8 pb-16 pt-16" ref={containerRef}>
    <div
      className="pointer-events-none absolute bottom-0 left-0 h-12 w-full bg-white to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_top,white,transparent)] dark:bg-neutral-900" />
    <div className="pointer-events-none absolute left-0 top-0 w-full">
      <div className="absolute left-0 top-0 h-1 w-full bg-[#E6F4FE] dark:bg-[#111927]" />
      <ScrollProgress containerRef={containerRef} className="absolute top-0 bg-[#0090FF]" />
    </div>
    {dummyContent}
  </div>
  );
  }

  function ScrollProgressBasic2() {
  const containerRef = useRef<HTMLDivElement>(null);

    return (
    <div className="h-[350px] overflow-auto px-8 pb-4 pt-16" ref={containerRef}>
      <div className="border-zin-500 absolute left-0 top-0 z-10 h-10 w-full bg-white dark:bg-zinc-950">
        <ScrollProgress className="absolute top-0 h-10 bg-zinc-200 dark:bg-zinc-800" containerRef={containerRef} />
        <div className="absolute left-0 top-0 flex h-10 items-center space-x-6 px-8 font-[450]">
          <a href="#" className="text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white">
            Magazine
          </a>
          <a href="#" className="text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white">
            Blog
          </a>
          <a href="#" className="text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white">
            About
          </a>
        </div>
      </div>
      {dummyContent}
    </div>
    );
    }

    function ScrollProgressBasic3() {
    const containerRef = useRef<HTMLDivElement>(null);

      return (
      <div className="h-[350px] overflow-auto px-8 pb-16 pt-16" ref={containerRef}>
        <div
          className="pointer-events-none absolute left-0 top-0 h-24 w-full bg-white to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-neutral-950" />
        <div className="pointer-events-none absolute left-0 top-0 w-full">
          <div className="absolute left-0 top-0 h-0.5 w-full dark:bg-[#111111]" />
          <ScrollProgress
            className="absolute top-0 h-0.5 bg-[linear-gradient(to_right,rgba(0,0,0,0),#111111_75%,#111111_100%)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0),#ffffff_75%,#ffffff_100%)]"
            containerRef={containerRef} springOptions={{ stiffness: 280, damping: 18, mass: 0.3, }} />
        </div>
        {dummyContent}
      </div>
      );
      }

      export { ScrollProgressBasic1, ScrollProgressBasic2, ScrollProgressBasic3 };

// "use client";

// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { motion } from "framer-motion";
// import {
//   CircleDotIcon,
//   ClubIcon,
//   CodeIcon,
//   CrosshairIcon,
//   Dice5Icon,
//   HeartIcon,
//   MonitorPlayIcon,
//   SwordsIcon
// } from "lucide-react";

// const activities = [
//   {
//     id: "shogi",
//     title: "将棋",
//     description: "日本の伝統的なマインドスポーツ。戦略的思考と先読み力を養います。",
//     icon: SwordsIcon,
//     image: "https://images.unsplash.com/photo-1610635967430-7157d4e3499c?auto=format&fit=crop&q=80&w=1000",
//     details: [
//       {
//         title: "将棋AIの開発",
//         description: "電竜戦の出場、勉強会を実施しています。"
//       },
//       {
//         title: "対局",
//         description: "対局時計を使い、棋譜を記録した対局を行います。"
//       },
//       {
//         title: "定跡研究",
//         description: "将棋ソフトや本を活用して定跡の研究を行っています。"
//       }
//     ]
//   },
//   {
//     id: "mahjong",
//     title: "麻雀",
//     description: "計算力と運の要素が絡み合う奥深いゲーム。社交性も育めます。",
//     icon: ClubIcon,
//     image: "https://images.unsplash.com/photo-1596568359553-a56de6970068?auto=format&fit=crop&q=80&w=1000",
//     details: [
//       {
//         title: "麻雀大会",
//         description: "月1回の大会を開催し、実践的な技術向上を図ります。"
//       },
//       {
//         title: "戦術研究会",
//         description: "有名プロの牌譜や戦術書を用いた研究会を実施。"
//       },
//       {
//         title: "初心者講座",
//         description: "基本ルールから点数計算まで、段階的に学べる講座を提供。"
//       }
//     ]
//   },
//   {
//     id: "programming",
//     title: "プログラミング",
//     description: "論理的思考とクリエイティビティを組み合わせた現代のマインドスポーツ。",
//     icon: CodeIcon,
//     image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
//     details: [
//       {
//         title: "ハッカソン",
//         description: "チーム開発でアプリケーションを作成する実践的な活動。"
//       },
//       {
//         title: "アルゴリズム勉強会",
//         description: "競技プログラミングの問題を解きながら、効率的なアルゴリズムを学習。"
//       },
//       {
//         title: "プロジェクト開発",
//         description: "webアプリやゲームなど、実用的なプロジェクトの開発。"
//       }
//     ]
//   },
//   {
//     id: "billiards",
//     title: "ビリヤード",
//     description: "物理学と精密な技術が求められる洗練されたスポーツ。",
//     icon: CircleDotIcon,
//     image: "https://images.unsplash.com/photo-1611049333678-05855264d7fc?auto=format&fit=crop&q=80&w=1000",
//     details: [
//       {
//         title: "技術講習会",
//         description: "基本ストロークからスピン技術まで、段階的な技術指導。"
//       },
//       {
//         title: "練習会",
//         description: "週2回の練習会で実践的なスキル向上。"
//       },
//       {
//         title: "学内大会",
//         description: "semester毎の学内大会開催による実戦経験の蓄積。"
//       }
//     ]
//   },
//   {
//     id: "othello",
//     title: "オセロ",
//     description: "シンプルなルールながら深い戦略性を持つボードゲーム。",
//     icon: Dice5Icon,
//     image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?auto=format&fit=crop&q=80&w=1000",
//     details: [
//       {
//         title: "戦略研究会",
//         description: "定石や中盤戦の研究を通じて戦略的思考を育成。"
//       },
//       {
//         title: "対局会",
//         description: "週1回の対局会で実践力を養成。"
//       },
//       {
//         title: "大会参加",
//         description: "学生オセロ大会への参加と成績向上を目指す。"
//       }
//     ]
//   },
//   {
//     id: "cards",
//     title: "トランプ",
//     description: "様々なゲームを楽しめる万能な道具。心理戦も楽しめます。",
//     icon: HeartIcon,
//     image: "https://images.unsplash.com/photo-1593634804965-0394d1324bc4?auto=format&fit=crop&q=80&w=1000",
//     details: [
//       {
//         title: "ポーカー戦略会",
//         description: "確率計算と心理戦の要素を学ぶ戦略的なゲーム研究。"
//       },
//       {
//         title: "ブリッジ練習会",
//         description: "チームワークと推理力を養うブリッジの練習。"
//       },
//       {
//         title: "カードマジック",
//         description: "手品の技術を通じて器用さと表現力を向上。"
//       }
//     ]
//   },
//   {
//     id: "esports",
//     title: "eスポーツ",
//     description: "デジタル時代の新しいスポーツ。反射神経と戦略的思考が試されます。",
//     icon: MonitorPlayIcon,
//     image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=1000",
//     details: [
//       {
//         title: "チーム練習",
//         description: "定期的なチーム練習でコミュニケーション力と連携を強化。"
//       },
//       {
//         title: "戦略研究",
//         description: "プロの試合分析や最新メタの研究会を実施。"
//       },
//       {
//         title: "大会運営",
//         description: "学内大会の企画・運営による実践経験の場を提供。"
//       }
//     ]
//   },
//   {
//     id: "chess",
//     title: "チェス",
//     description: "世界で最も人気のある戦略ボードゲーム。国際交流の機会も。",
//     icon: CrosshairIcon,
//     image: "https://images.unsplash.com/photo-1529699211952-734e80c4d42b?auto=format&fit=crop&q=80&w=1000",
//     details: [
//       {
//         title: "理論研究",
//         description: "古典的な定跡から現代戦まで、体系的な戦略を学習。"
//       },
//       {
//         title: "国際交流",
//         description: "オンラインで海外のプレイヤーと対局し、国際交流。"
//       },
//       {
//         title: "段級位認定",
//         description: "FIDE公認の段級位取得を目指した実力向上プログラム。"
//       }
//     ]
//   }
// ];

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-gradient-to-b from-background to-secondary">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
//         {activities.map((activity) => (
//           <section
//             key={activity.id}
//             id={activity.id}
//           >
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
//               <Card className="overflow-hidden">
//                 <CardHeader className="relative h-48">
//                   <div className="absolute inset-0">
//                     <img
//                       src={activity.image}
//                       alt={activity.title}
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute inset-0 bg-black/40" />
//                   </div>
//                   <div className="relative z-10">
//                     <activity.icon className="h-8 w-8 text-white mb-2" />
//                     <CardTitle className="text-white text-2xl">{activity.title}</CardTitle>
//                   </div>
//                 </CardHeader>
//                 <CardContent className="p-6">
//                   <CardDescription className="text-base mb-6">{activity.description}</CardDescription>
//                   <div className="space-y-4">
//                     {activity.details.map((detail, i) => (
//                       <div key={i} className="border-l-2 border-primary pl-4">
//                         <h3 className="font-semibold text-lg mb-1">{detail.title}</h3>
//                         <p className="text-muted-foreground">{detail.description}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </section>
//         ))}
//       </div>
//     </main>
//   );
// }
