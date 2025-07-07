"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import heroImg from "@/app/images/hero.png";
import rocketImg from "@/app/images/rocket.svg"
import planetImg from "@/app/images/planet.svg"
import startImg from "@/app/images/star.svg"
import lineImg from "@/app/images/line.svg"
import { BackgroundBeamsWithCollision } from "./ui/background-beams";

import backgroundImg from "@/app/images/Cardiff-Bay-Night.jpg"

export function Hero() {
  return (
    <section
      id="main"
      className="relative bg-[#0F1B2A] text-white overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src={backgroundImg}
          alt="Background"
          fill
          style={{ objectFit: "cover", opacity: 0.15 }} // Adjust opacity and fit as needed
          priority
        />
      </div>

      {/* 👇 Foreground Content */}
      <BackgroundBeamsWithCollision className="relative z-10 py-16">
        <div className="relative z-10  mx-auto px-0 flex flex-col lg:flex-row items-center justify-between gap-18">
          {/* LEFT TEXT */}
          <div className="">
            <h1 className="text-6xl font-bold leading-tight text-center">
              Infinet&nbsp;Solutions<br />
              Infinet&nbsp;Connections<br />
              Infinet&nbsp;Growth
            </h1>
            <p className="mt-16 text-xl text-gray-400 max-w-xl font-light text-center">
              The future belongs to businesses that adapt, innovate, and communicate without limits.
              Move faster and collaborate smarter with reliable VoIP phone systems and business broadband,
              WhatsApp integration, remote solutions, and more.
            </p>
            <div className="mt-18 pl-40">
              <a href="#contact">
                <button className="bg-[#D09D42] hover:bg-yellow-500 text-[#0F1B2A] font-bold py-4 px-8 text-2xl rounded-md flex items-center gap-2 transition ">
                  Get in touch <ArrowRight size={24} />
                </button>
              </a>
            </div>
          </div>


          {/* RIGHT HERO IMAGE */}
          <div className="flex-1 w-full flex justify-center relative z-10 ml-auto">
            <Image
              src={heroImg}
              alt="Hero"
              width={1200} // Increase width
              height={1200} // Increase height for higher quality
              className="w-[750px] max-w-none translate-x-45"
              priority
            />
          </div>

        </div>
      </BackgroundBeamsWithCollision>
    </section>

  );
}
