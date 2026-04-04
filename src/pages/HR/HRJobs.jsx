import { Link } from "react-router-dom";

// Fixed: Variable name to match map loop
const jobs = [
    {
        id: 1,
        title: "Senior React Developer",
        company: "TechCorp Inc",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$120K - $160K",
        date: "2024-03-15",
    },
    {
        id: 2,
        title: "Full Stack Engineer",
        company: "StartupXYZ",
        location: "New York, NY",
        type: "Full-time",
        salary: "$100K - $140K",
        date: "2024-03-14",
    },
    {
        id: 3,
        title: "Frontend Specialist",
        company: "DesignStudio",
        location: "Remote",
        type: "Contract",
        salary: "$80K - $120K",
        date: "2024-03-13",
    },
];

const HRJobs = () => {
    return (
        <div className="space-y-6">

            <div>
                <h1 className="text-2xl font-bold">Job Board</h1>
                <p className="text-gray-500">
                    this is your uploaded requirement of the jobs.
                </p>
            </div>

            {/* Jobs Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {jobs.map((job) => (
                    <div key={job.id} className="bg-white p-4 rounded-xl shadow space-y-2">

                        <div className="flex justify-between">
                            <h3 className="font-semibold">{job.title}</h3>
                            <span className="text-blue-600 text-sm">{job.salary}</span>
                        </div>

                        <p className="text-gray-500 text-sm">{job.company}</p>

                        <div className="text-sm text-gray-400">
                            {job.type} • {job.location}
                        </div>

                        <p className="text-sm text-gray-400">{job.date}</p>

                        {/* ✅ FIX: Path corrected from /candidate/jobs/ to /hr/jobs/ */}
                        <Link to={`/hr/jobs/${job.id}`}>
                            <button className="w-full mt-2 bg-blue-600 text-white py-2 rounded-lg">
                                View Details
                            </button>
                        </Link>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default HRJobs;