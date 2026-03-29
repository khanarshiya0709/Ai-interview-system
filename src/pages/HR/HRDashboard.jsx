import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const user = JSON.parse(localStorage.getItem("user"));

const HRDashboard = () => {

    return (
        <div className="ml-59 bg-gray-100 min-h-screen">

            {/* 🔥 Welcome */}
            <h1 className="text-2xl font-bold">
                Welcome back, {user?.username} 👋
            </h1>
            <p className="mb-6">
                Ready to explore new Job opportunities?
            </p>

            {/* 🔥 Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-white">

                <div className="bg-yellow-400 p-4 rounded-xl shadow hover:scale-105 transition">
                    <h2 className="font-bold text-xl">Total Jobs</h2>
                    <p className="text-2xl font-bold mt-2">12</p>
                </div>

                <div className="bg-purple-400 p-4 rounded-xl shadow hover:scale-105 transition">
                    <h2 className="font-bold text-xl">Shortlisted</h2>
                    <p className="text-2xl font-bold mt-2">5</p>
                </div>

                <div className="bg-blue-400 p-4 rounded-xl shadow hover:scale-105 transition">
                    <h2 className="font-bold text-xl">Rejected</h2>
                    <p className="text-2xl font-bold mt-2">3</p>
                </div>

                <div className="bg-pink-400 p-4 rounded-xl shadow hover:scale-105 transition">
                    <h2 className="font-bold text-xl">Interview</h2>
                    <p className="text-2xl font-bold mt-2">2</p>
                </div>

            </div>

            {/* 🔥 Recent Jobs Header */}
            <div className="mt-6 flex flex-col lg:flex-row gap-6">

                <div className="w-full">

                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold">Recent Jobs</h2>

                        {/* 🔥 Search */}
                        <div className="flex items-center border rounded-lg overflow-hidden w-full sm:w-72 lg:w-96 bg-white">
                            <div className="px-3 text-blue-500">
                                <FaSearch />
                            </div>

                            <input
                                type="text"
                                placeholder="Search jobs..."
                                className="w-full py-2 outline-none"
                            />

                            <button className="bg-blue-600 text-white px-4 py-2 hover:bg-blue-800 transition">
                                Search
                            </button>
                        </div>
                    </div>

                </div>
            </div>

            {/* 🔥 Table Header */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 px-8 py-4 bg-white rounded-xl shadow mb-4">
                <span>Job Title</span>
                <span className="hidden sm:flex justify-center">Applications</span>
                <span className="flex justify-center">Info</span>
                <span className="hidden sm:flex justify-center">Status</span>
                <span className="hidden lg:flex justify-center">Date</span>
            </div>

            {/* 🔥 Row 1 */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 px-8 py-4 bg-white rounded-xl shadow items-center mb-4">

                <span>Java Dev</span>

                <span className="hidden sm:flex justify-center">20</span>

                <Link to="/hr/applicants" className="flex justify-center text-blue-600">
                    View
                </Link>

                <span className="hidden sm:flex justify-center text-green-600">
                    Active
                </span>

                <span className="hidden lg:flex justify-center text-gray-500">
                    26 March
                </span>

            </div>

            {/* 🔥 Row 2 */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 px-8 py-4 bg-white rounded-xl shadow items-center mb-4">

                <span>Frontend Dev</span>

                <span className="hidden sm:flex justify-center">15</span>

                <Link to="/hr/applicants" className="flex justify-center text-blue-600">
                    View
                </Link>

                <span className="hidden sm:flex justify-center text-green-600">
                    Active
                </span>

                <span className="hidden lg:flex justify-center text-gray-500">
                    25 March
                </span>

            </div>

            {/* 🔥 View More */}
            <div className="flex justify-end mt-4">
                <button className="text-blue-600 font-medium hover:scale-105 transition bg-blue-200 px-4 py-2 rounded-xl">
                    View More
                </button>
            </div>

        </div>
    );
};

export default HRDashboard;