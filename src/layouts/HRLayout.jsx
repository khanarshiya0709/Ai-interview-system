import { Outlet } from "react-router-dom";
import { Navbar } from "../components/hr/Navbar";
import { Sidebar } from "../components/hr/Sidebar";

const HRLayout = () => {
    return (
        <div className="flex h-screen overflow-hidden">

            {/* Sidebar - Desktop */}
            <div className="w-64 bg-sidebar border-r border-sidebar-border hidden md:flex flex-col overflow-y-auto">
                <Sidebar />
            </div>

            {/* Main */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <Navbar />

                <main className="flex-1 overflow-y-auto bg-background p-6">
                    <Outlet />
                </main>
            </div>

        </div>
    );
};

export default HRLayout;