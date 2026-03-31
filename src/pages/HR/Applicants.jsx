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
                    className="mb-4"
                >
                    ← Back
                </Button>

                <h1 className="text-2xl font-bold">
                    Java Developer - Applicants
                </h1>

                <p className="text-muted-foreground">
                    Manage and review all applicants for this position
                </p>
            </div>

            {/* Applicants List */}
            <div className="space-y-4">
                {applicants.map((user, i) => (
                    <Card
                        key={i}
                        className="p-4 flex items-center justify-between"
                    >
                        <div className="flex items-center gap-4">
                            <img
                                src={`https://i.pravatar.cc/150?img=${i + 1}`}
                                className="w-10 h-10 rounded-full"
                                alt="user"
                            />

                            <div>
                                <h3 className="font-medium text-foreground">
                                    {user.name}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    {user.email}
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                                View
                            </Button>

                            <Button size="sm">
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