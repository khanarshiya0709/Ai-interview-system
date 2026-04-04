import { useState } from "react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";

const Profile = () => {
    const [edit, setEdit] = useState(false);

    const [user, setUser] = useState({
        name: "Sarah Jenkins",
        role: "Senior Java Developer",
        phone: "+1 555 123 4567",
        email: "sarah.jenkins@email.com",
        location: "San Francisco, CA",
        skills: ["Java", "Spring Boot", "Microservices", "AWS", "Docker", "Git"],
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    return (
        <div className="p-4 md:p-6 space-y-6">

            {/* TOP CARD */}
            <div className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-blue-200 flex items-center justify-center text-xl font-bold">
                        {user.name.charAt(0)}
                    </div>

                    <div>
                        {edit ? (
                            <Input name="name" value={user.name} onChange={handleChange} />
                        ) : (
                            <h2 className="text-xl font-bold">{user.name}</h2>
                        )}

                        {edit ? (
                            <Input name="role" value={user.role} onChange={handleChange} />
                        ) : (
                            <p className="text-gray-500">{user.role}</p>
                        )}
                    </div>
                </div>

                <div className="flex gap-2">
                    {!edit ? (
                        <Button onClick={() => setEdit(true)}>Edit Profile</Button>
                    ) : (
                        <Button onClick={() => setEdit(false)}>Save Changes</Button>
                    )}

                    <Button variant="outline">Upload Resume</Button>
                </div>
            </div>

            {/* DETAILS SECTION */}
            <div className="grid md:grid-cols-2 gap-4">

                {/* CONTACT */}
                <div className="bg-white rounded-xl shadow p-4 space-y-3">
                    <h3 className="font-semibold text-lg">Contact Details</h3>

                    <div>
                        <p className="text-sm text-gray-500">Phone</p>
                        {edit ? (
                            <Input name="phone" value={user.phone} onChange={handleChange} />
                        ) : (
                            <p>{user.phone}</p>
                        )}
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Email</p>
                        {edit ? (
                            <Input name="email" value={user.email} onChange={handleChange} />
                        ) : (
                            <p>{user.email}</p>
                        )}
                    </div>

                    <div>
                        <p className="text-sm text-gray-500">Location</p>
                        {edit ? (
                            <Input name="location" value={user.location} onChange={handleChange} />
                        ) : (
                            <p>{user.location}</p>
                        )}
                    </div>
                </div>

                {/* SKILLS */}
                <div className="bg-white rounded-xl shadow p-4">
                    <h3 className="font-semibold text-lg mb-3">Skills</h3>

                    <div className="flex flex-wrap gap-2">
                        {user.skills.map((skill, i) => (
                            <span
                                key={i}
                                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Profile;