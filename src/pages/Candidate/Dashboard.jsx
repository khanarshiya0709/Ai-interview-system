import React, { useState } from "react";
import Sidebar from '../../components/candidate/Sidebar'
import Navbar from "../../components/candidate/Navbar";
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";




const Dashboard = () => {
    const [open, setOpen] = useState(false);
    const [isClick, setIsClick] = useState(false);

    return (
        <>
            <Sidebar open={open} setOpen={setOpen} />
            <Navbar setOpen={setOpen}
                isClick={isClick}
                setIsClick={setIsClick}
            />

            <div className="p-6 sm:ml-56 lg:ml-64 bg-gray-100 min-h-screen">

                {/* Welcome Text */}
                <h1 className="text-2xl font-bold ">
                    Welcome back, Arshiya 👋
                </h1>
                <p className="mb-6"> Ready to explore new Job opportunities?</p>


                {/* Cards Section */}
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 justify-start text-white">

                    {/* Card 1 */}
                    <div className="bg-yellow-400 p-4 rounded-xl shadow-lg  hover:scale-105 transition ">
                        <h2 className="font-bold text-xl">Pending </h2>
                        <p className="text-2xl font-bold mt-2">12</p>


                    </div>

                    {/* Card 2 */}
                    <div className="bg-purple-400 p-4 rounded-xl shadow-lg  hover:scale-105 transition">
                        <h2 className="font-bold text-xl">Shortlisted</h2>
                        <p className="text-2xl font-bold mt-2">5</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-blue-400 p-4 rounded-xl shadow-lg  hover:scale-105 transition">
                        <h2 className="font-bold text-xl">Rejected</h2>
                        <p className="text-2xl font-bold mt-2">3</p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-pink-400 p-4 rounded-xl shadow-lg  hover:scale-105 transition">
                        <h2 className="font-bold text-xl">Completed</h2>
                        <p className="text-2xl font-bold mt-2">2</p>
                    </div>

                </div>

                <div className="mt-6 flex flex-col lg:flex-row gap-6">
                    {/* Left section */}
                    <div className="lg:2/3 w-full">

                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold ">Find JObs</h2>

                            <div className="flex items-center bg-gray-300 px-3 py-1 rounded-lg gap-2 sm:w-70 lg:w-100">
                                <FaSearch />
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className=" px-3 py-2 border border-gray-300 rounded-l-lg outline-none"
                                />
                            </div>


                        </div>


                        {/* JOb cards */}
                        <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center">

                            {/* LEFT SIDE */}
                            <div>

                                {/* Title + badge */}
                                <div className="flex items-center gap-3">
                                    <h4 className="font-bold text-lg">Java Developer</h4>

                                    <span className="bg-blue-100 text-blue-600 text-sm px-2 py-1 rounded-full">
                                        AI-Powered Interview
                                    </span>
                                </div>

                                {/* Company + Location */}
                                <p className="text-gray-500 flex items-center gap-1 mt-1">
                                    <FaLocationDot />
                                    TechSoft • Mumbai
                                </p>

                                {/* Experience + Skills */}
                                <p className="text-gray-600 mt-1 text-sm">
                                    2+ Years • Experience • Skills: <span className="font-medium">Java, SQL</span>
                                </p>

                            </div>

                            {/* RIGHT SIDE BUTTON */}
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                                Apply Now
                            </button>

                        </div>

                        {/* 2 card */}

                        <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center mt-4">

                            {/* LEFT SIDE */}
                            <div>

                                {/* Title + badge */}
                                <div className="flex items-center gap-3">
                                    <h4 className="font-bold text-lg">Java Developer</h4>

                                    <span className="bg-blue-100 text-blue-600 text-sm px-2 py-1 rounded-full">
                                        AI-Powered Interview
                                    </span>
                                </div>

                                {/* Company + Location */}
                                <p className="text-gray-500 flex items-center gap-1 mt-1">
                                    <FaLocationDot />
                                    TechSoft • Mumbai
                                </p>

                                {/* Experience + Skills */}
                                <p className="text-gray-600 mt-1 text-sm">
                                    2+ Years • Experience • Skills: <span className="font-medium">Java, SQL</span>
                                </p>

                            </div>

                            {/* RIGHT SIDE BUTTON */}
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                                Apply Now
                            </button>

                        </div>

                        <div className="flex justify-end mt-4">
                            <button className="text-blue-600 font-medium hover:scale-107 transition rounded-xl bg-blue-200 px-4 py-2">
                                View More
                            </button>
                        </div>


                    </div>

                </div>











            </div >



        </>
    )
}

export default Dashboard