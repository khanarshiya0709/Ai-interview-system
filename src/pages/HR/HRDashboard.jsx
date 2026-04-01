import { StatCard } from "../../components/hr/StatCard";
import { Card } from "../../components/ui/card";
import { mockJobs, mockCandidates } from "../../lib/mock-data";

const HRDashboard = () => {
    return (
        <div className="p-6 space-y-6">

            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <p className="text-muted-foreground">
                    Welcome back! Here's what's happening.
                </p>
            </div>

            {/* Stats */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <StatCard label="Total Jobs" value="12" change={10} trend="up" />
                <StatCard label="Applications" value="50" change={5} trend="up" />
                <StatCard label="Shortlisted" value="20" change={-2} trend="down" />
                <StatCard label="Interviews" value="8" change={3} trend="up" />
            </div>

            {/* MAIN SECTION */}
            <div className="grid lg:grid-cols-3 gap-6">

                {/* LEFT - RECENT JOBS */}
                <div className="lg:col-span-2 space-y-4">

                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold">Recent Jobs</h2>
                        <span className="text-sm text-muted-foreground cursor-pointer">
                            View all →
                        </span>
                    </div>

                    {mockJobs.slice(0, 3).map((job) => (
                        <Card key={job.id} className="p-4 flex justify-between">

                            <div>
                                <h3 className="font-semibold">{job.title}</h3>

                                <p className="text-sm text-muted-foreground">
                                    {job.department} • {job.location}
                                </p>

                                <p className="text-sm text-muted-foreground mt-2">
                                    {job.status} • {job.applicants} apps
                                </p>
                            </div>

                            <div className="text-right">
                                <p className="font-semibold">{job.salary}</p>
                                <p className="text-sm text-muted-foreground">
                                    {job.type}
                                </p>
                            </div>

                        </Card>
                    ))}

                </div>

                {/* RIGHT - RECENT CANDIDATES */}
                <div className="space-y-4">

                    <h2 className="text-lg font-semibold">Recent Candidates</h2>

                    {mockCandidates.slice(0, 3).map((c) => (
                        <Card key={c.id} className="p-4 flex justify-between">

                            <div>
                                <h3 className="font-semibold">{c.name}</h3>

                                <p className="text-sm text-muted-foreground">
                                    {c.position}
                                </p>

                                <p className="text-sm text-muted-foreground mt-2">
                                    {c.status}
                                </p>
                            </div>

                            <div className="text-right">
                                <p className="text-sm text-muted-foreground">CV</p>
                                <p className="font-bold">{c.cvScore || 0}%</p>
                            </div>

                        </Card>
                    ))}

                </div>

            </div>

        </div>
    );
};

export default HRDashboard;