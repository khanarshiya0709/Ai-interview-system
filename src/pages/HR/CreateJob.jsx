import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { ChevronLeft, Plus, X } from 'lucide-react';
import {
    Select,
    SelectTrigger,
    SelectContent,
    SelectItem,
    SelectValue,
} from '../../components/ui/select';

export default function CreateJobPage() {
    const [requirements, setRequirements] = useState(['']);

    const handleAddRequirement = () => {
        setRequirements([...requirements, '']);
    };

    const handleRemoveRequirement = (index) => {
        setRequirements(requirements.filter((_, i) => i !== index));
    };

    const handleRequirementChange = (index, value) => {
        const newRequirements = [...requirements];
        newRequirements[index] = value;
        setRequirements(newRequirements);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <div>
                {/* ✅ FIX: Path corrected to match folder structure /hr/jobs */}
                <Link to="/hr/jobs">
                    <Button variant="ghost" size="sm" className="mb-4">
                        <ChevronLeft className="w-4 h-4 mr-2" />
                        Back
                    </Button>
                </Link>

                <h1 className="text-2xl sm:text-3xl font-bold">
                    Create New Job Posting
                </h1>
                <p className="text-muted-foreground mt-1 mb-6">
                    Fill in the details to post a new job opening
                </p>
            </div>

            <Card className="p-6 sm:p-8 rounded-xl">
                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Top Fields */}
                    <div className="grid md:grid-cols-2 gap-6">

                        <div>
                            <label className="text-sm font-medium mb-3 block">Job Title</label>
                            <Input placeholder="e.g., Senior Product Manager" />
                        </div>

                        <div>
                            <label className="text-sm font-medium mb-3 block">Department</label>
                            <Input placeholder="Select department" />
                        </div>

                        <div>
                            <label className="text-sm font-medium mb-3 block">Location</label>
                            <Input placeholder="e.g., San Francisco, CA or Remote" />
                        </div>

                        <div>
                            <label className="text-sm font-medium mb-3 block">
                                Employment Type
                            </label>

                            <Select>
                                <SelectTrigger className="w-full bg-white border text-muted-foreground">
                                    <SelectValue placeholder="choose employment type" />
                                </SelectTrigger>

                                <SelectContent className="bg-white border shadow-md rounded-md">
                                    <SelectItem value="full-time">Full-time</SelectItem>
                                    <SelectItem value="part-time">Part-time</SelectItem>
                                    <SelectItem value="contract">Contract</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <label className="text-sm font-medium mb-3 block">Salary Range</label>
                            <Input placeholder="e.g., $150K - $200K" />
                        </div>

                        <div>
                            <label className="text-sm font-medium mb-3 block">Application Deadline</label>
                            <Input type="date" />
                        </div>

                    </div>

                    {/* Description */}
                    <div>
                        <label className="text-sm font-medium mb-3 block">Job Description</label>
                        <Textarea placeholder="Provide a detailed job description..." />
                    </div>

                    {/* Requirements */}
                    <div className="space-y-3">
                        <label className="text-sm font-medium mb-3 block">Requirements</label>

                        {requirements.map((req, index) => (
                            <div key={index} className="flex gap-2">
                                <Input
                                    placeholder="Requirement"
                                    value={req}
                                    onChange={(e) =>
                                        handleRequirementChange(index, e.target.value)
                                    }
                                />
                                {requirements.length > 1 && (
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => handleRemoveRequirement(index)}
                                    >
                                        <X className="w-4 h-4" />
                                    </Button>
                                )}
                            </div>
                        ))}

                        <Button
                            type="button"
                            variant="outline"
                            className="w-full"
                            onClick={handleAddRequirement}
                        >
                            <Plus className="mr-2 h-4 w-4" />
                            Add Requirement
                        </Button>
                    </div>

                    {/* Divider */}
                    <hr className="border-border" />

                    {/* Buttons */}
                    <div className="flex items-center relative">
                        {/* ✅ Path verified: Correct as per structure */}
                        <Link to="/hr/jobs">
                            <Button variant="outline">Cancel</Button>
                        </Link>

                        <div className="absolute left-1/2 -translate-x-1/2">
                            <Button type="submit" className="px-10">
                                Post Job
                            </Button>
                        </div>
                    </div>

                </form>
            </Card>
        </div>
    );
}