"use client";

//import { useState } from "react";
//import { X } from "lucide-react";
import { NavLink } from "@/app/components/Navlink";
import img from '@/app/images/logo.webp';
import Image from "next/image";

/*function MobileNavigation({ isOpen, toggleMenu }: { isOpen: boolean; toggleMenu: () => void }) {
  return (
    <div
      className={`fixed inset-0 z-50 bg-[#0F1B2A] bg-opacity-95 flex flex-col items-center gap-6 justify-center transform ${isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 md:hidden`}
    >
      <button onClick={toggleMenu} className="absolute top-6 right-6 text-white">
        <X size={32} />
      </button>
      <NavLink href="/" className="text-3xl">Home</NavLink>
      <NavLink href="#about" className="text-3xl">About</NavLink>
      <NavLink href="#services" className="text-3xl">Services</NavLink>
      <NavLink href="#testimonials" className="text-3xl">Testimonials</NavLink>
      <a href="#contact">
        <button className="mt-4 bg-[#D09D42] hover:bg-yellow-500 text-[#0F1B2A] font-semibold py-2 px-4 rounded-md border border-black transition">
          Contact Us
        </button>
      </a>
    </div>
  );
}*/

export function Header() {
  //const [menuOpen, setMenuOpen] = useState(false);


  return (
    <header className="bg-[#0F1B2A] text-white py-2 w-full">
      <nav className="w-full px-8 lg:px-20 flex items-center justify-center h-35 space-x-16">
        {/* Logo */}
        <div className="flex-shrink-0 pt-6 pr-16">
          <Image src={img} alt="Logo" width={340} height={60} />
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center space-x-10 text-4xl pt-4 hover:text-[#D09D42]">
          <NavLink href="/" className="hover:text-yellow-500">Home</NavLink>
          <NavLink href="#about" className="hover:text-yellow-500">About</NavLink>
          <NavLink href="#services" className="hover:text-yellow-500">Services</NavLink>
          <NavLink href="#testimonials" className="hover:text-yellow-500">Testimonials</NavLink>
        </div>

        {/* Contact Button */}
        <div className="hidden md:block ml-10 pt-4">
          <a href="#contact">
            <button className="text-2xl bg-transparent border-2 border-[#D09D42] text-[#D09D42] hover:bg-[#D09D42] hover:text-[#0F1B2A] font-semibold py-3 px-7 rounded-md transition-all duration-200">
              Contact Us
            </button>
          </a>
        </div>
      </nav>


    </header>
  );
}
