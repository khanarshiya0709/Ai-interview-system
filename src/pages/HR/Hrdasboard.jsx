import React, { useState } from "react";
import Sidebar from '../../components/hr/Sidebar'
import Navbar from "../../components/hr/Navbar";
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { Link } from 'react-router-dom';





const Hrdasboard = () => {
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
                        <h2 className="font-bold text-xl">Total jobs </h2>
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
                        <h2 className="font-bold text-xl">Inteview</h2>
                        <p className="text-2xl font-bold mt-2">2</p>
                    </div>

                </div>

                <div className="mt-6 flex flex-col lg:flex-row gap-6">
                    {/* Left section */}
                    <div className="lg:2/3 w-full">

                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold ">Recent jobs </h2>

                            <div className="flex items-center border rounded-lg overflow-hidden w-full sm:w-72 lg:w-96 bg-white">

                                {/* Icon */}
                                <div className="px-3 text-blue-500">
                                    <FaSearch />
                                </div>

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
                    </div>
                </div>



                {/* Header */}
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 px-8 py-4 bg-white rounded-xl shadow mb-4">

                    <span>Jobs Title</span>

                    <span className="hidden sm:flex justify-center ">Applications</span>

                    <span className="flex justify-center">Information</span>

                    {/* Desktop only */}
                    <span className="hidden sm:flex justify-center">Status</span>

                    <span className="hidden lg:flex justify-center">Date</span>

                </div>

                {/* Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 px-8 py-4 bg-white rounded-xl shadow items-center mb-4">

                    {/* Title */}
                    <span>Java Dev</span>

                    {/* Applications */}
                    <span className="hidden sm:flex justify-center">20</span>

                    {/* View */}
                    <button className="flex justify-center text-blue-600">
                        View
                    </button>

                    {/* Desktop only */}
                    <span className="hidden sm:flex justify-center text-green-600">
                        Active
                    </span>

                    <span className="hidden lg:flex justify-center text-gray-500">
                        26 March
                    </span>
                </div>



                {/* Row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 px-8 py-4 bg-white rounded-xl shadow items-center mb-4">

                    {/* Title */}
                    <span>Java Dev</span>

                    {/* Applications */}
                    <span className="hidden sm:flex justify-center">20</span>

                    {/* View */}
                    <Link
                        to="/applicants"
                        className="flex justify-center text-blue-600">
                        View
                    </Link>

                    {/* Desktop only */}
                    <span className="hidden sm:flex justify-center text-green-600">
                        Active
                    </span>

                    <span className="hidden lg:flex justify-center text-gray-500">
                        26 March
                    </span>
                </div>




                <div className="flex justify-end mt-4">
                    <button className="text-blue-600 font-medium hover:scale-107 transition rounded-xl bg-blue-200 px-4 py-2">
                        View More
                    </button>

                </div>











            </div>
        </>
    )
}

export default Hrdasboard;