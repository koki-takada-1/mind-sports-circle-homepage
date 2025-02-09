"use client"

import Footer from "@/components/footer/footer"
import Header from "@/components/header/header"
import { RetroGrid } from "@/components/retro-grid"
import ActivitySection from "@/components/ui/activity-section"
import { motion } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export interface Activity {
  name: string
  shortDescription: string
  longDescription: string
  imageUrl: string
  contents: {
    title: string
    description: string
  }[]
}

export const activities: Activity[] = [
  {
    name: "将棋",
    shortDescription: "日本の伝統的な戦略ボードゲーム",
    longDescription:
      "将棋は、2人のプレイヤーが交互に駒を動かし、相手の王将を詰ますことを目指す日本の伝統的な戦略ゲームです。駒を取ると自分の駒として使える「持ち駒」システムが特徴的で、高度な戦略と読みが要求されます。",
    imageUrl: "/shogi3.jpeg",
    contents: [
      {
        title: "将棋AIの開発",
        description:
          "機械学習の技術を使った将棋AIの開発を行なっています。電竜戦の出場、コンピュータ将棋連続対局場所(floodgate)への参加を行なっています。",
      },
      {
        title: "対局",
        description:
          "対局時計を使い、棋譜を記録した対局を行います。初心者から上級者まで、レベルに合わせた対局を楽しめます。将棋ソフトや本を活用して定跡の研究なども行なっています。",
      },
      {
        title: "道場対局",
        description:
          "東京にある様々な将棋カフェ、将棋道場で対局を行なっています。企業との交流戦など、サークル外の方々と対局することで、棋力向上に励みます。",
      },
    ],
  },
  {
    name: "麻雀",
    shortDescription: "4人で楽しむタイル型ゲーム",
    longDescription:
      "麻雀は、4人のプレイヤーが136枚の牌を使用して行うゲームです。様々な役や点数計算があり、運と戦略のバランスが重要です。社交性と計算力が養われる人気のあるマインドスポーツです。",
    imageUrl: "/majan2.jpeg",
    contents: [
      {
        title: "麻雀大会",
        description:
          "定期的に麻雀大会を開催し、メンバー同士の交流を深めています。初心者から上級者まで参加できる様々な形式の大会を企画しています。",
      },
      {
        title: "戦術研究会",
        description:
          "プロ雀士の牌譜や戦術書を用いて、高度な戦略や読みの研究を行っています。メンバー同士で議論を重ね、スキルアップを図ります。",
      },
      {
        title: "初心者大歓迎",
        description: "麻雀未経験者や初心者の方々も大歓迎です。ルールの基礎から点数計算まで、丁寧に指導します。",
      },
    ],
  },
  {
    name: "プログラミング",
    shortDescription: "コンピュータに指示を与えるスキル",
    longDescription:
      "プログラミングは、コンピュータに特定のタスクを実行させるための命令を書くプロセスです。論理的思考力と問題解決能力が鍛えられ、創造性を発揮できる分野です。様々なプログラミング言語や技術を学び、実践します。",
    imageUrl: "/programing.png",
    contents: [
      {
        title: "競技プログラミング",
        description:
          "競技プログラミングはアルゴリズムの設計能力を競う遊びです。週一で開催されるコンテストに参加して問題を解きます。",
      },
      {
        title: "アルゴリズム勉強会",
        description:
          "アルゴリズムの設計能力向上に興味がある人たちを集め、アルゴリズムやデータ構造などのノウハウを共有します。また、サークル顧問の飛澤先生は数理情報の専門家で、指導を受けることもできます。",
      },
      {
        title: "プロジェクト開発",
        description:
          "サークル独自のWebアプリケーションやモバイルアプリの開発プロジェクトを進行中です。実践的なスキルを身につけながら、就活ポートフォリオの作成にも役立ちます。",
      },
    ],
  },
  {
    name: "ビリヤード",
    shortDescription: "キューを使ってボールを打つテーブルゲーム",
    longDescription:
      "ビリヤードは、キューを使って白球を打ち、他の球をポケットに入れることを目指すゲームです。精密な技術と戦略が要求され、幾何学的な思考力と集中力が養われます。様々なゲームモードがあり、楽しみながらスキルアップできます。",
    imageUrl: "/billiards.jpg",
    contents: [
      {
        title: "技術練習会",
        description:
          "ビリヤードの基本技術を学ぶ練習会を開催する予定です。ストロークフォームやエイミングなど、技術向上を目指します。",
      },
      {
        title: "トーナメント",
        description:
          "サークル内でのトーナメントを定期的に開催する予定です。9ボールや8ボールなど、様々な競技形式で腕を競い合います。",
      },
      {
        title: "戦略研究",
        description:
          "ビリヤードの戦略や戦術について、ビデオ分析や討論会を行っています。プロの試合を観戦し、その技術や戦略を学びます。",
      },
    ],
  },
  {
    name: "近代ボードゲーム",
    shortDescription: "最近流行の世界のボードゲームを楽しみましょう。",
    longDescription:
      "近代ボードゲームは最近ボードゲームカフェなどで流行しているボードゲームです。内容物とゲームルールが1つの作品/商品となっていてカタンやごきぶりポーカーなどがこれに該当します。",
    imageUrl: "/mindsports/mind.jpeg",
    contents: [
      {
        title: "メイン活動",
        description: "将棋や麻雀に並ぶ、マインドスポーツサークルのメイン活動です。サークルの備品としてクリプティッドやごきぶりポーカーがあります。",
      },
      {
        title: "楽しく遊ぶ",
        description:
          "メンバーとの交流やコミュニケーションも楽しみながらボードゲームを使って楽しく遊びます。戦略を考えて真剣に勝負するのも一興です。",
      },
      {
        title: "様々な作品・商品の探求",
        description:
          "同じボードゲームばかりでなく、様々なボードゲーム作品との出会いを楽しみながらボードゲームを探求します。",
      },
    ],
  },
  {
    name: "トランプ",
    shortDescription: "仲間と楽しむ多彩なカードゲーム",
    longDescription: "トランプは、仲間とワイワイ楽しめる多様なカードゲームの総称です。ポーカー、ブリッジ、ブラックジャックなど、それぞれ異なる駆け引きや戦略があり、遊ぶたびに新たな発見があります。みんなで盛り上がれるゲームを通じて、スリルや知的な楽しさを味わいましょう。",
    imageUrl: "/mindsports/trump2.png",
    contents: [
        {
            "title": "ポーカー",
            "description": "テキサスホールデムを中心に、いろいろなルールのポーカーを楽しんでいます。読み合いや駆け引きで盛り上がること間違いなし！"
        },
        {
            "title": "ブリッジ",
            "description": "パートナーと協力しながらプレイする奥深いゲーム、ブリッジを楽しめます。チームワークと戦略が鍵となる、知的な遊びです。"
        },
        {
            "title": "カードマジック",
            "description": "トランプを使ったマジックで、仲間を驚かせてみませんか？簡単なトリックから本格的な技まで、みんなで楽しく練習できます。"
        }
    ]
}
,
  {
    name: "eスポーツ",
    shortDescription: "競技性の高いビデオゲーム",
    longDescription:
      "eスポーツは、コンピュータゲームを使った競技スポーツです。FPS、MOBA、格闘ゲームなど、様々なジャンルがあり、個人戦やチーム戦で競います。反射神経、戦略的思考、チームワークなど、多様なスキルが要求される現代的なマインドスポーツです。",
    imageUrl: "/e-sports.png",
    contents: [
      {
        title: "フォートナイト",
        description:
          "メンバー内にフォートナイトユーザーがいるので、フォートナイトなども活動範囲に入れる予定です。",
      },
      {
        title: "本学におけるeスポーツの可能性",
        description:
          "本学では、競技性の高いPCゲーム（Apex Legends、VALORANT）やスマブラのプレイヤーが多く、私たちはeスポーツを通じた学生間の交流を深める場を積極的に作っていきます。",
      },
      // {
      //   title: "大会参加",
      //   description:
      //     "地域や全国規模のeスポーツ大会に積極的に参加しています。競技経験を積むとともに、他チームとの交流も深めています。",
      // },
    ],
  },
  {
    name: "チェス",
    shortDescription: "世界的に人気の戦略ボードゲーム",
    longDescription:
      "チェスは、64マスのボード上で2人のプレイヤーが16個ずつの駒を動かし、相手のキングを詰ませることを目指す戦略ゲームです。各駒に異なる動きがあり、長期的な戦略と戦術的な思考が要求されます。世界中で親しまれている知的スポーツの代表格です。",
    imageUrl: "/chess-board.svg",
    contents: [
      {
        title: "チェス対局",
        description:
          "チェスクロックを使って対局します。AIの検討を使用しながら、感想戦も行います。",
      },
      {
        title: "オンライン対戦",
        description:
          "lichessやchess.comなどのプラットフォームを利用して、世界中のプレイヤーとオンライン対戦を楽しんでいます。定期的に部内ランキング戦も実施予定です。",
      },
      {
        title: "グランドマスター研究会",
        description:
          "有名なグランドマスターの対局を分析する研究会を開催する予定です。高度な戦略や革新的な手順について議論し、自身の実力向上に役立てています。",
      },
    ],
  },
]


export default function Home() {
  const [focusedSection, setFocusedSection] = useState<string | null>(null)
  const [viewportHeight, setViewportHeight] = useState(0)
  const [isLoading, setIsLoading] = useState(true) // ローディング状態を追加
  const sectionRefs = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const updateViewportHeight = () => {
      setViewportHeight(window.innerHeight)
    }

    updateViewportHeight()
    window.addEventListener("resize", updateViewportHeight)

    const observers = sectionRefs.current.map((ref, index) => {
      if (!ref) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setFocusedSection(activities[index].name)
            }
          })
        },
        {
          threshold: 0.5,
          rootMargin: `-${window.innerHeight / 4}px 0px -${window.innerHeight / 4}px 0px`,
        },
      )

      observer.observe(ref)
      return observer
    })

    // ページが完全にレンダリングされた後にローディングを解除
    setIsLoading(false)

    return () => {
      window.removeEventListener("resize", updateViewportHeight)
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  useEffect(() => {
    if (!isLoading) {
      const hash = window.location.hash
      if (hash) {
        const id = decodeURIComponent(hash.substring(1))
        const element = document.getElementById(id)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        }
      }
    }
  }, [isLoading]) // ローディングが完了した後に実行

  // if (isLoading) {
  //   return <div>Loading...</div> // ローディング中の表示
  // }

  return (
    <>
      <Header/>
      <main className="relative mt-12 md:mt-20 container mx-auto px-4 py-8 mb-11 z-10">
        <h1 className="text-xl md:text-5xl font-bold text-center mb-14">マインドスポーツサークル活動紹介</h1>
        <div className="space-y-16">
          {activities.map((activity, index) => (
            <motion.section
              key={activity.name}
              id={activity.name}
              ref={(el) => {sectionRefs.current[index] = el}}
              initial={{ opacity: 1, y: 50 }}
              animate={{
                opacity: 1,
                y: 0,
                filter: focusedSection ? (focusedSection === activity.name ? "blur(0px)" : "blur(4px)") : "blur(0px)",
              }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-44"
              style={{ minHeight: `${viewportHeight * 0.8}px` }}
            >
              <RetroGrid className="absolute inset-0 z-0"/>
              <section id={activity.name}>
                <ActivitySection
                  activity={activity}
                  index={index}
                  isFocused={focusedSection === activity.name || focusedSection === null}
                />
              </section>
            </motion.section>
          ))}
        </div>
      </main>
      <Footer/>
    </>
  )
}

// export default function Home() {
//   const [focusedSection, setFocusedSection] = useState<string | null>(null)
//   const [viewportHeight, setViewportHeight] = useState(0)
//   const sectionRefs = useRef<(HTMLElement | null)[]>([])

//   useEffect(() => {
//     const updateViewportHeight = () => {
//       setViewportHeight(window.innerHeight)
//     }

//     updateViewportHeight()
//     window.addEventListener("resize", updateViewportHeight)

//     const observers = sectionRefs.current.map((ref, index) => {
//       if (!ref) return null

//       const observer = new IntersectionObserver(
//         (entries) => {
//           entries.forEach((entry) => {
//             if (entry.isIntersecting) {
//               setFocusedSection(activities[index].name)
//             }
//           })
//         },
//         {
//           threshold: 0.5,
//           rootMargin: `-${window.innerHeight / 4}px 0px -${window.innerHeight / 4}px 0px`,
//         },
//       )

//       observer.observe(ref)
//       return observer
//     })
//     const hash = window.location.hash
//     if (hash) {
//       const id = decodeURIComponent(hash.substring(1)); // '#'を除去してデコード
//       const element = document.getElementById(id)
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" }) // スムーズにスクロール
//       }
//     }
//     return () => {
//       window.removeEventListener("resize", updateViewportHeight)
//       observers.forEach((observer) => observer?.disconnect())
//     }
//   }, [])

//   return (
//     <>
//     <Header/>
//     {/* <RetroGrid className="absolute inset-0 z-0"/> */}
//     <main className="relative mt-12 md:mt-20 container mx-auto px-4 py-8 mb-11 z-10">
//       <h1 className="text-xl md:text-5xl font-bold text-center mb-14">マインドスポーツサークル活動紹介</h1>
//       <div className="space-y-16">
//         {activities.map((activity, index) => (
//           <motion.section
//             key={activity.name}
//             id={activity.name}
//             ref={(el) => {sectionRefs.current[index] = el}}
//             initial={{ opacity: 1, y: 50 }}
//             animate={{
//               opacity: 1,
//               y: 0,
//               filter: focusedSection ? (focusedSection === activity.name ? "blur(0px)" : "blur(4px)") : "blur(0px)",
//             }}
//             transition={{ duration: 0.5 }}
//             className="scroll-mt-12"
//             style={{ minHeight: `${viewportHeight * 0.8}px` }}
//           >
//             <RetroGrid className="absolute inset-0 z-0"/>
//             <section id={activity.name}>
//               <ActivitySection
//                 activity={activity}
//                 index={index}
//                 isFocused={focusedSection === activity.name || focusedSection === null}
//               />
//             </section>
//           </motion.section>
//         ))}
//       </div>
//     </main>

//     <Footer/>
//     </>
//   )
// }

