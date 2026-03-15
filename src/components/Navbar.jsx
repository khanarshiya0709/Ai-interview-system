import { useState } from "react";
import { BiAlignMiddle } from "react-icons/bi";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";




function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-[#F8F3E1] relative">
            {/* NAVBAR */}
            <div
                className="h-16 flex items-center justify-between px-12 max-w-5xl mx-auto">

                {/* Logo */}
                <div
                    className="text-3xl text-black font-bold"
                    style={{ fontFamily: "'Pacifico', cursive" }}
                >
                    logo
                </div>

                {/* Desktop Menu */}
                <div className="hidden sm:flex gap-8 text-xl ">
                    <a href="#" className="text-black inline-block hover:text-[#B923E1] hover:scale-110 transition">Home</a>
                    <a href="#" className="text-black inline-block hover:text-[#B923E1] hover:scale-110 transition">Features</a>
                    <a href="#" className="text-black inline-block hover:text-[#B923E1] hover:scale-110 transition">How it Works</a>
                    <a href="#" className="text-black inline-block hover:text-[#B923E1] hover:scale-110 transition">About</a>


                </div>

                {/* Desktop Button */}
                <Link
                    to="/auth"
                    className="hidden sm:block px-7 py-2 rounded-full bg-black text-white hover:scale-105 transition border-1 border-transparent
                         hover:border-white">
                    Sign Up
                </Link>

                {/* Burger Button (mobile only) */}
                <button
                    onClick={() => setIsOpen(true)}
                    className="block sm:hidden text-3xl text-black z-50"
                >
                    <BiAlignMiddle />
                </button>
            </div>

            {/* MOBILE MENU (FIXED) */}
            {isOpen && (
                <div className="sm:hidden fixed top-0 right-0 w-1/2 h-screen bg-gray-800 z-50">

                    {/* Cross Button */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-4 right-4 text-3xl text-white "
                    >
                        <HiX className="text-4xl font-bold mr-6" />

                    </button>

                    {/* Menu Items */}
                    <div className="pt-20 px-14 space-y-4 text-xl text-white text-right">
                        <a href="#" className="block w-fit ml-auto hover:text-[#B923E1] hover:scale-105 transition origin-center">
                            Home
                        </a>
                        <a href="#" className="block w-fit ml-auto hover:text-[#B923E1] hover:scale-105 transition origin-center">
                            Features
                        </a>
                        <a href="#" className="block w-fit ml-auto hover:text-[#B923E1] hover:scale-105 transition origin-center">
                            How it Works
                        </a>
                        <a href="#" className="block w-fit ml-auto hover:text-[#B923E1] hover:scale-105 transition origin-center">
                            About
                        </a>


                    </div>
                    <div>
                        <Link
                            to="/auth"
                            className="block px-2 py-2 my-4 ml-15 mr-15 rounded-full bg-black text-center text-white hover:scale-105 transition border-1 border-transparent
                         hover:border-white">
                            Sign Up
                        </Link>
                    </div>


                </div>
            )}
        </nav>
    );
}

export default Navbar;
