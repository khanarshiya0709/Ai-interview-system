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
                    onClick={() => navigate(-1)}
                    // Custom hover to match our blue theme
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

            {/* Applicants List */}
            <div className="space-y-4">
                {applicants.map((user, i) => (
                    <Card
                        key={i}
                        // Added border-slate-200 for consistent theme
                        className="p-4 flex items-center justify-between bg-white border-slate-200 shadow-sm"
                    >
                        <div className="flex items-center gap-4">
                            <img
                                src={`https://i.pravatar.cc/150?img=${i + 1}`}
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
                            {/* Outline variant will use the blue-tint we set in Button.jsx */}
                            <Button variant="outline" size="sm">
                                View
                            </Button>

                            {/* Default variant will use bg-blue-600 */}
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
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