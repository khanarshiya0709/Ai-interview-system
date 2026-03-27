const Applications = () => {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">

            <h1 className="text-2xl font-bold mb-6">Application History</h1>

            <div className="space-y-4">

                {[
                    { role: "Java Developer", company: "TechSoft • Mumbai", status: "Pending", color: "text-yellow-500" },
                    { role: "Frontend Developer", company: "InnoTech • Pune", status: "Selected", color: "text-green-600" },
                    { role: "Backend Developer", company: "CodeX • Delhi", status: "Rejected", color: "text-red-500" },
                ].map((job, index) => (
                    <div key={index} className="bg-white p-4 rounded-xl shadow flex justify-between">

                        <div>
                            <h3 className="font-semibold">{job.role}</h3>
                            <p className="text-sm text-gray-500">{job.company}</p>
                        </div>

                        <span className={job.color}>{job.status}</span>

                    </div>
                ))}

            </div>

        </div>
    );
};

export default Applications;