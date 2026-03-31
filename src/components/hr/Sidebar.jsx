import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Briefcase, Plus, Settings } from "lucide-react";
import { cn } from "../../lib/utils";

export function Sidebar() {
    const location = useLocation();
    const pathname = location.pathname;

    const links = [
        { href: "/hr/dashboard", label: "Dashboard", icon: LayoutDashboard },
        { href: "/hr/jobs", label: "Jobs", icon: Briefcase },
        { href: "/hr/create-job", label: "Create Job", icon: Plus },
    ];

    return (
        <div className="flex flex-col h-full bg-sidebar border-r border-sidebar-border">

            {/* Logo */}
            <div className="p-6 border-b border-sidebar-border">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-sidebar-primary rounded-lg flex items-center justify-center">
                        <Briefcase className="w-5 h-5 text-sidebar-primary-foreground" />
                    </div>
                    <h1 className="font-bold text-lg text-sidebar-foreground">
                        HR Portal
                    </h1>
                </div>
            </div>

            {/* Links */}
            <nav className="flex-1 p-4 space-y-2">
                {links.map((link) => {
                    const Icon = link.icon;

                    const isActive =
                        pathname === link.href ||
                        pathname.startsWith(link.href + "/");

                    return (
                        <Link
                            key={link.href}
                            to={link.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-2 rounded-lg transition-colors",
                                isActive
                                    ? "bg-sidebar-primary text-sidebar-primary-foreground"
                                    : "text-sidebar-foreground hover:bg-sidebar-accent"
                            )}
                        >
                            <Icon className="w-5 h-5" />
                            <span className="font-medium">
                                {link.label}
                            </span>
                        </Link>
                    );
                })}
            </nav>

            {/* Settings */}
            <div className="p-4 border-t border-sidebar-border">
                <button className="flex items-center gap-3 w-full px-4 py-2 rounded-lg text-sidebar-foreground hover:bg-sidebar-accent transition-colors">
                    <Settings className="w-5 h-5" />
                    <span className="font-medium">Settings</span>
                </button>
            </div>

        </div>
    );
}