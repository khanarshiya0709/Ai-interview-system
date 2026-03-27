import { Outlet } from "react-router-dom";
import Navbar from "../components/hr/Navbar";
import Sidebar from "../components/hr/Sidebar";
import { useState } from "react";

const HRLayout = () => {
    const [open, setOpen] = useState(false);
    const [isClick, setIsClick] = useState(false);

    return (
        <div className="flex">

            <Sidebar open={open} setOpen={setOpen} />

            <div className="flex-1">
                <Navbar
                    setOpen={setOpen}
                    isClick={isClick}
                    setIsClick={setIsClick}
                />
                <Outlet />
            </div>

        </div>
    );
};

export default HRLayout;