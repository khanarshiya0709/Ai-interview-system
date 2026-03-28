import { Bot } from "lucide-react";

const footerLinks = [
    { href: "#home", label: "Home" },
    { href: "#features", label: "Features" },
    { href: "#about", label: "About" },
];

export default function Footer() {
    return (
        <footer className="py-10 bg-white border-t">
            <div className="max-w-6xl mx-auto px-4">

                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-2">
                        <div className="w-10 h-10 bg-blue-600 flex items-center justify-center rounded-xl">
                            <Bot className="text-white" size={20} />
                        </div>
                        <span className="text-xl font-bold text-gray-900">AI Hire</span>
                    </a>

                    {/* Links */}
                    <nav className="flex gap-6">
                        {footerLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm text-gray-600 hover:text-blue-600 transition"
                            >
                                {link.label}
                            </a>
                        ))}
                    </nav>

                    {/* Info */}
                    <p className="text-sm text-gray-500 text-center">
                        Final Year Project – AI Interview System
                    </p>
                </div>

                {/* Bottom */}
                <div className="mt-8 pt-6 border-t text-center">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} AI Hire. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
}