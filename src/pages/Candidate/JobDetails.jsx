import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

const JobDetails = () => {

    const navigate = useNavigate();
    const { id } = useParams(); // 🔥 important
    const [showUpload, setShowUpload] = useState(false);
    const [file, setFile] = useState(null);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">

            <button
                onClick={() => navigate(-1)}
                className="mb-4 bg-blue-500 text-white rounded-lg px-4 py-2"
            >
                Back
            </button>

            <div className="bg-white p-6 rounded-xl shadow max-w-3xl mx-auto">

                {/* 🔥 Dynamic ID */}
                <p className="text-sm text-gray-400 mb-2">Job ID: {id}</p>

                <h1 className="text-2xl font-bold">Java Developer</h1>

                <p className="text-gray-500 flex items-center gap-1 mt-2">
                    <FaLocationDot />
                    TechSoft • Mumbai
                </p>

                <p className="text-gray-600 text-sm mt-2">
                    Skills: <span className="font-medium">Java, SQL</span> • 2+ Years Experience
                </p>

                <div className="mt-4">
                    <h2 className="font-semibold text-lg mb-2">Job Description</h2>
                    <p className="text-gray-600 text-sm">
                        We are looking for a skilled Java Developer to build scalable applications.
                    </p>
                </div>

                {/* Apply */}
                <div className="mt-6">

                    {!showUpload ? (
                        <button
                            onClick={() => setShowUpload(true)}
                            className="bg-blue-600 text-white px-5 py-2 rounded-lg"
                        >
                            Apply Your CV
                        </button>
                    ) : (
                        <div className="space-y-2">

                            <input
                                type="file"
                                onChange={(e) => setFile(e.target.files[0])}
                            />

                            {file && (
                                <p className="text-sm text-gray-600">
                                    Selected: {file.name}
                                </p>
                            )}

                            <button
                                onClick={() => setShowUpload(false)}
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