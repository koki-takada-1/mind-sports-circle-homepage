"use client";
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
        <header className="fixed top-0 left-0 w-full z-[500] py-4 px-7 md:py-6 md:px-10 flex justify-between items-center text-black backdrop-blur-md bg-opacity-70">
            <Link className="text-lg md:text-2xl font-bold" href="/" onClick={handleMenuClose}>
                マインドスポーツサークル
                {/* <Image src="/github-mark.png" width={30} height={30} alt="Tailwind CSS" /> */}
            </Link>

            <nav
                className={
                    isOpen
                        ? "bg-gradient-to-r from-cyan-500 to-blue-500 fixed top-0 right-0 bottom-0 left-0 h-screen flex flex-col"
                        : "fixed right-[-100%] md:right-4 mr-10 text-xl"
                }
            >
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
                        <Link onClick={handleMenuClose} href="/#Skill" className="hover:text-gray-300 duration-300">
                            実績
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleMenuClose} href="https://edu.toby.mathsci.jp/67938057725e94ee2891c734" className="hover:text-gray-300 duration-300">
                            Wiki
                        </Link>
                    </li>
                    <li>
                        <Link onClick={handleMenuClose} href="/contact" className="hover:text-gray-300 duration-300">
                            お問い合わせ
                        </Link>
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
                            ? "block w-8 h-0.5 bg-gray-800 translate-y-2.5 rotate-45 duration-300"
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
                            ? "block w-8 h-0.5 bg-gray-800 -rotate-45 duration-300"
                            : "block w-8 h-0.5 bg-gray-800 duration-300"
                    }
                />
            </button>
        </header>
    );
}
