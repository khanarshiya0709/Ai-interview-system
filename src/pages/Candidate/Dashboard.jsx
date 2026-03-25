import React, { useState } from "react";
import Sidebar from '../../components/candidate/Sidebar'
import Navbar from "../../components/candidate/Navbar";
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';





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

                            <div className="flex items-center border rounded-lg overflow-hidden w-full sm:w-72 lg:w-96 bg-white">

                                {/* Icon */}
                                <div className="px-3 text-blue-500"><FaSearch /></div>

                                {/* Input */}
                                <input
                                    type="text"
                                    placeholder="Search jobs..."
                                    className="w-full py-2 outline-none"
                                />

                                {/* Button */}
                                <button className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-800 transition">
                                    Search
                                </button>

                            </div>
                        </div>

                        <div className="flex items-center gap-6 mt-4 text-gray-600 text-medium rounded-xl bg-white shadow-lg py-2 px-4 mb-4 overflow-x-auto whitespace-nowrap no-scrollbar">

                            <button className="flex items-center  text-blue-600 font-medium border-r pr-3">
                                All
                            </button>

                            <button className="hover:text-blue-600">IT</button>
                            <button className="hover:text-blue-600">Design</button>
                            <button className="hover:text-blue-600">Marketing</button>
                            <button className="hover:text-blue-600">Business</button>
                            <button className="flex-shrink-0 hover:text-blue-600">Business</button>
                            <button className="flex-shrink-0 hover:text-blue-600">HR</button>
                            <button className="flex-shrink-0 hover:text-blue-600">Finance</button>
                            <button className="flex-shrink-0 hover:text-blue-600">Sales</button>


                        </div>


                        {/* JOb cards */}
                        <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center">

                            {/* LEFT SIDE */}
                            <div>

                                {/* Title + badge */}
                                <div className="flex items-center gap-3">
                                    <h4 className="font-bold text-lg">Java Developer</h4>


                                </div>

                                {/* Company + Location */}
                                <p className="text-gray-500 flex items-center gap-1 mt-1">
                                    <FaLocationDot />
                                    TechSoft • Mumbai
                                </p>

                                {/* Experience + Skills */}
                                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-gray-600 text-sm mt-1">

                                    {/* Skills FIRST (mobile me upar) */}
                                    <p>
                                        Skills: <span className="font-medium">Java, SQL</span>
                                    </p>

                                    {/* Experience */}
                                    <p>
                                        2+ Years Experience
                                    </p>

                                </div>

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
                            <Link

                                to="/job-details"
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                                Detail
                            </Link>

                        </div>

                        <div className="flex justify-end mt-4">
                            <Link to="/jobss" className="text-blue-600 font-medium hover:scale-107 transition rounded-xl bg-blue-200 px-4 py-2">
                                View More
                            </Link>
                        </div>
                    </div>



                    {/* RIGHT SECTION */}
                    <div className="lg:w-1/3 w-full space-y-4">

                        {/* AI Interview */}
                        <div className="bg-white p-4 rounded-xl shadow">
                            <h3 className="font-semibold">AI Interview Ready 🤖</h3>
                            <p className="text-gray-500 text-sm mt-1">
                                Start your interview and get instant feedback
                            </p>
                            <button className="mt-2 bg-blue-600 text-white px-3 py-1 rounded">
                                Start
                            </button>
                        </div>

                        {/* Application History */}
                        <div className="bg-white p-4 rounded-xl shadow">
                            <div className="flex justify-between items-center mb-2">
                                <h3 className="font-semibold ">Application History</h3>

                                <Link
                                    to="/applications"
                                    className="text-blue-500 text-medium hover:scale-110 transition">
                                    View all
                                </Link>


                            </div>

                            <div className="flex justify-between">
                                <p>Java Developer</p>
                                <span className="text-yellow-500">Pending</span>
                            </div>

                            <div className="flex justify-between">
                                <p>Frontend Developer</p>
                                <span className="text-green-600">Selected</span>
                            </div>

                            <div className="flex justify-between">
                                <p>Backend Developer</p>
                                <span className="text-red-500">Rejected</span>
                            </div>



                        </div>
                    </div>




                </div>
            </div >



        </>
    )
}

export default Dashboard