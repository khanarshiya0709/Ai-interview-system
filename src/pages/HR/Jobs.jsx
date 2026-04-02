import { Link } from "react-router-dom";
import { Card } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { mockJobs } from '../../lib/mock-data';
import { ArrowRight, Briefcase, MapPin, Clock, Users } from 'lucide-react';

const Jobs = () => {
    const openJobs = mockJobs.filter((job) => job.status === 'open');
    const closedJobs = mockJobs.filter((job) => job.status !== 'open');

    return (
        <div className="space-y-8">

            {/* Page Header */}
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Open Positions</h1>
                    <p className="text-slate-500 mt-1">
                        Manage and track all job openings
                    </p>
                </div>

                <Link to="/hr/create-job">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-100">
                        <Briefcase className="mr-2 w-4 h-4" />
                        Post New Job
                    </Button>
                </Link>
            </div>

            {/* Active Postings Section */}
            <div>
                <h2 className="text-xl font-bold mb-4 text-slate-900">
                    Active Postings ({openJobs.length})
                </h2>

                <div className="space-y-4">
                    {openJobs.map((job) => (
                        <Card key={job.id} className="p-6 bg-white border-slate-200 hover:shadow-md hover:border-blue-200 transition-all">

                            <div className="flex justify-between gap-4">

                                <div className="flex-1">
                                    <Link to={`/hr/jobs/${job.id}`}>
                                        <h3 className="text-xl font-semibold text-slate-900 hover:text-blue-600 cursor-pointer transition-colors">
                                            {job.title}
                                        </h3>
                                    </Link>

                                    <p className="text-slate-500 mt-1 leading-relaxed">
                                        {job.description}
                                    </p>

                                    {/* Meta Icons Section */}
                                    <div className="flex gap-4 mt-4 text-sm text-slate-500 font-medium">
                                        <div className="flex items-center gap-1.5">
                                            <MapPin className="w-4 h-4 text-blue-400" />
                                            {job.location}
                                        </div>

                                        <div className="flex items-center gap-1.5">
                                            <Clock className="w-4 h-4 text-blue-400" />
                                            {job.type}
                                        </div>

                                        <div className="flex items-center gap-1.5">
                                            <Users className="w-4 h-4 text-blue-400" />
                                            {job.applicants} applicants
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3 mt-4">
                                        <Badge className="bg-blue-50 text-blue-700 border-blue-100">
                                            {job.department}
                                        </Badge>
                                        <span className="text-sm text-slate-400">
                                            Posted: {job.postedDate}
                                        </span>
                                    </div>
                                </div>

                                <div className="text-right flex flex-col justify-between items-end gap-3">
                                    <p className="font-bold text-2xl text-blue-600">{job.salary}</p>

                                    <Link to={`/hr/jobs/${job.id}`}>
                                        <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-sm">
                                            View Details
                                            <ArrowRight className="ml-2 w-4 h-4" />
                                        </Button>
                                    </Link>
                                </div>

                            </div>

                        </Card>
                    ))}
                </div>
            </div>

            {/* Closed Jobs Section */}
            {closedJobs.length > 0 && (
                <div>
                    <h2 className="text-xl font-bold mb-4 text-slate-900">
                        Closed/On Hold ({closedJobs.length})
                    </h2>

                    <div className="space-y-4">
                        {closedJobs.map((job) => (
                            <Card key={job.id} className="p-6 bg-white border-slate-200 opacity-80 shadow-sm">

                                <div className="flex justify-between items-center">

                                    <div className="space-y-1">
                                        <h3 className="font-semibold text-lg text-slate-900">
                                            {job.title}
                                        </h3>

                                        <p className="text-slate-500">
                                            {job.location}
                                        </p>

                                        <div className="flex items-center gap-3 mt-2">
                                            <Badge variant="secondary" className="bg-slate-100 text-slate-600 border-slate-200">
                                                {job.status}
                                            </Badge>

                                            <span className="text-sm text-slate-500 font-medium">
                                                {job.applicants} applicants
                                            </span>
                                        </div>
                                    </div>

                                    <div className="text-right flex flex-col items-end gap-3">
                                        <p className="text-sm text-slate-400 font-medium">
                                            Deadline: {job.deadline}
                                        </p>

                                        <Link to={`/hr/jobs/${job.id}`}>
                                            <Button variant="outline" size="sm" className="border-slate-200 text-slate-600 hover:bg-blue-50 hover:text-blue-600">
                                                View
                                            </Button>
                                        </Link>
                                    </div>

                                </div>

                            </Card>
                        ))}
                    </div>
                </div>
            )}

        </div>
    );
};

export default Jobs;