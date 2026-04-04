import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Link } from "react-router-dom";

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

const CandidateJobs = () => {
    return (
        <div className="p-6 space-y-6">

            <div>
                <h1 className="text-2xl font-bold text-slate-900">
                    Job Board
                </h1>
                <p className="text-slate-500">
                    Explore available job opportunities and apply now
                </p>
            </div>

            <div className="flex gap-4">
                <Input
                    placeholder="Search jobs, companies, or locations..."
                    className="bg-white"
                />
                <Button variant="outline">All Types</Button>
            </div>

            <p className="text-slate-600">
                {jobs.length} Jobs Found
            </p>

            <div className="grid md:grid-cols-3 gap-6">
                {jobs.map((job) => (
                    <Card key={job.id} className="p-4 bg-white border-slate-200">

                        <div className="flex justify-between items-start">
                            <div>
                                <h2 className="font-semibold text-slate-900">
                                    {job.title}
                                </h2>
                                <p className="text-sm text-slate-500">
                                    {job.company}
                                </p>
                            </div>

                            <span className="text-blue-600 text-sm font-medium">
                                {job.salary}
                            </span>
                        </div>

                        <div className="text-sm text-slate-500 mt-2 space-y-1">
                            <p>{job.type}</p>
                            <p>{job.location}</p>
                            <p>{job.date}</p>
                        </div>

                        {/* ✅ navigation correct */}
                        <Link to={`/candidate/jobs/${job.id}`}>
                            <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white">
                                View Details
                            </Button>
                        </Link>

                    </Card>
                ))}
            </div>

        </div>
    );
};

export default CandidateJobs;