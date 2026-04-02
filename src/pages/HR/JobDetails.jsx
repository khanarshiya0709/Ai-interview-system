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
        <div className="space-y-6">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                <div>
                    <Link to="/hr/jobs">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="mb-4 text-slate-600 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                        >
                            <ChevronLeft className="w-4 h-4 mr-2" />
                            Back
                        </Button>
                    </Link>

                    <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
                        {job.title}
                    </h1>

                    <p className="text-slate-500 mt-1 font-medium">
                        {job.department} <span className="text-slate-300 mx-1">•</span> {job.location}
                    </p>

                    <div className="flex items-center gap-3 mt-4">
                        <Badge className="bg-blue-50 text-blue-700 border-blue-100 hover:bg-blue-100">
                            {job.status}
                        </Badge>
                        <span className="text-sm text-slate-500 font-medium">
                            {job.applicants} Applicants
                        </span>
                    </div>
                </div>

                <div className="text-start lg:text-right lg:mt-6">
                    <p className="text-2xl font-bold text-blue-600">{job.salary}</p>
                    <p className="text-slate-500 font-medium">{job.type}</p>
                </div>
            </div>

            {/* Overview Card */}
            <Card className="p-6 bg-white border-slate-200 shadow-sm">
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-semibold mb-2 text-slate-900">Job Description</h3>
                        <p className="text-slate-500 leading-relaxed">
                            {job.description}
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-2 text-slate-900">Requirements</h3>
                        <ul className="space-y-2 text-slate-500">
                            {job.requirements.map((req, i) => (
                                <li key={i} className="flex items-start gap-2">
                                    <span className="text-blue-400 mt-1">•</span>
                                    {req}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Card>

            {/* Candidates Section */}
            <div>
                <h2 className="text-xl font-bold mb-4 text-slate-900">Candidates</h2>

                <Tabs defaultValue="screening" className="w-full">
                    <TabsList className="bg-slate-100 p-1 max-w-md">
                        <TabsTrigger value="screening" className="data-[state=active]:bg-white data-[state=active]:text-blue-600">
                            CV Screening
                        </TabsTrigger>
                        <TabsTrigger value="interview" className="data-[state=active]:bg-white data-[state=active]:text-blue-600">
                            AI Interview
                        </TabsTrigger>
                    </TabsList>

                    {/* Screening Content */}
                    <TabsContent value="screening" className="space-y-3 mt-4">
                        {cvScreeningCandidates.map((c) => (
                            <Card
                                key={c.id}
                                className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border-slate-200 hover:border-blue-200 transition-all shadow-sm"
                            >
                                <div className="flex-1">
                                    <h3 className="font-semibold text-base sm:text-lg text-slate-900">
                                        {c.name}
                                    </h3>

                                    <p className="text-sm text-slate-500">
                                        {c.email}
                                    </p>

                                    <div className="flex gap-4 mt-3 text-sm font-medium">
                                        <a href={`mailto:${c.email}`} className="flex items-center gap-1.5 text-slate-500 hover:text-blue-600 transition-colors">
                                            <Mail className="w-4 h-4" /> Email
                                        </a>

                                        <a href={`tel:${c.phone}`} className="flex items-center gap-1.5 text-slate-500 hover:text-blue-600 transition-colors">
                                            <Phone className="w-4 h-4" /> Call
                                        </a>

                                        <span className="flex items-center gap-1.5 text-slate-500 hover:text-blue-600 cursor-pointer transition-colors">
                                            <Download className="w-4 h-4" /> Resume
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-row sm:flex-col items-center sm:items-end gap-4">
                                    <div className="text-right">
                                        <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                                            CV Score
                                        </p>
                                        <p className="text-xl font-bold text-blue-600">
                                            {c.cvScore || 0}%
                                        </p>
                                    </div>

                                    <Button
                                        size="sm"
                                        className="bg-green-600 hover:bg-green-700 text-white shadow-sm"
                                    >
                                        Approve
                                    </Button>
                                </div>
                            </Card>
                        ))}
                    </TabsContent>

                    {/* Interview Content */}
                    <TabsContent value="interview" className="space-y-3 mt-4">
                        {interviewCandidates.map((c) => (
                            <Card
                                key={c.id}
                                className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white border-slate-200 hover:border-blue-200 transition-all shadow-sm"
                            >
                                <div className="flex-1">
                                    <h3 className="font-semibold text-base sm:text-lg text-slate-900">
                                        {c.name}
                                    </h3>

                                    <p className="text-sm text-slate-500">
                                        {c.email}
                                    </p>

                                    <div className="mt-3 bg-blue-50 w-fit px-3 py-1 rounded-lg border border-blue-100">
                                        <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">
                                            Interview Score
                                        </p>
                                        <p className="text-lg font-bold text-blue-700 leading-none">
                                            {c.interviewScore || 0}%
                                        </p>
                                    </div>
                                </div>

                                <div className="flex justify-center items-center sm:justify-end">
                                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-100">
                                        View Result
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