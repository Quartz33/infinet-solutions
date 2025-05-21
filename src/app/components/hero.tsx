"use client"

import Link from "next/link"
import img from "@/app/images/hero.png"
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reviews } from "./Reviews";

export function Hero() {

    return (
        <section id="main">
            <div className="container">
                <div className="pt-6">
                    <Image src={img} width={450} height={100} alt="hero" />
                </div>
                <div className="text-white text-center text-4xl font-[Roboto] font-semibold">
                    <h2>Infinet Solutions</h2>
                    <h2>Infinite Connections</h2>
                    <h2>Infinite Growth</h2>
                </div>
                <div className="pt-8 flex justify-center">
                    <button className="bg-[#D09D42] flex text-2xl font-bold rounded-md py-4 px-18 text-[#0F1B2A]">
                        Get In Touch<ArrowRight size={30}/>
                    </button>
                </div>
                <div className="flex justify-center mt-6 xl:mt-10 text-white pb-10">
                    <Reviews />
                </div>

            </div>
        </section>
    )
}