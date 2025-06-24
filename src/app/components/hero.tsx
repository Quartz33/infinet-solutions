"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import heroImg from "@/app/images/hero.png";
import rocketImg from "@/app/images/rocket.svg"
import planetImg from "@/app/images/planet.svg"
import startImg from "@/app/images/star.svg"
import lineImg from "@/app/images/line.svg"

export function Hero() {
  return (
    <section
      id="main"
      className="relative bg-[#0F1B2A] text-white py-16 overflow-hidden"
    >

    <div className="absolute insert-0 z-0">
        <Image 
        src={lineImg}
        alt="line"
        width={100}
        height={100}
        ></Image>
    </div>
        
      {/* Background Stars with glow */}
      <div className="absolute inset-0 z-0">
        <Image
          src={startImg}
          alt="Stars"
          width={20}
          height={20}
          className="object-cover animate-pulse opacity-50 pointer-events-none"
        />
      </div>

      {/* Rocket and Planet */}
      <Image
        src={planetImg}
        alt="Planet"
        width={150}
        height={150}
        className="absolute bottom-0 z-0 opacity-80 hidden md:block"
      />
      <Image
        src={rocketImg}
        alt="Rocket"
        width={120}
        height={120}
        className="absolute top-12 right-6 z-0 animate-float hidden md:block"
      />

      {/* Foreground content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* LEFT TEXT */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Infinet Solutions<br />
            Infinite Connections<br />
            Infinite Growth
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-xl font-light">
            The future belongs to businesses that adapt, innovate, and communicate without limits.
            Move faster and collaborate smarter with reliable VoIP phone systems and business broadband,
            WhatsApp integration, remote solutions, and more.
          </p>
          <div className="mt-8">
            <button className="bg-[#D09D42] hover:bg-yellow-500 text-[#0F1B2A] font-bold py-4 px-8 text-xl rounded-md flex items-center gap-2 transition">
              Get in touch <ArrowRight size={24} />
            </button>
          </div>
        </div>

        {/* RIGHT HERO IMAGE */}
        <div className="flex-1 w-full flex justify-center relative z-10">
          <Image
            src={heroImg}
            alt="Hero"
            width={600}
            height={500}
            className="w-full max-w-md md:max-w-lg lg:max-w-xl object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
