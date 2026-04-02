import { StatCard } from "../../components/hr/StatCard";
import { Card } from "../../components/ui/card";
import { mockJobs, mockCandidates } from "../../lib/mock-data";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const HRDashboard = () => {
    const user = { name: "Arshiya" }

    return (
        <div className="space-y-6">

            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold text-slate-900">
                    Welcome, {user.name}
                </h1>
                <p className="text-slate-500">
                    Welcome back! Here's what's happening.
                </p>
            </div>

            {/* Stats - Grid structure is untouched */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <StatCard label="Total Jobs" value="12" />
                <StatCard label="Applications" value="50" />
                <StatCard label="Shortlisted" value="20" />
                <StatCard label="Interviews" value="8" />
            </div>

            {/* MAIN SECTION */}
            <div className="grid lg:grid-cols-3 gap-6">

                {/* LEFT - RECENT JOBS */}
                <div className="lg:col-span-2 space-y-4">

                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold text-slate-900">Recent Jobs</h2>
                        <Link
                            to="/hr/jobs"
                            className="text-sm text-blue-600 font-medium cursor-pointer flex gap-2 items-center mr-2 hover:text-blue-700 transition-colors"
                        >
                            View all <FaArrowRight className="text-sm" />
                        </Link>
                    </div>

                    {mockJobs.slice(0, 3).map((job) => (
                        <Card key={job.id} className="p-5 flex justify-between bg-white border-slate-200 shadow-sm hover:border-blue-200 transition-all">

                            {/* LEFT */}
                            <div>
                                <h3 className="text-lg font-bold text-slate-900">{job.title}</h3>

                                <p className="text-sm text-slate-500 mt-1 font-medium">
                                    {job.department} <span className="text-slate-300 mx-1">•</span> {job.location}
                                </p>

                                <div className="flex items-center gap-3 mt-2">
                                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                                        {job.status}
                                    </span>
                                    <span className="text-sm text-slate-500">
                                        {job.applicants} applicants
                                    </span>
                                </div>
                            </div>

                            {/* RIGHT */}
                            <div className="text-right flex flex-col pr-4">
                                <p className="text-base font-bold text-blue-600">{job.salary}</p>

                                <p className="text-sm text-slate-500 font-medium">
                                    {job.type}
                                </p>
                            </div>

                        </Card>
                    ))}

                </div>

                {/* RIGHT - RECENT CANDIDATES */}
                <div className="space-y-4">

                    <h2 className="text-lg font-semibold text-slate-900">Recent Candidates</h2>

                    {mockCandidates.slice(0, 3).map((c) => (
                        <Card key={c.id} className="p-4 flex justify-between bg-white border-slate-200 shadow-sm hover:border-blue-200 transition-all">

                            <div className="space-y-1">
                                <h3 className="font-semibold text-slate-900">{c.name}</h3>

                                <p className="text-sm text-slate-500">
                                    {c.position}
                                </p>

                                <p className="text-xs font-medium text-blue-600 mt-2 bg-blue-50 w-fit px-2 py-0.5 rounded">
                                    {c.status}
                                </p>
                            </div>

                            <div className="text-right">
                                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">CV Score</p>
                                <p className="text-xl font-bold text-blue-600">{c.cvScore || 0}%</p>
                            </div>

                        </Card>
                    ))}

                </div>

            </div>

        </div>
    );
};

export default HRDashboard;