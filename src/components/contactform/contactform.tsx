"use client"

import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import { formSchema } from "@/components/contactform/schema"

// actions.ts から sendEmail 関数をインポート
import { sendEmail } from "@/components/contactform/actions"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      name: "",
      message: "",
    },
  })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true)
    await form.handleSubmit(async (data) => {
      try {
        await sendEmail(data)
        // 成功時に submit.tsx へ遷移
        router.push("/submit")
      } catch (error) {
        console.error(error)
        alert("メールの送信に失敗しました。時間をおいて再度お試しください。")
      } finally {
        setIsSubmitting(false)
      }
    })(event)
  }

  return (
    <div className="bg-white mt-28 mb-14 md:mt-24 px-11 py-11 md:py-20 md:px-20 border rounded-xl shadow-md w-11/12 md:w-1/2 z-[300]">
    <Form {...form} >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="text-2xl mb-10 md:text-5xl font-bold">お問い合わせ</div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg md:text-xl">メールアドレス</FormLabel>
              <FormControl>
                <Input placeholder="you@example.com" className="border-gray-500" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg md:text-xl">お名前</FormLabel>
              <FormControl>
                <Input className="border-gray-500" placeholder="山田 太郎" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-lg md:text-xl">メッセージ</FormLabel>
              <FormControl className="">
                <Textarea className="rounded-xl border-gray-500" placeholder="参加申請・ご質問・ご意見" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <InteractiveHoverButton className="border-gray-400 shadow-lg py-4 px-7 text-xl" type="submit" disabled={isSubmitting}>{isSubmitting ? "送信中..." : "送信"}</InteractiveHoverButton>
        {/* <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "送信中..." : "送信"}
        </Button> */}
      </form>
    </Form>
    </div>
  )
}
