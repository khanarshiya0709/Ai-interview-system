import { MdHomeFilled } from "react-icons/md";
import { LuUserSearch } from "react-icons/lu";
import { LiaClipboardListSolid } from "react-icons/lia";
import { FaRegUser } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ open, setOpen }) => {
    const navigate = useNavigate();

    return (
        <>
            {open && (
                <div
                    className="fixed inset-0 bg-black/40 z-40 sm:hidden"
                    onClick={() => setOpen(false)}
                ></div>
            )}

            <div className={`fixed top-0 left-0 h-screen w-56 lg:w-64 bg-blue-600 text-white flex flex-col z-50 transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"} sm:translate-x-0`}>

                <div className="relative flex items-center gap-2 px-6 py-4 text-xl font-bold bg-blue-500">
                    <FaRegUser />
                    Candidate

                    <IoClose
                        className="text-3xl cursor-pointer sm:hidden absolute right-4"
                        onClick={() => setOpen(false)}
                    />
                </div>

                <ul className="flex flex-col p-4 gap-2 text-lg">

                    <li onClick={() => navigate("/candidate/dashboard")} className="flex items-center gap-3 px-4 py-2 hover:bg-blue-500 rounded-lg cursor-pointer">
                        <MdHomeFilled size={22} /> Dashboard
                    </li>

                    <li onClick={() => navigate("/candidate/jobs")} className="flex items-center gap-3 px-4 py-2 hover:bg-blue-500 rounded-lg cursor-pointer">
                        <LuUserSearch size={22} /> Jobs
                    </li>

                    <li onClick={() => navigate("/candidate/applications")} className="flex items-center gap-3 px-4 py-2 hover:bg-blue-500 rounded-lg cursor-pointer">
                        <LiaClipboardListSolid size={22} /> Applications
                    </li>

                </ul>

                <div className="mt-auto p-4">
                    <button className="w-full bg-blue-500 hover:bg-blue-800 py-2 rounded-lg">
                        Logout
                    </button>
                </div>
            </div>
        </>
    );
};

export default Sidebar;