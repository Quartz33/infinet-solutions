"use client";

import img from "@/app/images/hero.png";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reviews } from "./Reviews";

export function Hero() {
    return (
        <section id="main" className="relative overflow-hidden bg-black">
            <svg
                viewBox="0 0 400 400"
                className="absolute inset-0 w-full h-full z-0"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
            >
                <path
                    d="M 0 0 C 0 100, 100 200, 200 200 C 300 200, 400 300, 400 400"
                    stroke="white"
                    strokeWidth="4"
                />
            </svg>
            {/* Foreground Content */}
            <div className="relative z-10 container bg-color">
                <div className="pt-6">
                    <Image src={img} width={450} height={100} alt="hero" />
                </div>
                <div className="text-white text-center text-4xl font-semibold">
                    <h2>Infinet Solutions</h2>
                    <h2>Infinite Connections</h2>
                    <h2>Infinite Growth</h2>
                </div>
                <div className="pt-8 flex justify-center">
                    <button className="bg-[#D09D42] flex text-2xl font-bold rounded-md py-4 px-18 text-[#0F1B2A]">
                        Get In Touch <ArrowRight size={30} />
                    </button>
                </div>
                <div className="flex justify-center mt-6 xl:mt-10 text-white pb-10">
                    <Reviews />
                </div>
            </div>
        </section>
    );
}
