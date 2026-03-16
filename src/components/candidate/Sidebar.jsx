import React from 'react'
import { FaRegUser } from "react-icons/fa";
import { MdHomeFilled } from "react-icons/md";
import { LuUserSearch } from "react-icons/lu";
import { LiaClipboardListSolid } from "react-icons/lia";





const Sidebar = () => {
    return (
        <div className='h-screen   sm:64 bg-blue-600 text-white hidden sm:flex flex-col fixed left-0 top-0'>

            {/* logo and title */}
            <div className='flex gap-2 items-center justify-center text-xl font-bold p-2 border-b border-blue-400'>
                <FaRegUser />
                Candidate
            </div>

            {/* Menu */}
            <ul className=' justify-start flex flex-col  p-4 text-lg'>
                <li className='hover:bg-blue-500 px-2 py-2 rounded-xl cursor-pointer flex gap-2 items-center'>
                    <MdHomeFilled className='text-xl sm:text-2xl' />
                    Dashboard
                </li>

                <li className='hover:bg-blue-500 px-2 py-2 rounded-xl cursor-pointer flex gap-2 items-center'>
                    <LuUserSearch className='text-xl sm:text-2xl' />


                    Jobs
                </li>

                <li className='hover:bg-blue-500 px-2 py-2 rounded-xl cursor-pointer flex gap-2 items-center'>
                    <LiaClipboardListSolid className='text-xl sm:text-2xl' />
                    Applications
                </li>

                <li className='hover:bg-blue-500 px-2 py-2 rounded-xl cursor-pointer flex gap-2 items-center'>
                    <LuUserSearch className='text-xl sm:text-2xl' />
                    Ai interview
                </li>

                <li className='hover:bg-blue-500 px-2 py-2 rounded-xl cursor-pointer flex gap-2 items-center'>
                    <LiaClipboardListSolid className='text-xl sm:text-2xl' />
                    Profile
                </li>


            </ul>
            {/* logout btn */}
            <div className='mt-auto p-6'>
                <button className='bg-blue-500 hover:bg-blue-900 p-2 rounded-xl w-full'>
                    Logout
                </button>
            </div>

        </div>
    )
}

export default Sidebar;