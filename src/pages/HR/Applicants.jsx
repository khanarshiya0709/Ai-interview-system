import React from "react";
import { useNavigate } from "react-router-dom";

const Applicants = () => {
    const navigate = useNavigate();

    return (
        <div className="p-6 min-h-screen max-w-3xl mx-auto ">

            {/* Back Button */}
            <button
                onClick={() => navigate(-1)}
                className="mb-4 text-blue-600"
            >
                ← Back
            </button>

            {/* Title */}
            <h1 className="text-2xl font-bold mb-6">
                Java Developer - Applicants
            </h1>

            {/* Applicants List */}
            <div className="space-y-4">

                {/* Card 1 */}
                <div className="bg-white p-4 rounded-xl shadow-xl flex justify-between items-center">

                    {/* Left */}
                    <div className="flex items-center gap-4">

                        <img
                            src="https://i.pravatar.cc/40"
                            alt="profile"
                            className="w-10 h-10 rounded-full"
                        />

                        <div>
                            <h3 className="font-semibold">Arshiya Khan</h3>
                            <p className="text-sm text-gray-500">
                                arshiya@gmail.com
                            </p>
                        </div>

                    </div>

                    {/* Right */}
                    <button className="bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-700">
                        Result
                    </button>

                </div>

                {/* Card 2 */}
                <div className="bg-white p-4 rounded-xl shadow-xl flex justify-between items-center">

                    <div className="flex items-center gap-4">
                        <img
                            src="https://i.pravatar.cc/41"
                            alt="profile"
                            className="w-10 h-10 rounded-full"
                        />

                        <div>
                            <h3 className="font-semibold">Aman Sharma</h3>
                            <p className="text-sm text-gray-500">
                                aman@gmail.com
                            </p>
                        </div>
                    </div>

                    <button className="bg-blue-600 text-white px-4 py-1 rounded-lg hover:bg-blue-700">
                        Result
                    </button>

                </div>

            </div>

        </div>
    );
};

export default Applicants;