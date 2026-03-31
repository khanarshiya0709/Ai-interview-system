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
        <div className="p-6 space-y-8">

            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold">Open Positions</h1>
                    <p className="text-muted-foreground mt-1">
                        Manage and track all job openings
                    </p>
                </div>

                <Link to="/hr/create-job">
                    <Button>
                        <Briefcase className="mr-2 w-4 h-4" />
                        Post New Job
                    </Button>
                </Link>
            </div>

            <div>
                <h2 className="text-xl font-bold mb-4">
                    Active Postings ({openJobs.length})
                </h2>

                <div className="space-y-4">
                    {openJobs.map((job) => (
                        <Card key={job.id} className="p-6 hover:shadow-md transition">

                            <div className="flex justify-between gap-4">

                                <div className="flex-1">
                                    <Link to={`/hr/jobs/${job.id}`}>
                                        <h3 className="text-xl font-semibold hover:text-primary cursor-pointer">
                                            {job.title}
                                        </h3>
                                    </Link>

                                    <p className="text-muted-foreground mt-1">
                                        {job.description}
                                    </p>

                                    <div className="flex gap-4 mt-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <MapPin className="w-4 h-4" />
                                            {job.location}
                                        </div>

                                        <div className="flex items-center gap-1">
                                            <Clock className="w-4 h-4" />
                                            {job.type}
                                        </div>

                                        <div className="flex items-center gap-1">
                                            <Users className="w-4 h-4" />
                                            {job.applicants} apps
                                        </div>
                                    </div>

                                    <div className="flex gap-2 mt-3">
                                        <Badge>{job.department}</Badge>
                                        <span className="text-sm text-muted-foreground">
                                            Posted: {job.postedDate}
                                        </span>
                                    </div>
                                </div>

                                <div className="text-right flex flex-col gap-3">
                                    <p className="font-bold">{job.salary}</p>

                                    <Link to={`/hr/jobs/${job.id}`}>
                                        <Button>
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

            {closedJobs.length > 0 && (
                <div>
                    <h2 className="text-xl font-bold mb-4">
                        Closed/On Hold ({closedJobs.length})
                    </h2>

                    <div className="space-y-4">
                        {closedJobs.map((job) => (
                            <Card key={job.id} className="p-6 opacity-75">

                                <div className="flex justify-between">

                                    <div>
                                        <h3 className="font-semibold text-lg">
                                            {job.title}
                                        </h3>

                                        <p className="text-muted-foreground">
                                            {job.location}
                                        </p>

                                        <div className="flex gap-2 mt-2">
                                            <Badge variant="secondary">
                                                {job.status}
                                            </Badge>

                                            <span className="text-sm text-muted-foreground">
                                                {job.applicants} applicants
                                            </span>
                                        </div>
                                    </div>

                                    <div className="text-right">
                                        <p className="text-sm text-muted-foreground">
                                            Deadline: {job.deadline}
                                        </p>

                                        <Link to={`/hr/jobs/${job.id}`}>
                                            <Button variant="outline" size="sm">
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