"use server";

import { formSchema } from "@/components/contactform/schema";
import nodemailer from "nodemailer";
import { z } from "zod";

export async function sendEmail(data: z.infer<typeof formSchema>) {
  const transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587, // ポートを 587 に変更
    secure: false, // ポート 587 の場合は false
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD, // アプリパスワードを使用
    },
    tls: {
      rejectUnauthorized: false, // 必要に応じて追加
    },
    connectionTimeout: 10000, // タイムアウト時間を 10 秒に設定
  });

  const mailOptions = {
    from: data.email,
    to: process.env.NODEMAILER_EMAIL,
    subject: `お問い合わせ：${data.name}様`,
    text: `メールアドレス: ${data.email}\n\nメッセージ:\n${data.message}`,
  };

  try {
    await transport.sendMail(mailOptions);
  } catch (error: any) {
    console.error("Error occurred:", error);
    console.error("Error code:", error.code);
    console.error("Error response:", error.response);
    throw new Error(`メールの送信に失敗しました。エラーコード: ${error.code}`);
  }
}
