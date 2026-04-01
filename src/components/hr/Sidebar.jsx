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
        <div className="flex flex-col h-full  bg-white border-r border-sidebar-border">

            {/* Logo Section + Cross Icon Bagal Mein */}
            <div className="p-6 border-b border-sidebar-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h1 className="font-bold text-lg">
                        HR Portal
                    </h1>
                </div>

                {/* Cross Button - Directly next to HR Portal title */}
                {onClose && (
                    <Button variant="ghost" size="icon" onClick={onClose} className="h-8 w-4 hover:bg-white">
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
                                "flex items-center gap-3 px-4 py-2 rounded-lg transition-colors",
                                isActive
                                    ? "bg-primary text-primary-foreground"
                                    : "text-foreground hover:bg-muted"
                            )}
                        >
                            <Icon className="w-5 h-5" />
                            <span className="font-medium">{link.label}</span>
                        </Link>
                    );
                })}
            </nav>

            {/* Logout Button at Bottom */}
            <div className="p-4 border-t border-sidebar-border">
                <button
                    className="flex items-center gap-3 w-full px-4 py-2 rounded-lg text-destructive hover:bg-destructive/10 transition-colors"
                    onClick={() => {
                        console.log("Logging out...");
                        if (onClose) onClose();
                    }}
                >
                    <LogOut className="w-5 h-5" />
                    <span className="font-medium">Logout</span>
                </button>
            </div>

        </div>
    );
}