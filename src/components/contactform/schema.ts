import { z } from "zod";

export const formSchema = z.object({
  email: z.string().email({message:"無効なEmailです。"}).max(50,{message:"50文字以下でお願いします。"}).nonempty({message:"Emailが必要です。"}),
  name: z.string().max(50,{message:"50文字以下でお願いします。"}).nonempty({message:"名前が必要です。"}),
  message: z.string().max(500, {message:"500文字以下でお願いします。"}),
});
