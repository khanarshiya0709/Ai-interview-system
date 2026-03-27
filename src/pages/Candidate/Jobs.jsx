import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

const Jobs = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">

            <h1 className="text-2xl font-bold mb-6">All Jobs</h1>

            <div className="space-y-4">

                <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center">

                    <div>
                        <h3 className="font-bold">Java Developer</h3>

                        <p className="text-gray-500 flex items-center gap-1">
                            <FaLocationDot /> TechSoft • Mumbai
                        </p>

                        <p className="text-sm text-gray-600">
                            Java, SQL • 2+ Years
                        </p>
                    </div>

                    <Link
                        to="/candidate/jobs/1"
                        className="bg-blue-600 text-white px-4 py-2 rounded"
                    >
                        Apply
                    </Link>

                </div>

            </div>

        </div>
    );
};

export default Jobs;