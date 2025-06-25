"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "@/app/components/Navlink";
import img from '@/app/images/logo.webp';
import Image from "next/image";

function MobileNavigation({ isOpen, toggleMenu }: { isOpen: boolean; toggleMenu: () => void }) {
    return (
        <div className={`fixed inset-0 z-50 bg-color bg-opacity-95 flex flex-col items-center gap-6 justify-center transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 md:hidden`}>
            <button onClick={toggleMenu} className="absolute top-6 right-6 text-white">
                <X size={32} />
            </button>
            <NavLink href="/" className="text-3xl">Home</NavLink>
            <NavLink href="#about" className="text-3xl">Contact</NavLink>
            <NavLink href="#services" className="text-3xl">About</NavLink>
            <NavLink href="#testimonials" className="text-3xl">Testimonials</NavLink>
            <button className="mt-4 bg-[#D09D42] hover:bg-yellow-500 text-[#0F1B2A] font-semibold py-2 px-4 rounded-md border border-black transition">
                Contact Us
            </button>
        </div>
    );
}

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className="bg-[#0F1B2A] text-white py-2">
            <nav className="max-w-screen-xl mx-auto px-4 flex items-center justify-between h-20">
                {/* Logo */}
                <div className="flex-shrink-0">
                    <Image src={img} alt="Logo" width={180} height={60} />
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-10 text-xl">
                    <NavLink href="/" className="hover:text-[#D09D42] transition">Home</NavLink>
                    <NavLink href="#about" className="hover:text-[#D09D42] transition">About</NavLink>
                    <NavLink href="#services" className="hover:text-[#D09D42] transition">Services</NavLink>
                    <NavLink href="#testimonials" className="hover:text-[#D09D42] transition">Testimonials</NavLink>
                </div>

                {/* CTA Button (Desktop Only) */}
                <div className="hidden md:block">
                    <a href="#contact">
                    <button className="bg-transparent border-2 border-[#D09D42] text-[#D09D42] hover:bg-[#D09D42] hover:text-[#0F1B2A] font-semibold py-2 px-5 rounded-md transition-all duration-200">
                        Contact Us
                    </button>
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu}>
                        <Menu size={32} />
                    </button>
                </div>

                {/* Mobile Navigation */}
                <MobileNavigation isOpen={menuOpen} toggleMenu={toggleMenu} />
            </nav>
        </header>
    );
}
