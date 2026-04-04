import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bell, User, Menu } from 'lucide-react';
import { Button } from '../ui/button';

import {
    Drawer,
    DrawerContent,
    DrawerTrigger,
    DrawerTitle,
    DrawerDescription
} from '../ui/drawer';

import Sidebar from './Sidebar';

const Navbar = ({ onMenuClick }) => {
    const [open, setOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <nav className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-6" />;

    return (
        <nav className="h-16 border-b border-slate-200 bg-white flex items-center justify-between px-6">

            {/* Mobile Sidebar */}
            <div className="md:hidden">
                <Drawer direction="left" open={open} onOpenChange={setOpen}>
                    <DrawerTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-slate-600 hover:text-blue-600 hover:bg-blue-50">
                            <Menu className="w-5 h-5" />
                        </Button>
                    </DrawerTrigger>

                    <DrawerContent className="h-screen w-60 p-0 rounded-none border-r border-slate-200 bg-white shadow-xl">
                        <DrawerTitle className="sr-only">Navigation Menu</DrawerTitle>
                        <DrawerDescription className="sr-only">Main navigation</DrawerDescription>

                        <Sidebar onClose={() => setOpen(false)} />
                    </DrawerContent>
                </Drawer>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4 ml-auto">

                <Button variant="ghost" size="icon" className="relative text-slate-600 hover:text-blue-600 hover:bg-blue-50">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-blue-600 rounded-full border-2 border-white" />
                </Button>

                <Button
                    variant="ghost"
                    size="icon"
                    className="text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                    // ✅ FIX: Path corrected to /candidate/profile
                    onClick={() => navigate("/candidate/profile")}
                >
                    <User className="w-5 h-5" />
                </Button>
            </div>
        </nav>
    );
};

export default Navbar;