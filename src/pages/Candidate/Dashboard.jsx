import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
const user = JSON.parse(localStorage.getItem("user"));

const Dashboard = () => {


    return (
        <div className="p-6 bg-gray-100 min-h-screen">

            <h1 className="text-2xl font-bold">
                Welcome back, {user?.username} 👋
            </h1>
            <p className="mb-6">Ready to explore new job opportunities?</p>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-white">

                <div className="bg-yellow-400 p-4 rounded-xl">
                    <h2 className="font-bold">Pending</h2>
                    <p className="text-xl mt-2">12</p>
                </div>

                <div className="bg-purple-400 p-4 rounded-xl">
                    <h2 className="font-bold">Shortlisted</h2>
                    <p className="text-xl mt-2">5</p>
                </div>

                <div className="bg-blue-400 p-4 rounded-xl">
                    <h2 className="font-bold">Rejected</h2>
                    <p className="text-xl mt-2">3</p>
                </div>

                <div className="bg-pink-400 p-4 rounded-xl">
                    <h2 className="font-bold">Completed</h2>
                    <p className="text-xl mt-2">2</p>
                </div>

            </div>

            {/* Jobs */}
            <div className="mt-6">

                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Find Jobs</h2>

                    <div className="flex items-center bg-white rounded-lg px-3">
                        <FaSearch />
                        <input
                            type="text"
                            placeholder="Search jobs..."
                            className="ml-2 py-2 outline-none"
                        />
                    </div>
                </div>

                {/* Job Card */}
                <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center">

                    <div>
                        <h4 className="font-bold">Java Developer</h4>

                        <p className="text-gray-500 flex items-center gap-1">
                            <FaLocationDot /> TechSoft • Mumbai
                        </p>

                        <p className="text-sm text-gray-600">
                            Java, SQL • 2+ Years
                        </p>
                    </div>

                    <Link
                        to="/candidate/jobs/1"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg"
                    >
                        View
                    </Link>

                </div>

                <div className="mt-4 text-right">
                    <Link to="/candidate/jobs" className="text-blue-600">
                        View More
                    </Link>
                </div>

            </div>

        </div>
    );
};

export default Dashboard;