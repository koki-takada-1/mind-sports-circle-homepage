"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

export default function Submit() {
  const router = useRouter()

  useEffect(() => {
    // 一定時間後にホームページにリダイレクト（任意）
    const timer = setTimeout(() => {
      router.push("/")
    }, 10000) // 10秒後にホームへリダイレクト

    return () => clearTimeout(timer)
  }, [router])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="bg-white rounded-3xl shadow-xl p-10 m-4 md:m-0">
        <h1 className="text-3xl md:text-5xl font-bold text-center text-gray-800 mb-6">
          お問い合わせありがとうございます！
        </h1>
        <p className="text-lg md:text-2xl text-center text-gray-600">
          メッセージは正常に送信されました。
          <br />
          近日中にご連絡いたします。
        </p>
        <div className="flex justify-center mt-8">
          <button
            onClick={() => router.push("/")}
            className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          >
            ホームに戻る
          </button>
        </div>
      </div>
    </div>
  )
}
