import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Briefcase, Video, LogOut, X } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";

const Sidebar = ({ onClose }) => {
    const location = useLocation();
    const pathname = location.pathname;

    const links = [
        // ✅ Paths verified: matches /candidate/... structure
        { href: "/candidate/dashboard", label: "Dashboard", icon: LayoutDashboard },
        { href: "/candidate/jobs", label: "Jobs", icon: Briefcase },
        { href: "/candidate/interview", label: "Interview", icon: Video },
    ];

    return (
        <div className="flex flex-col h-full bg-white border-r border-slate-200">

            <div className="p-6 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm">
                        <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    <h1 className="font-bold text-lg text-slate-900">
                        Candidate
                    </h1>
                </div>

                {onClose && (
                    <Button
                        variant="ghost"
                        size="icon"
                        onClick={onClose}
                        className="h-8 w-8 text-slate-400 hover:text-blue-600 hover:bg-blue-50"
                    >
                        <X className="w-5 h-5" />
                    </Button>
                )}
            </div>

            <nav className="flex-1 p-4 space-y-2">
                {links.map((link) => {
                    const Icon = link.icon;
                    const isActive = pathname === link.href || pathname.startsWith(link.href + "/");

                    return (
                        <Link
                            key={link.href}
                            to={link.href}
                            onClick={onClose}
                            className={cn(
                                "flex items-center gap-3 px-4 py-2 rounded-lg font-medium transition-all",
                                isActive
                                    ? "bg-blue-600 text-white shadow-md shadow-blue-200"
                                    : "text-slate-600 hover:bg-blue-50 hover:text-blue-600"
                            )}
                        >
                            <Icon className={cn("w-5 h-5", isActive ? "text-white" : "text-slate-400")} />
                            <span>{link.label}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-slate-200">
                <button className="flex items-center gap-3 w-full px-4 py-2 rounded-lg text-red-600 font-medium hover:bg-red-50 transition-colors">
                    <LogOut className="w-5 h-5" />
                    <span>Logout</span>
                </button>
            </div>

        </div>
    );
};

export default Sidebar;