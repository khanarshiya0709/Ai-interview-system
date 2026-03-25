import React, { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";


const JobDetails = () => {

    const navigate = useNavigate();
    const [showUpload, setShowUpload] = useState(false);
    const [file, setFile] = useState(null);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">

            <button
                onClick={() => navigate(-1)}
                className="mb-4 bg-blue-500 text-white rounded-xl py-2 px-6 hover:bg-blue-800 transition">
                Back
            </button>

            <div className="bg-white p-6 rounded-xl shadow max-w-3xl mx-auto">

                {/* Title */}
                <h1 className="text-2xl font-bold">Java Developer</h1>

                {/* Company + Location */}
                <p className="text-gray-500 flex items-center gap-1 mt-2">
                    <FaLocationDot />
                    TechSoft • Mumbai
                </p>

                {/* Skills + Experience */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-gray-600 text-sm mt-2">

                    <p>
                        Skills: <span className="font-medium">Java, SQL</span>
                    </p>

                    <span className="hidden sm:inline">•</span>

                    <p>
                        2+ Years Experience
                    </p>

                </div>

                {/* Description */}
                <div className="mt-4">
                    <h2 className="font-semibold text-lg mb-2">Job Description</h2>

                    <p className="text-gray-600 text-sm leading-6">
                        We are looking for a skilled Java Developer who can build scalable applications.
                        You will work with backend systems, APIs, and databases.
                    </p>
                </div>

                {/* Apply Button */}
                <div>
                    {!showUpload ? (
                        <button
                            onClick={() => setShowUpload(true)}
                            className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                            Apply Your CV
                        </button>

                    ) : (
                        <div>
                            <input
                                type="file"
                                className="block"
                                onChange={(e) => setFile(e.target.files[0])}
                            />
                            {file && (
                                <p className="text-sm text-gray-600">
                                    Selected: {file.name}
                                </p>
                            )}
                            <button
                                className="bg-green-600 text-white px-4 py-2 rounded"

                            >
                                Upload CV
                            </button>
                        </div>

                    )}

                </div>


            </div>

        </div>
    );
};

export default JobDetails;