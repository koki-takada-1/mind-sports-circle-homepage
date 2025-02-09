import { cn } from "@/lib/utils";
import { ArrowRight, Mail } from "lucide-react"; // Mail アイコンをインポート
import React from "react";

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-full border bg-background p-2 px-6 text-center font-semibold transition-colors duration-300 hover:bg-black hover:text-white", // ホバー時の色変化を追加
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2">
        {/* 左側の円をメールアイコンに変更 */}
        <Mail className="h-7 w-7 text-primary transition-transform duration-300 group-hover:translate-x-12 group-hover:opacity-0" />
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div className="absolute top-0 left-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight className="h-7 w-7" />
      </div>
    </button>
  )
})

InteractiveHoverButton.displayName = "InteractiveHoverButton"
