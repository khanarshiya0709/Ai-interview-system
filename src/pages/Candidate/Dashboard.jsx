import { mockCandidates } from "../../lib/candidate-mock-data";

const Dashboard = () => {
    const stats = [
        { label: "Pending", value: 3 },
        { label: "Rejected", value: 2 },
        { label: "Completed", value: 5 },
        { label: "Approved", value: 4 },
    ];

    const applications = [
        {
            title: "Senior React Developer",
            company: "TechCorp Inc",
            date: "2024-03-15",
            status: "Approved",
            score: 88,
        },
        {
            title: "Full Stack Engineer",
            company: "StartupXYZ",
            date: "2024-03-10",
            status: "Pending",
            score: 75,
        },
        {
            title: "Frontend Specialist",
            company: "DesignStudio",
            date: "2024-03-05",
            status: "Rejected",
            score: 62,
        },
        {
            title: "JavaScript Developer",
            company: "WebAgency Pro",
            date: "2024-03-01",
            status: "Completed",
            score: 82,
        },
        {
            title: "NodeJS Backend Dev",
            company: "CloudServices Ltd",
            date: "2024-02-28",
            status: "Approved",
            score: 85,
        },
        {
            title: "React Native Dev",
            company: "MobileFirst Studios",
            date: "2024-02-25",
            status: "Pending",
            score: 78,
        },
    ];

    return (
        <div className="p-4 md:p-6 space-y-6">

            {/* Welcome */}
            <div>
                <h1 className="text-2xl font-bold">
                    Welcome, Alex Johnson! 👋
                </h1>
                <p className="text-gray-500">
                    Here's your job search progress and application status.
                </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((item, i) => (
                    <div key={i} className="bg-white rounded-xl shadow p-4">
                        <p className="text-gray-500">{item.label}</p>
                        <h2 className="text-2xl font-bold">{item.value}</h2>
                    </div>
                ))}
            </div>

            {/* Applications */}
            <div>
                <h2 className="text-xl font-semibold">Application History</h2>
                <p className="text-gray-500 text-sm mb-4">
                    Track your recent job applications and their status
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {applications.map((job, i) => (
                        <div key={i} className="bg-white rounded-xl shadow p-4 space-y-2">

                            <div className="flex justify-between">
                                <h3 className="font-semibold">{job.title}</h3>
                                <span
                                    className={`text-xs px-2 py-1 rounded-full
                  ${job.status === "Approved" && "bg-green-100 text-green-600"}
                  ${job.status === "Pending" && "bg-yellow-100 text-yellow-600"}
                  ${job.status === "Rejected" && "bg-red-100 text-red-600"}
                  ${job.status === "Completed" && "bg-blue-100 text-blue-600"}
                  `}
                                >
                                    {job.status}
                                </span>
                            </div>

                            <p className="text-sm text-gray-500">{job.company}</p>

                            <div className="flex justify-between text-sm text-gray-400">
                                <span>{job.date}</span>
                                <span>CV Score: <b>{job.score}%</b></span>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Dashboard;