"use server"

import { formSchema } from "@/components/contactform/schema"
import nodemailer from "nodemailer"
import { z } from "zod"

export async function sendEmail(data: z.infer<typeof formSchema>) {
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD,
    },
  })

  const mailOptions = {
    from: data.email,
    to: process.env.NODEMAILER_EMAIL,
    subject: `お問い合わせ：${data.name}様`,
    text: `メールアドレス: ${data.email}\n\nメッセージ:\n${data.message}`,
  }

  try {
    await transport.sendMail(mailOptions)
  } catch (error) {
    console.error(error)
    throw new Error("メールの送信に失敗しました。")
  }
}
