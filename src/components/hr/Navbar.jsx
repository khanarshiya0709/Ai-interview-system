import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Bell, User, Menu } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
    DrawerTitle,
    DrawerDescription
} from '../ui/drawer';

import { Sidebar } from './Sidebar';

export function Navbar() {
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <nav className="h-16 border-b border-border bg-background flex items-center justify-between px-6 gap-4" />;

    return (
        <nav className="h-16 border-b border-border bg-background flex items-center justify-between px-6 gap-4">

            {/* Mobile Drawer - Left Side */}
            <div className="md:hidden">
                <Drawer direction="left" open={open} onOpenChange={setOpen}>
                    <DrawerTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="w-5 h-5" />
                        </Button>
                    </DrawerTrigger>

                    {/* Width kam kar di (w-60) aur background solid rakha hai */}
                    <DrawerContent className="h-screen w-60 p-0 rounded-none border-r bg-background shadow-xl">
                        <DrawerTitle className="sr-only">Navigation Menu</DrawerTitle>
                        <DrawerDescription className="sr-only">Main navigation</DrawerDescription>

                        <Sidebar onClose={() => setOpen(false)} />
                    </DrawerContent>
                </Drawer>
            </div>

            {/* Search Section */}
            <div className="flex-1 max-w-sm hidden sm:block">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Search candidates, jobs..." className="pl-10 bg-muted" />
                </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-2 sm:gap-4">
                <Link to="/hr/create-job" className="hidden sm:block">
                    <Button size="sm">Create Job</Button>
                </Link>

                <Button variant="ghost" size="icon" className="relative">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full" />
                </Button>

                <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => navigate("/hr/profile")}
                >
                    <User className="w-5 h-5" />
                </Button>
            </div>
        </nav>
    );
}