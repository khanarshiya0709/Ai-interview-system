import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Briefcase, Plus, LogOut, X } from "lucide-react";
import { cn } from "../../lib/utils";
import { Button } from "../ui/button";

export function Sidebar({ onClose }) {
    const location = useLocation();
    const pathname = location.pathname;

    const links = [
        { href: "/hr/dashboard", label: "Dashboard", icon: LayoutDashboard },
        { href: "/hr/jobs", label: "Jobs", icon: Briefcase },
        { href: "/hr/create-job", label: "Create Job", icon: Plus },
    ];

    return (
        <div className="flex flex-col h-full bg-white border-r border-slate-200">

            {/* Logo Section */}
            <div className="p-6 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    {/* Logo Icon: Professional Blue */}
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm">
                        <Briefcase className="w-5 h-5 text-white" />
                    </div>
                    <h1 className="font-bold text-lg text-slate-900">
                        HR Portal
                    </h1>
                </div>

                {/* Cross Button: Mobile close */}
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

            {/* Navigation Links */}
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
                                    ? "bg-blue-600 text-white shadow-md shadow-blue-200" // Active state
                                    : "text-slate-600 hover:bg-blue-50 hover:text-blue-600" // Inactive/Hover state
                            )}
                        >
                            <Icon className={cn("w-5 h-5", isActive ? "text-white" : "text-slate-400 group-hover:text-blue-600")} />
                            <span>{link.label}</span>
                        </Link>
                    );
                })}
            </nav>

            {/* Logout Button at Bottom */}
            <div className="p-4 border-t border-slate-200">
                <button
                    className="flex items-center gap-3 w-full px-4 py-2 rounded-lg text-red-600 font-medium hover:bg-red-50 transition-colors"
                    onClick={() => {
                        console.log("Logging out...");
                        if (onClose) onClose();
                    }}
                >
                    <LogOut className="w-5 h-5" />
                    <span>Logout</span>
                </button>
            </div>

        </div>
    );
}