import { StatCard } from "../../components/hr/StatCard";
import { Card } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";

const HRDashboard = () => {
    return (
        <div className="space-y-6">

            {/* Header */}
            <div>
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <p className="text-muted-foreground">
                    Welcome back! Here's what's happening.
                </p>
            </div>

            {/* Stats */}
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <StatCard label="Total Jobs" value="12" change={10} trend="up" />
                <StatCard label="Applications" value="50" change={5} trend="up" />
                <StatCard label="Shortlisted" value="20" change={-2} trend="down" />
                <StatCard label="Interviews" value="8" change={3} trend="up" />
            </div>

            {/* Jobs Table */}
            <Card className="p-6 space-y-4">

                <div className="flex justify-between items-center">
                    <h2 className="text-lg font-semibold">Recent Jobs</h2>

                    <div className="flex gap-2">
                        <Input placeholder="Search jobs..." />
                        <Button>Search</Button>
                    </div>
                </div>

                {/* Row */}
                <div className="flex justify-between border-t pt-4">
                    <span>Java Developer</span>
                    <Link to="/hr/jobs/1" className="text-primary">
                        View
                    </Link>
                </div>

                <div className="flex justify-between border-t pt-4">
                    <span>Frontend Developer</span>
                    <Link to="/hr/jobs/2" className="text-primary">
                        View
                    </Link>
                </div>

            </Card>
        </div>
    );
};

export default HRDashboard;