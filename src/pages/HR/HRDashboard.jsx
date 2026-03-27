import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const HRDashboard = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">

            <h1 className="text-2xl font-bold">
                Welcome back, Arshiya 👋
            </h1>

            <p className="mb-6">Manage your job postings efficiently</p>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-white">

                <div className="bg-yellow-400 p-4 rounded-xl">
                    <h2>Total Jobs</h2>
                    <p className="text-xl mt-2">12</p>
                </div>

                <div className="bg-purple-400 p-4 rounded-xl">
                    <h2>Shortlisted</h2>
                    <p className="text-xl mt-2">5</p>
                </div>

                <div className="bg-blue-400 p-4 rounded-xl">
                    <h2>Rejected</h2>
                    <p className="text-xl mt-2">3</p>
                </div>

                <div className="bg-pink-400 p-4 rounded-xl">
                    <h2>Interviews</h2>
                    <p className="text-xl mt-2">2</p>
                </div>

            </div>

            {/* Search */}
            <div className="mt-6 flex justify-between items-center">
                <h2 className="text-xl font-semibold">Recent Jobs</h2>

                <div className="flex items-center bg-white rounded-lg px-3">
                    <FaSearch />
                    <input
                        type="text"
                        placeholder="Search jobs..."
                        className="ml-2 py-2 outline-none"
                    />
                </div>
            </div>

            {/* Table Header */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 px-6 py-4 bg-white rounded-xl shadow mt-4">

                <span>Job Title</span>
                <span className="hidden sm:flex justify-center">Applications</span>
                <span className="flex justify-center">View</span>
                <span className="hidden sm:flex justify-center">Status</span>
                <span className="hidden lg:flex justify-center">Date</span>

            </div>

            {/* Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 px-6 py-4 bg-white rounded-xl shadow mt-2">

                <span>Java Dev</span>
                <span className="hidden sm:flex justify-center">20</span>

                <Link
                    to="/hr/applicants"
                    className="text-blue-600 text-center"
                >
                    View
                </Link>

                <span className="hidden sm:flex justify-center text-green-600">
                    Active
                </span>

                <span className="hidden lg:flex justify-center text-gray-500">
                    26 March
                </span>

            </div>

        </div>
    );
};

export default HRDashboard;