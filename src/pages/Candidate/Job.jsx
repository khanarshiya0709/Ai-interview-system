import React from "react";
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";

const Job = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">

            {/* Heading */}
            <h1 className="text-2xl font-bold mb-6">All Jobs</h1>

            {/* Jobs List */}
            <div className="space-y-4">

                {/* Job Card */}
                <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center">

                    {/* LEFT */}
                    <div>
                        <h3 className="font-bold text-lg">Java Developer</h3>

                        <p className="text-gray-500 flex items-center gap-1 mt-1">
                            <FaLocationDot />
                            TechSoft • Mumbai
                        </p>



                        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-gray-600 text-sm mt-1">

                            {/* Skills FIRST (mobile me upar) */}
                            <p>
                                Skills: <span className="font-medium mb-2">Java, SQL</span>
                            </p>

                            {/* Experience */}
                            <p>
                                2+ Years Experience
                            </p>

                        </div>

                    </div>

                    {/* RIGHT */}
                    <Link
                        to="/job-details"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                    >
                        Apply Now
                    </Link>

                </div>

                {/* Duplicate (2nd job) */}
                <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center">

                    <div>
                        <h3 className="font-bold text-lg">Frontend Developer</h3>

                        <p className="text-gray-500 flex items-center gap-1 mt-1">
                            <FaLocationDot />
                            InnoTech • Pune
                        </p>

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

                    <Link
                        to="/job-details"
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                    >
                        Apply Now
                    </Link>

                </div>

            </div>

        </div>
    );
};

export default Job;