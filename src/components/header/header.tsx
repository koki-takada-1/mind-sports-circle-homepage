"use client";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    //初期値はfalseハンバーガー非表示
    const [isOpen, setOpen] = useState<boolean>(false);
    const handleMenuOpen = () => {
        // 真偽反転　ハンバーガー表示
        setOpen(!isOpen);
    };

    const handleMenuClose = () => {
        setOpen(false);
    };

    return (
        <header className="fixed top-0 left-0 w-full z-[700] py-4 pl-3 pr-5 md:py-6 md:px-10 flex justify-between items-center text-black backdrop-blur-md bg-opacity-70">
            <Link className="flex md:gap-4 text-lg md:text-2xl font-bold" href="/" onClick={handleMenuClose}>
                <Image src="mindsports/mainlogo-black.svg" alt="logo" width={40} height={40}/>
                マインドスポーツサークル
                {/* <Image src="/github-mark.png" width={30} height={30} alt="Tailwind CSS" /> */}
            </Link>

            <nav
                className={
                    isOpen
                        ? "bg-white fixed top-0 right-0 bottom-0 left-0 h-screen flex flex-col"
                        : "fixed right-[-100%] md:right-4 mr-10 text-xl"
                }
            >
                                {isOpen && (
                        <FlickeringGrid
                            className="absolute inset-0 z-0 h-full"
                            squareSize={4}
                            gridGap={6}
                            color="#6B7280"
                            maxOpacity={0.5}
                            flickerChance={0.1}
                            height={window.innerHeight} // ウィンドウの高さを使用
                            width={window.innerWidth}   // ウィンドウの幅を使用
                        />

                )}
                <ul
                    className={
                        isOpen
                            ? "flex h-screen justify-center items-center flex-col gap-6 text-xl font-bold"
                            : "pt-1 block md:flex md:gap-8" //block
                    }
                >
                    <li>
                        <Link onClick={handleMenuClose} href="/activities" className="hover:text-gray-300 duration-300">
                            活動紹介
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleMenuClose} href="/achievements" className="hover:text-gray-300 duration-300">
                            実績
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleMenuClose} href="https://edu.toby.mathsci.jp/67938057725e94ee2891c734" className="hover:text-gray-300 duration-300" target="_blank" rel="noopener noreferrer">
                            Wiki
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleMenuClose} href="/contact" className="hover:text-gray-300 duration-300">
                            お問い合わせ
                        </Link>
                    </li>
                    <li>
                        <a href="https://x.com/i/flow/login?redirect_after_login=%2FIputClub23588" target="_blank" rel="noopener noreferrer" >
                            <div className="logo-container">
                                <Image src="/X-black.svg" alt="X" width={30} height={30} className="logo-image" />
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/mind-sports-circle" target="_blank" rel="noopener noreferrer" >
                            <div className="logo-container">
                                <Image src="/github-black.svg" alt="Github" width={30} height={30} className="logo-image"/>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="https://www.youtube.com/@IPUT%E3%83%9E%E3%82%A4%E3%83%B3%E3%83%89%E3%82%B9%E3%83%9D%E3%83%BC%E3%83%84%E3%82%B5%E3%83%BC%E3%82%AF%E3%83%AB" target="_blank" rel="noopener noreferrer">
                            <div className="logo-container">
                                <Image src="/youtube-black.svg" alt="Youtube" width={30} height={30} className="logo-image" />
                            </div>
                        </a>
                    </li>
                    {/* <li>
                        <Link onClick={handleMenuClose} href="/#Project" className="hover:text-gray-300 duration-300">
                            Project
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleMenuClose} href="https://github.com/koki-takada-1">
                            <Image src="/github-mark.png" width={30} height={30} alt="Tailwind CSS" />
                        </Link>
                    </li> */}
                </ul>
            </nav>
            <button className="z-[500] space-y-2 md:hidden" onClick={handleMenuOpen}>
                <span
                    className={
                        isOpen
                            ? "block w-8 h-0.5 bg-black translate-y-2.5 rotate-45 duration-300"
                            : "block w-8 h-0.5 bg-gray-800 duration-300"
                    }
                />
                <span
                    className={
                        isOpen ? "block opacity-0 duration-300 bg-gray-800" : "block w-8 h-0.5 bg-gray-800 duration-300"
                    }
                />
                <span
                    className={
                        isOpen
                            ? "block w-8 h-0.5 bg-black -rotate-45 duration-300"
                            : "block w-8 h-0.5 bg-gray-800 duration-300"
                    }
                />
            </button>
        </header>
    );
}
