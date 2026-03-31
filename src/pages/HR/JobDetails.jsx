import { useParams, Link } from "react-router-dom";
import { Card } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Button } from '../../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { mockJobs, mockCandidates } from '../../lib/mock-data';
import { ChevronLeft, Download, Phone, Mail } from 'lucide-react';

const JobDetails = () => {
    const { id } = useParams();

    const job = mockJobs.find((j) => j.id === id) || mockJobs[0];

    const candidates = mockCandidates.filter(
        (c) => c.position === job.title
    );

    const cvScreeningCandidates = candidates.filter(
        (c) => c.status === 'screening' || c.status === 'interview'
    );

    const interviewCandidates = candidates.filter(
        (c) => c.status === 'interview' || c.status === 'offer'
    );

    return (
        <div className="p-4 sm:p-6 space-y-6">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                <div>
                    <Link to="/hr/jobs">
                        <Button variant="ghost" size="sm" className="mb-4">
                            <ChevronLeft className="w-4 h-4 mr-2" />
                            Back
                        </Button>
                    </Link>

                    <h1 className="text-2xl sm:text-3xl font-bold">
                        {job.title}
                    </h1>

                    <p className="text-muted-foreground mt-1">
                        {job.department} • {job.location}
                    </p>

                    <div className="flex gap-3 mt-4">
                        <Badge>{job.status}</Badge>
                        <span className="text-sm text-muted-foreground">
                            {job.applicants} Applicants
                        </span>
                    </div>
                </div>

                <div className="text-right">
                    <p className="text-2xl font-bold">{job.salary}</p>
                    <p className="text-muted-foreground">{job.type}</p>
                </div>
            </div>

            {/* Overview */}
            <Card className="p-6">
                <div className="grid md:grid-cols-2 gap-6">

                    <div>
                        <h3 className="font-semibold mb-2">Job Description</h3>
                        <p className="text-muted-foreground">
                            {job.description}
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-2">Requirements</h3>
                        <ul className="space-y-1 text-muted-foreground">
                            {job.requirements.map((req, i) => (
                                <li key={i}>• {req}</li>
                            ))}
                        </ul>
                    </div>

                </div>
            </Card>

            {/* Tabs */}
            <div>
                <h2 className="text-lg font-bold mb-4">Candidates</h2>

                <Tabs defaultValue="screening">
                    <TabsList className="grid grid-cols-2 max-w-md">
                        <TabsTrigger value="screening">CV Screening</TabsTrigger>
                        <TabsTrigger value="interview">AI Interview</TabsTrigger>
                    </TabsList>

                    {/* Screening */}
                    <TabsContent value="screening" className="space-y-3 mt-4">
                        {cvScreeningCandidates.map((c) => (
                            <Card key={c.id} className="p-4 flex justify-between">

                                <div>
                                    <h3 className="font-semibold">{c.name}</h3>
                                    <p className="text-sm text-muted-foreground">
                                        {c.email}
                                    </p>

                                    <div className="flex gap-4 mt-2 text-sm">
                                        <a href={`mailto:${c.email}`} className="text-primary">Email</a>
                                        <a href={`tel:${c.phone}`} className="text-primary">Call</a>
                                    </div>
                                </div>

                                <div className="text-right">
                                    <p className="text-sm text-muted-foreground">CV Score</p>
                                    <p className="text-xl font-bold text-primary">
                                        {c.cvScore || 0}%
                                    </p>

                                    <Button size="sm" className="mt-2">
                                        Review
                                    </Button>
                                </div>

                            </Card>
                        ))}
                    </TabsContent>

                    {/* Interview */}
                    <TabsContent value="interview" className="space-y-3 mt-4">
                        {interviewCandidates.map((c) => (
                            <Card key={c.id} className="p-4 flex justify-between">

                                <div>
                                    <h3 className="font-semibold">{c.name}</h3>
                                    <p className="text-sm text-muted-foreground">
                                        {c.email}
                                    </p>
                                </div>

                                <div className="text-right">
                                    <p className="text-sm text-muted-foreground">
                                        Interview Score
                                    </p>

                                    <p className="text-xl font-bold text-primary">
                                        {c.interviewScore || 0}%
                                    </p>

                                    <Button size="sm" className="mt-2">
                                        Schedule
                                    </Button>
                                </div>

                            </Card>
                        ))}
                    </TabsContent>

                </Tabs>
            </div>

        </div>
    );
};

export default JobDetails;