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
                <Link to="/hr/jobs">
                    {/* Back Button: Subtle blue hover */}
                    <Button
                        variant="ghost"
                        size="sm"
                        className="mb-4 text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                    >
                        <ChevronLeft className="w-4 h-4 mr-2" />
                        Back
                    </Button>
                </Link>

                <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
                    Create New Job Posting
                </h1>
                <p className="text-slate-500 mt-1 mb-6">
                    Fill in the details to post a new job opening
                </p>
            </div>

            <Card className="p-6 sm:p-8 rounded-xl bg-white border-slate-200 shadow-sm">
                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Top Fields */}
                    <div className="grid md:grid-cols-2 gap-6">

                        <div>
                            <label className="text-sm font-medium mb-3 block text-slate-700">Job Title</label>
                            <Input placeholder="e.g., Senior Product Manager" />
                        </div>

                        <div>
                            <label className="text-sm font-medium mb-3 block text-slate-700">Department</label>
                            <Input placeholder="Select department" />
                        </div>

                        <div>
                            <label className="text-sm font-medium mb-3 block text-slate-700">Location</label>
                            <Input placeholder="e.g., San Francisco, CA or Remote" />
                        </div>

                        <div>
                            <label className="text-sm font-medium mb-3 block text-slate-700">
                                Employment Type
                            </label>

                            <Select>
                                {/* Select Trigger: Consistent slate border and blue focus */}
                                <SelectTrigger className="w-full bg-white border-slate-200 text-slate-600 focus:ring-blue-600/20 focus:border-blue-600">
                                    <SelectValue placeholder="choose employment type" />
                                </SelectTrigger>

                                <SelectContent className="bg-white border border-slate-200 shadow-lg rounded-md">
                                    <SelectItem value="full-time" className="focus:bg-blue-50 focus:text-blue-600">Full-time</SelectItem>
                                    <SelectItem value="part-time" className="focus:bg-blue-50 focus:text-blue-600">Part-time</SelectItem>
                                    <SelectItem value="contract" className="focus:bg-blue-50 focus:text-blue-600">Contract</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div>
                            <label className="text-sm font-medium mb-3 block text-slate-700">Salary Range</label>
                            <Input placeholder="e.g., $150K - $200K" />
                        </div>

                        <div>
                            <label className="text-sm font-medium mb-3 block text-slate-700">Application Deadline</label>
                            <Input type="date" className="focus:border-blue-600" />
                        </div>

                    </div>

                    {/* Description */}
                    <div>
                        <label className="text-sm font-medium mb-3 block text-slate-700">Job Description</label>
                        <Textarea
                            placeholder="Provide a detailed job description..."
                            className="min-h-[120px] focus:border-blue-600 focus:ring-blue-600/20"
                        />
                    </div>

                    {/* Requirements */}
                    <div className="space-y-3">
                        <label className="text-sm font-medium mb-3 block text-slate-700">Requirements</label>

                        {requirements.map((req, index) => (
                            <div key={index} className="flex gap-2">
                                <Input
                                    placeholder="Requirement"
                                    value={req}
                                    onChange={(e) =>
                                        handleRequirementChange(index, e.target.value)
                                    }
                                    className="focus:border-blue-600 focus:ring-blue-600/20"
                                />
                                {requirements.length > 1 && (
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => handleRemoveRequirement(index)}
                                        className="text-slate-400 hover:text-red-600 hover:bg-red-50 transition-colors"
                                    >
                                        <X className="w-4 h-4" />
                                    </Button>
                                )}
                            </div>
                        ))}

                        <Button
                            type="button"
                            variant="outline"
                            className="w-full border-slate-200 text-slate-600 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all"
                            onClick={handleAddRequirement}
                        >
                            <Plus className="mr-2 h-4 w-4" />
                            Add Requirement
                        </Button>
                    </div>

                    {/* Divider */}
                    <hr className="border-slate-100" />

                    {/* Form Actions */}
                    <div className="flex items-center relative py-2">
                        <Link to="/hr/jobs">
                            <Button variant="outline" className="border-slate-200 text-slate-600 hover:bg-slate-50">
                                Cancel
                            </Button>
                        </Link>

                        <div className="absolute left-1/2 -translate-x-1/2">
                            {/* Primary Button: Strong blue with shadow */}
                            <Button type="submit" className="px-10 bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-200 transition-all active:scale-95">
                                Post Job
                            </Button>
                        </div>
                    </div>

                </form>
            </Card>
        </div>
    );
}