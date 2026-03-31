import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '../../components/ui/select';
import { ChevronLeft, Plus, X } from 'lucide-react';

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
        <div className="p-4 sm:p-6 space-y-6 max-w-4xl">
            <div>
                <Link to="/hr/jobs">
                    <Button variant="ghost" size="sm" className="mb-4">
                        <ChevronLeft className="w-4 h-4 mr-2" />
                        Back
                    </Button>
                </Link>

                <h1 className="text-2xl sm:text-3xl font-bold">
                    Create New Job Posting
                </h1>
                <p className="text-muted-foreground mt-1">
                    Fill in the details to post a new job opening
                </p>
            </div>

            <Card className="p-6 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">

                    <div className="grid md:grid-cols-2 gap-6">
                        <Input placeholder="Job Title" />
                        <Input placeholder="Department" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Input placeholder="Location" />
                        <Input placeholder="Employment Type" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <Input placeholder="Salary Range" />
                        <Input type="date" />
                    </div>

                    <Textarea placeholder="Job Description..." />

                    {/* Requirements */}
                    <div className="space-y-3">
                        {requirements.map((req, index) => (
                            <div key={index} className="flex gap-2">
                                <Input
                                    value={req}
                                    onChange={(e) =>
                                        handleRequirementChange(index, e.target.value)
                                    }
                                />
                                {requirements.length > 1 && (
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => handleRemoveRequirement(index)}
                                    >
                                        <X />
                                    </Button>
                                )}
                            </div>
                        ))}

                        <Button variant="outline" onClick={handleAddRequirement}>
                            <Plus className="mr-2" /> Add Requirement
                        </Button>
                    </div>

                    <div className="flex gap-4">
                        <Link to="/hr/jobs">
                            <Button variant="outline">Cancel</Button>
                        </Link>
                        <Button type="submit" className="flex-1">
                            Post Job
                        </Button>
                    </div>
                </form>
            </Card>
        </div>
    );
}