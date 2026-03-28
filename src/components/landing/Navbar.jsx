"use client";

import { useState, useEffect } from "react";
import { Menu, X, Bot } from "lucide-react";
import { Link } from "react-router-dom";


const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#about", label: "About" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`relative z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/90 backdrop-blur-md shadow-sm"
                : "bg-transparent"
                }`}
        >
            {/* NAV */}
            <nav className="max-w-5xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-16 md:h-20">

                    {/* LOGO (LEFT) */}
                    <a href="#home" className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-blue-600 flex items-center justify-center rounded-xl">
                            <Bot className="text-white" size={20} />
                        </div>
                        <span className="text-lg font-bold text-gray-900">AI Hire</span>
                    </a>

                    {/* CENTER NAV (DESKTOP) */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-gray-700 hover:text-blue-600 transition"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* RIGHT BUTTON */}
                    <div className="hidden md:block">
                        <Link to="/auth">
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                                Get Started
                            </button>
                        </Link>

                    </div>

                    {/* MOBILE BURGER */}
                    <button
                        className="md:hidden p-2 mr-1 text-gray-800"
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <Menu size={26} />
                    </button>
                </div>
            </nav>

            {/* 🔥 MOBILE FULL SCREEN MENU */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center text-center">

                    {/* ❌ CLOSE ICON (TOP RIGHT SAME POSITION) */}
                    <button
                        className="absolute top-5 right-5"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        <X size={28} />
                    </button>

                    {/* CENTER CONTENT */}
                    <div className="flex flex-col items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-2xl font-semibold text-gray-800 hover:text-blue-600"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}

                        {/* BUTTON */}
                        <Link to="/auth">
                            <button className="bg-blue-600 text-white px-8 py-3 rounded-full mt-4 hover:bg-blue-700 transition">
                                Get Started
                            </button>
                        </Link>

                    </div>

                </div>
            )}
        </header>
    );
}