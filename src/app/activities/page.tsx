"use client"

import Footer from "@/components/footer/footer"
import Header from "@/components/header/header"
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
      "将棋は、2人のプレイヤーが交互に駒を動かし、相手の王将を詰ませることを目指す日本の伝統的な戦略ゲームです。駒を取ると自分の駒として使える「持ち駒」システムが特徴的で、高度な戦略と読みが要求されます。",
    imageUrl: "/shogi3.jpeg",
    contents: [
      {
        title: "将棋AIの開発",
        description:
          "電竜戦の出場、勉強会を実施しています。最新の機械学習技術を活用し、強力な将棋AIの開発に取り組んでいます。",
      },
      {
        title: "対局",
        description:
          "対局時計を使い、棋譜を記録した対局を行います。初心者から上級者まで、レベルに合わせた対局を楽しめます。",
      },
      {
        title: "定跡研究",
        description:
          "将棋ソフトや本を活用して定跡の研究を行っています。古典から現代まで、様々な戦型や戦略を学び、実践に活かします。",
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
        title: "初心者講座",
        description: "麻雀未経験者や初心者向けの講座を開催しています。ルールの基礎から点数計算まで、丁寧に指導します。",
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
        title: "コーディング勉強会",
        description:
          "週1回のペースでコーディング勉強会を開催しています。各種プログラミング言語やフレームワークについて、メンバーが持ち回りで講師を務めます。",
      },
      {
        title: "ハッカソン参加",
        description:
          "年に数回、外部のハッカソンイベントに参加しています。チームでアイデアを出し合い、短期間で製品やサービスのプロトタイプを開発します。",
      },
      {
        title: "プロジェクト開発",
        description:
          "サークル独自のWebアプリケーションやモバイルアプリの開発プロジェクトを進行中です。実践的なスキルを身につけながら、ポートフォリオの作成にも役立ちます。",
      },
    ],
  },
  {
    name: "ビリヤード",
    shortDescription: "キューを使ってボールを打つテーブルゲーム",
    longDescription:
      "ビリヤードは、キューを使って白球を打ち、他の球をポケットに入れることを目指すゲームです。精密な技術と戦略が要求され、幾何学的な思考力と集中力が養われます。様々なゲームモードがあり、楽しみながらスキルアップできます。",
    imageUrl: "/billiards.jpeg",
    contents: [
      {
        title: "技術練習会",
        description:
          "月に2回、ビリヤードの基本技術を学ぶ練習会を開催しています。ストロークフォームやエイミングなど、プロの指導を受けながら技術向上を目指します。",
      },
      {
        title: "トーナメント",
        description:
          "サークル内でのトーナメントを定期的に開催しています。9ボールや8ボールなど、様々な競技形式で腕を競い合います。",
      },
      {
        title: "戦略研究",
        description:
          "ビリヤードの戦略や戦術について、ビデオ分析や討論会を行っています。プロの試合を観戦し、その技術や戦略を学びます。",
      },
    ],
  },
  {
    name: "オセロ",
    shortDescription: "白黒の石を裏返して陣地を広げるボードゲーム",
    longDescription:
      "オセロは、8x8のボード上で2人のプレイヤーが白黒の石を交互に置いていくゲームです。相手の石を挟むことで石を裏返し、最終的により多くの石を自分の色にした方が勝利します。シンプルなルールながら、深い戦略性があります。",
    imageUrl: "/placeholder.svg?height=200&width=300",
    contents: [
      {
        title: "オセロ大会",
        description: "月1回のペースでオセロ大会を開催しています。トーナメント形式で勝者を決定し、腕を競い合います。",
      },
      {
        title: "戦略講座",
        description:
          "オセロの基本戦略から高度なテクニックまで、経験豊富なメンバ���が講師となって戦略講座を開いています。",
      },
      {
        title: "コンピュータオセロ",
        description:
          "オセロAIの開発に取り組んでいます。プログラミングスキルを活かし、強力なオセロプログラムの作成を目指しています。",
      },
    ],
  },
  {
    name: "トランプ",
    shortDescription: "52枚のカードを使用する様々なゲーム",
    longDescription:
      "トランプは、52枚のカードを使用して行う多様なゲームの総称です。ポーカー、ブリッジ、ブラックジャックなど、様々なゲームがあり、それぞれに異なる戦略と技術が要求されます。記憶力、計算力、心理戦など、多面的なスキルが養われます。",
    imageUrl: "/placeholder.svg?height=200&width=300",
    contents: [
      {
        title: "ポーカーナイト",
        description:
          "週1回のポーカーナイトを開催しています。テキサスホールデムを中心に、様々なバリエーションのポーカーを楽しみます。",
      },
      {
        title: "ブリッジ教室",
        description:
          "コントラクトブリッジの初心者向け教室を開いています。パートナーとの協力プレイを通じて、コミュニケーション能力も養います。",
      },
      {
        title: "カードマジック講座",
        description:
          "トランプを使ったマジックのテクニックを学ぶ講座を不定期で開催しています。手先の器用さと演技力を磨きます。",
      },
    ],
  },
  {
    name: "eスポーツ",
    shortDescription: "競技性の高いビデオゲーム",
    longDescription:
      "eスポーツは、コンピュータゲームを使った競技スポーツです。FPS、MOBA、格闘ゲームなど、様々なジャンルがあり、個人戦やチーム戦で競います。反射神経、戦略的思考、チームワークなど、多様なスキルが要求される現代的なマインドスポーツです。",
    imageUrl: "/placeholder.svg?height=200&width=300",
    contents: [
      {
        title: "チーム練習",
        description:
          "週3回、チームでのゲーム練習を行っています。主にLeague of LegendsやValorantなどの人気タイトルを中心に、戦略の立案や連携プレイの向上に努めています。",
      },
      {
        title: "ストリーミング",
        description:
          "メンバーの試合や練習風景をTwitchやYouTubeでライブストリーミングしています。視聴者とのコミュニケーションも大切にしています。",
      },
      {
        title: "大会参加",
        description:
          "地域や全国規模のeスポーツ大会に積極的に参加しています。競技経験を積むとともに、他チームとの交流も深めています。",
      },
    ],
  },
  {
    name: "チェス",
    shortDescription: "世界的に人気の戦略ボードゲーム",
    longDescription:
      "チェスは、64マスのボード上で2人のプレイヤーが16個ずつの駒を動かし、相手のキングを詰ませることを目指す戦略ゲームです。各駒に異なる動きがあり、長期的な戦略と戦術的な思考が要求されます。世界中で親しまれている知的スポーツの代表格です。",
    imageUrl: "/placeholder.svg?height=200&width=300",
    contents: [
      {
        title: "チェス教室",
        description:
          "初心者から中級者向けのチェス教室を週1回開催しています。基本的な駒の動きからオープニング戦略、エンドゲームのテクニックまで幅広く学びます。",
      },
      {
        title: "オンライン対戦",
        description:
          "lichessやchess.comなどのプラットフォームを利用して、世界中のプレイヤーとオンライン対戦を楽しんでいます。定期的に部内ランキング戦も実施しています。",
      },
      {
        title: "グランドマスター研究会",
        description:
          "有名なグランドマスターの対局を分析する研究会を月1回開催しています。高度な戦略や革新的な手順について議論し、自身の実力向上に役立てています。",
      },
    ],
  },
]



export default function Home() {
  const [focusedSection, setFocusedSection] = useState<string | null>(null)
  const [viewportHeight, setViewportHeight] = useState(0)
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

    return () => {
      window.removeEventListener("resize", updateViewportHeight)
      observers.forEach((observer) => observer?.disconnect())
    }
  }, [])

  return (
    <>
    <Header/>
    <main className="mt-20 container mx-auto px-4 py-8 mb-11">
      <h1 className="text-xl md:text-5xl font-bold text-center mb-9">マインドスポーツサークル活動紹介</h1>
      <div className="space-y-16">
        {activities.map((activity, index) => (
          <motion.section
            key={activity.name}
            id={activity.name}
            ref={(el) => (sectionRefs.current[index] = el)}
            initial={{ opacity: 1, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              filter: focusedSection ? (focusedSection === activity.name ? "blur(0px)" : "blur(4px)") : "blur(0px)",
            }}
            transition={{ duration: 0.5 }}
            className="scroll-mt-16"
            style={{ minHeight: `${viewportHeight * 0.8}px` }}
          >
            <ActivitySection
              activity={activity}
              index={index}
              isFocused={focusedSection === activity.name || focusedSection === null}
            />
          </motion.section>
        ))}
      </div>
    </main>
    <Footer/>
    </>
  )
}

