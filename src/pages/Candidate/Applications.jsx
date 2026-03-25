import React from "react";

const Applications = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">

            <h1 className="text-2xl font-bold mb-6">Application History</h1>

            <div className="space-y-4">

                {/* Card */}
                <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
                    <div>
                        <h3 className="font-semibold">Java Developer</h3>
                        <p className="text-sm text-gray-500">TechSoft • Mumbai</p>
                    </div>
                    <span className="text-yellow-500 font-medium">Pending</span>
                </div>

                <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
                    <div>
                        <h3 className="font-semibold">Frontend Developer</h3>
                        <p className="text-sm text-gray-500">InnoTech • Pune</p>
                    </div>
                    <span className="text-green-600 font-medium">Selected</span>
                </div>

                <div className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
                    <div>
                        <h3 className="font-semibold">Backend Developer</h3>
                        <p className="text-sm text-gray-500">CodeX • Delhi</p>
                    </div>
                    <span className="text-red-500 font-medium">Rejected</span>
                </div>

            </div>

        </div>
    );
};

export default Applications;