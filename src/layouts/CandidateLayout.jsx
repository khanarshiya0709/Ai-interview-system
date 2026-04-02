import { Outlet } from "react-router-dom";
import Navbar from "../components/candidate/Navbar";
import Sidebar from "../components/candidate/Sidebar";
import { useState } from "react";

const CandidateLayout = () => {
    const [open, setOpen] = useState(false);
    const [isClick, setIsClick] = useState(false);

    return (
        // Added min-h-screen and bg-slate-50 to maintain the SaaS dashboard theme
        <div className="flex min-h-screen bg-slate-50">

            <Sidebar open={open} setOpen={setOpen} />

            {/* Main content area */}
            <div className="flex-1">
                <Navbar
                    setOpen={setOpen}
                    isClick={isClick}
                    setIsClick={setIsClick}
                />

                {/* Outlet will render candidate pages here */}
                <Outlet />
            </div>

        </div>
    );
};

export default CandidateLayout;