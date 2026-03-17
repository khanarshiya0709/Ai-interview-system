import React, { useState } from "react";
import Sidebar from '../../components/candidate/Sidebar'
import Navbar from "../../components/candidate/Navbar";


const Dashboard = () => {
    const [open, setOpen] = useState(false);
    const [isClick, setIsClick] = useState(false);

    return (
        <>
            <Sidebar open={open} setOpen={setOpen} />
            <Navbar setOpen={setOpen}
                isClick={isClick}
                setIsClick={setIsClick}
            />

        </>
    )
}

export default Dashboard