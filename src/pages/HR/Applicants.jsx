import { useNavigate } from "react-router-dom";

const Applicants = () => {
    const navigate = useNavigate();

    return (
        <div className="p-6 min-h-screen max-w-3xl mx-auto">

            <button
                onClick={() => navigate(-1)}
                className="mb-4 text-blue-600"
            >
                ← Back
            </button>

            <h1 className="text-2xl font-bold mb-6">
                Java Developer - Applicants
            </h1>

            {[
                { name: "Arshiya Khan", email: "arshiya@gmail.com" },
                { name: "Aman Sharma", email: "aman@gmail.com" }
            ].map((user, i) => (
                <div key={i} className="bg-white p-4 rounded-xl shadow flex justify-between items-center mb-3">

                    <div className="flex items-center gap-4">
                        <img
                            src={`https://i.pravatar.cc/4${i}`}
                            className="w-10 h-10 rounded-full"
                        />

                        <div>
                            <h3>{user.name}</h3>
                            <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                    </div>

                    <button className="bg-blue-600 text-white px-4 py-1 rounded">
                        Result
                    </button>

                </div>
            ))}

        </div>
    );
};

export default Applicants;