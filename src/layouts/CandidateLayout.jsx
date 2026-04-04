import { Outlet } from "react-router-dom";
import Navbar from "../components/candidate/Navbar";
import Sidebar from "../components/candidate/Sidebar";

const CandidateLayout = () => {
    return (
        <div className="flex h-screen overflow-hidden">

            {/* Sidebar - Desktop */}
            <div className="w-64 bg-white border-r border-slate-200 hidden md:flex flex-col overflow-y-auto">
                <Sidebar />
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <Navbar />

                <main className="flex-1 overflow-y-auto bg-slate-50">
                    {/* Nested candidate routes will render here */}
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default CandidateLayout;