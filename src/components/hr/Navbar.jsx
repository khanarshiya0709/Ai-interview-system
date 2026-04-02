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

    if (!mounted) return <nav className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-6 gap-4" />;

    return (
        <nav className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-6 gap-4">

            {/* Mobile Drawer - Left Side */}
            <div className="md:hidden">
                <Drawer direction="left" open={open} onOpenChange={setOpen}>
                    <DrawerTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-slate-600 hover:text-blue-600 hover:bg-blue-50">
                            <Menu className="w-5 h-5" />
                        </Button>
                    </DrawerTrigger>

                    {/* Width and structure remains same, updated theme colors */}
                    <DrawerContent className="h-screen w-60 p-0 rounded-none border-r border-slate-200 bg-white shadow-xl">
                        <DrawerTitle className="sr-only">Navigation Menu</DrawerTitle>
                        <DrawerDescription className="sr-only">Main navigation</DrawerDescription>

                        <Sidebar onClose={() => setOpen(false)} />
                    </DrawerContent>
                </Drawer>
            </div>

            {/* Search Section */}
            <div className="flex-1 max-w-sm hidden sm:block">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <Input
                        placeholder="Search candidates, jobs..."
                        className="pl-10 bg-slate-50 border-slate-200 focus-visible:ring-blue-600/20 focus-visible:border-blue-600"
                    />
                </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-2 sm:gap-4">
                <Link to="/hr/create-job" className="hidden sm:block">
                    {/* Primary button will automatically use the blue theme from our Button component */}
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">Create Job</Button>
                </Link>

                <Button variant="ghost" size="icon" className="relative text-slate-600 hover:text-blue-600 hover:bg-blue-50">
                    <Bell className="w-5 h-5" />
                    {/* Notification dot in professional blue */}
                    <span className="absolute top-2 right-2 w-2 h-2 bg-blue-600 rounded-full border-2 border-white" />
                </Button>

                <Button
                    variant="ghost"
                    size="icon"
                    className="text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                    onClick={() => navigate("/hr/profile")}
                >
                    <User className="w-5 h-5" />
                </Button>
            </div>
        </nav>
    );
}