import { useNavigate } from "react-router-dom";
import { Card } from "../../components/ui/card";
import { Button } from "../../components/ui/button";

const Applicants = () => {
    const navigate = useNavigate();

    const applicants = [
        { name: "Arshiya Khan", email: "arshiya@gmail.com" },
        { name: "Aman Sharma", email: "aman@gmail.com" },
    ];

    return (
        <div className="space-y-6">

            {/* Header */}
            <div>
                <Button
                    variant="ghost"
                    onClick={() => navigate(-1)} // ✅ Correct: Goes back to previous HR page (likely HRJobs)
                    className="mb-4 text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                >
                    ← Back
                </Button>

                <h1 className="text-2xl font-bold text-slate-900">
                    Java Developer - Applicants
                </h1>

                <p className="text-slate-500">
                    Manage and review all applicants for this position
                </p>
            </div>

            {/* List */}
            <div className="space-y-4">
                {applicants.map((user) => (
                    <Card
                        key={user.email}
                        className="p-4 flex items-center justify-between bg-white border-slate-200 shadow-sm"
                    >
                        <div className="flex items-center gap-4">
                            <img
                                src={`https://i.pravatar.cc/150?u=${user.email}`}
                                className="w-10 h-10 rounded-full border border-slate-100"
                                alt="user"
                            />

                            <div>
                                <h3 className="font-medium text-slate-900">
                                    {user.name}
                                </h3>
                                <p className="text-sm text-slate-500">
                                    {user.email}
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <Button
                                variant="outline"
                                size="sm"
                                onClick={() => alert("View Profile")}
                            >
                                View
                            </Button>

                            <Button
                                size="sm"
                                className="bg-blue-600 hover:bg-blue-700 text-white"
                                onClick={() => alert("Show Result")}
                            >
                                Result
                            </Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Applicants;