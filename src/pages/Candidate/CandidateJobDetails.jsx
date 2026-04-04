import { useParams, useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";

const jobs = [
    {
        id: 1,
        title: "Senior React Developer",
        company: "TechCorp Inc",
        location: "San Francisco, CA",
        type: "Full-time",
        salary: "$120K - $160K",
        date: "2024-03-15",
        description:
            "We are looking for an experienced React developer to join our growing team.",
        requirements: [
            "5+ years React experience",
            "Strong TypeScript knowledge",
            "Next.js experience",
        ],
    },
    {
        id: 2,
        title: "Full Stack Engineer",
        company: "StartupXYZ",
        location: "New York, NY",
        type: "Full-time",
        salary: "$100K - $140K",
        date: "2024-03-14",
        description: "Build scalable full stack apps.",
        requirements: ["Node.js", "React", "MongoDB"],
    },
];

const CandidateJobDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // ✅ FIX: id use kar rahe hai
    const job = jobs.find((j) => j.id == id);

    // ✅ safety
    if (!job) {
        return <h1 className="p-6">Job not found</h1>;
    }

    return (
        <div className="p-6 space-y-6">

            <button
                onClick={() => navigate("/candidate/jobs")}
                className="text-slate-600 hover:text-blue-600"
            >
                ← Back to Jobs
            </button>

            <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h1 className="text-2xl font-bold text-slate-900">
                    {job.title}
                </h1>

                <p className="text-slate-500 mt-1">
                    {job.company}
                </p>

                <div className="flex gap-4 mt-4 flex-wrap text-sm">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full">
                        {job.type}
                    </span>

                    <span className="text-slate-600">
                        {job.location}
                    </span>

                    <span className="text-slate-600">
                        Posted: {job.date}
                    </span>

                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">
                        {job.salary}
                    </span>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h2 className="text-lg font-semibold text-slate-900 mb-2">
                    About This Role
                </h2>
                <p className="text-slate-600">
                    {job.description}
                </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200">
                <h2 className="text-lg font-semibold text-slate-900 mb-3">
                    Requirements
                </h2>

                <ul className="space-y-2 text-slate-600">
                    {job.requirements.map((req, i) => (
                        <li key={i} className="flex gap-2">
                            <span className="text-blue-600">•</span>
                            {req}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex items-center gap-4">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
                    Apply Now
                </Button>

                <button className="text-slate-500 hover:text-blue-600">
                    Save Job
                </button>
            </div>

        </div>
    );
};

export default CandidateJobDetails;