import React from "react";
import { MdHomeFilled } from "react-icons/md";
import { LuUserSearch } from "react-icons/lu";
import { LiaClipboardListSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa";
import { IoClose } from "react-icons/io5";


const Sidebar = ({ open, setOpen }) => {
    return (
        <>
            {/* Overlay (mobile) */}
            {open && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 sm:hidden"
                    onClick={() => setOpen(false)}
                ></div>
            )}

            {/* Sidebar */}
            <div
                className={`
        fixed top-0 left-0 h-screen w-56 sm:w-56 lg:w-64 bg-blue-600 text-white flex flex-col z-50
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}
        sm:translate-x-0
      `}
            >
                {/* Top (Logo + Cross) */}
                <div className="relative flex items-center gap-3 px-9 py-4 text-xl font-bold bg-blue-500">

                    <div className="flex items-center gap-2">
                        <FaRegUser />
                        HR
                    </div>

                    {/* Cross (mobile only) */}
                    <IoClose
                        className="text-4xl cursor-pointer sm:hidden absolute right-4"
                        onClick={() => setOpen(false)}
                    />
                </div>

                {/* Menu */}
                <ul className="flex flex-col p-4 gap-2 text-lg">

                    <li className="flex items-center gap-3 px-4 py-2 hover:bg-blue-500 rounded-lg cursor-pointer">
                        <MdHomeFilled size={24} />
                        Dashboard
                    </li>

                    <li className="flex items-center gap-3 px-4 py-2 hover:bg-blue-500 rounded-lg cursor-pointer">
                        <LuUserSearch size={24} />
                        Recent Job
                    </li>

                    <li className="flex items-center gap-3 px-4 py-2 hover:bg-blue-500 rounded-lg cursor-pointer">
                        <LiaClipboardListSolid size={24} />
                        jobs details
                    </li>

                    <li className="flex items-center gap-3 px-4 py-2 hover:bg-blue-500 rounded-lg cursor-pointer">
                        <LuUserSearch size={24} />
                        Create Jobs
                    </li>

                    <li

                        className="flex items-center gap-3 px-4 py-2 hover:bg-blue-500 rounded-lg cursor-pointer">
                        <LiaClipboardListSolid size={24} />
                        Profile
                    </li>

                </ul>

                {/* Logout */}
                <div className="mt-auto p-4">
                    <button className="w-full bg-blue-500 hover:bg-blue-800 py-2 rounded-lg">
                        Logout
                    </button>
                </div>
            </div>
        </>
    );
};

export default Sidebar;