"use client";

import { useState, useEffect } from "react";
import { Menu, X, Bot } from "lucide-react";

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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-white/90 backdrop-blur-md shadow-sm"
                : "bg-transparent"
                }`}
        >
            <nav className="max-w-6xl mx-auto px-4">
                <div className="flex items-center justify-between h-16 md:h-20">

                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-2">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600">
                            <Bot className="w-6 h-6 text-white" />
                        </div>
                        <span className="text-xl font-bold text-gray-900">AI Hire</span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
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

                    {/* CTA */}
                    <div className="hidden md:block">
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
                            Get Started
                        </button>
                    </div>

                    {/* Mobile Menu Btn */}
                    <button
                        className="md:hidden p-2 text-gray-800"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 border-t bg-white">
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm font-medium text-gray-700 hover:text-blue-600 py-2"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}

                            <button className="bg-blue-600 text-white py-2 rounded-full mt-2">
                                Get Started
                            </button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}