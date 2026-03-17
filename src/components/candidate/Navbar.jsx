import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = ({ setOpen, isClick, setIsClick }) => {
    return (
        <div className="ml-0 sm:ml-56 lg:ml-64 h-16 bg-white flex items-center justify-between px-6 shadow sticky top-0 z-30">

            {/* LEFT */}
            <div className="flex items-center gap-4">

                {/* Hamburger */}
                <RxHamburgerMenu
                    className="text-2xl cursor-pointer sm:hidden"
                    onClick={() => setOpen(true)}
                />

                {/* Desktop Search */}
                <div className="hidden sm:flex items-center bg-gray-100 px-3 py-2 rounded-lg w-80">
                    <FaSearch className="mr-2 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search jobs..."
                        className="bg-transparent outline-none w-full"
                    />
                </div>

            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-5">

                {/* Mobile Search */}
                {isClick ? (
                    <div className="flex items-center bg-gray-100 px-3 py-1 rounded-lg sm:hidden">
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-transparent outline-none"
                        />
                        <button
                            className="ml-2"
                            onClick={() => setIsClick(false)}
                        >
                            <FaSearch />
                        </button>
                    </div>
                ) : (
                    <FaSearch
                        className="text-xl sm:hidden cursor-pointer"
                        onClick={() => setIsClick(true)}
                    />
                )}

                {/* Notification */}
                <IoNotifications className="text-2xl cursor-pointer" />

                {/* Profile */}
                <div className="flex items-center gap-2 cursor-pointer">
                    <img
                        src="https://i.pravatar.cc/40"
                        alt="profile"
                        className="w-9 h-9 rounded-full"
                    />
                    <div className="hidden lg:block">
                        <p className="font-medium">Arshiya</p>
                        <p className="text-sm text-gray-500">arshiya@gmail.com</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Navbar;