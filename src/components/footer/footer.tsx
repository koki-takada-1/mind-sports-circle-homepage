"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import type React from "react"
import { useEffect, useState } from "react"
import { useMediaQuery } from "react-responsive"
const Footer: React.FC = () => {
  const [isDesktop, setIsDesktop] = useState(false)
  const isDesktopQuery = useMediaQuery({ minWidth: 768 })

  useEffect(() => {
    setIsDesktop(isDesktopQuery)
  }, [isDesktopQuery])

  return (
    <footer className="relative overflow-hidden text-white border-t border-shadow-lg">
      {/* Animated background */}
      <div className="absolute inset-0 z-0 flex justify-between items-center">
        <motion.div className="relative z-10">
          <motion.svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="w-full h-full scale-[4.0] ml-56">
            <motion.path
              fill="#223a70"
              initial={{
                d: "M480,50 Q670,40 780,200 Q900,380 780,550 Q670,740 480,750 Q290,760 180,600 Q60,420 180,250 Q290,60 480,50",
              }}
              animate={{
                d: [
                  "M480,50 Q670,40 780,200 Q900,380 780,550 Q670,740 480,750 Q290,760 180,600 Q60,420 180,250 Q290,60 480,50",
                  "M450,30 Q650,20 800,150 Q950,300 800,500 Q650,720 450,730 Q250,740 100,550 Q30,370 100,200 Q250,30 450,30",
                  "M500,80 Q680,70 750,250 Q830,450 750,600 Q680,770 500,780 Q320,790 250,640 Q170,470 250,300 Q320,110 500,80",
                  "M480,50 Q670,40 780,200 Q900,380 780,550 Q670,740 480,750 Q290,760 180,600 Q60,420 180,250 Q290,60 480,50",
                ],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 20,
                ease: "easeInOut",
              }}
            />
          </motion.svg>
        </motion.div>
        <motion.div className="relative z-10">
          <motion.svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="w-full h-full scale-[4.0] mr-48">
            <motion.path
              fill="#223a70"
              initial={{
                d: "M480,50 Q670,40 780,200 Q900,380 780,550 Q670,740 480,750 Q290,760 180,600 Q60,420 180,250 Q290,60 480,50",
              }}
              animate={{
                d: [
                  "M480,50 Q670,40 780,200 Q900,380 780,550 Q670,740 480,750 Q290,760 180,600 Q60,420 180,250 Q290,60 480,50",
                  "M450,30 Q650,20 800,150 Q950,300 800,500 Q650,720 450,730 Q250,740 100,550 Q30,370 100,200 Q250,30 450,30",
                  "M500,80 Q680,70 750,250 Q830,450 750,600 Q680,770 500,780 Q320,790 250,640 Q170,470 250,300 Q320,110 500,80",
                  "M480,50 Q670,40 780,200 Q900,380 780,550 Q670,740 480,750 Q290,760 180,600 Q60,420 180,250 Q290,60 480,50",
                ],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 25,
                ease: "easeInOut",
              }}
            />
          </motion.svg>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-200 z-0 backdrop-blur-xs"></div>
      </div>

      {/* Translucent filter */}
      <div className="absolute inset-0 bg-slate-400 bg-opacity-40 z-20 backdrop-blur-sm"></div>

      {/* Footer content */}
      <div className="relative z-20 container mx-auto px-4 py-6">
        {isDesktop ? (
          <>
            {/* Desktop layout */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center">
                <Image src="/mindsports/mainlogo.svg" alt="Logo" className="h-10 w-10 mr-2" width={40} height={40} />
                <span className="text-xl font-bold">マインドスポーツサークル</span>
              </div>
              <nav>
                <ul className="flex space-x-6">
                  <li>
                    <Link href="#" className="hover:text-gray-300 transition-colors text-lg">
                      活動紹介
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-300 transition-colors text-lg">
                      実績
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-300 transition-colors text-lg">
                      Wiki
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="hover:text-gray-300 transition-colors text-lg">
                      お問い合わせ
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="flex justify-between items-center pb-10">
              <p>&copy; マインドスポーツサークル.  All rights reserved.</p>
              <div className="flex space-x-4 gap-10">
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  <div className="logo-container">
                    <Image src="/X.svg" alt="X" width={40} height={40} className="logo-image" />
                  </div>
                </Link>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  <div className="logo-container">
                    <Image src="/github-mark-white.svg" alt="Github" width={40} height={40} className="logo-image" />
                  </div>
                </Link>
                <Link href="#" className="hover:text-gray-300 transition-colors">
                  <div className="logo-container">
                    <Image src="/youtube.svg" alt="Youtube" width={40} height={40} className="logo-image" />
                  </div>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <>
            {/* Mobile layout */}
            <nav className="mb-6">
              <ul className="flex justify-center space-x-4 text-sm">
                <li>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    活動紹介
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    実績
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    Wiki
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300 transition-colors">
                    お問い合わせ
                  </a>
                </li>
              </ul>
            </nav>
            <div className="flex justify-center space-x-4 mb-6">
              <Link href="#" className="hover:text-gray-300 transition-colors">
                <div className="logo-container">
                  <Image src="/X.svg" alt="X" width={40} height={40} className="logo-image" />
                </div>
              </Link>
              <Link href="#" className="hover:text-gray-300 transition-colors">
                <div className="logo-container">
                  <Image src="/github-mark-white.svg" alt="Github" width={40} height={40} className="logo-image" />
                </div>
              </Link>
              <Link href="#" className="hover:text-gray-300 transition-colors">
                <div className="logo-container">
                  <Image src="/youtube.svg" alt="Youtube" width={40} height={40} className="logo-image" />
                </div>
              </Link>
            </div>
            <p className="text-center text-sm">&copy; マインドスポーツサークル. All rights reserved.</p>
          </>
        )}
      </div>
    </footer>
  )
}

export default Footer
