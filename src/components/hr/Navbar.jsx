import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Bell, User, Menu } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu';
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

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <nav className="h-16 border-b border-border bg-background flex items-center justify-between px-6 gap-4">
                <div className="md:hidden w-10" />

                <div className="flex-1 max-w-sm hidden sm:block">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input placeholder="Search candidates, jobs..." className="pl-10 bg-muted" />
                    </div>
                </div>

                <div className="flex items-center gap-2 sm:gap-4">
                    <Link to="/hr/create-job" className="hidden sm:block">
                        <Button size="sm">Create Job</Button>
                    </Link>

                    <Button variant="ghost" size="icon" className="relative">
                        <Bell className="w-5 h-5" />
                        <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full" />
                    </Button>

                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <User className="w-5 h-5" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                            <DropdownMenuItem asChild>
                                <Link to="/hr/profile">Profile</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </nav>
        );
    }

    return (
        <nav className="h-16 border-b border-border bg-background flex items-center justify-between px-6 gap-4">
            <div className="md:hidden">
                <Drawer open={open} onOpenChange={setOpen}>
                    <DrawerTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="w-5 h-5" />
                        </Button>
                    </DrawerTrigger>
                    <DrawerContent className="h-screen w-64 p-0">
                        <DrawerTitle className="sr-only">Navigation Menu</DrawerTitle>
                        <DrawerDescription className="sr-only">
                            Main navigation menu for the HR dashboard
                        </DrawerDescription>
                        <Sidebar />
                    </DrawerContent>
                </Drawer>
            </div>

            <div className="flex-1 max-w-sm hidden sm:block">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Search candidates, jobs..." className="pl-10 bg-muted" />
                </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
                <Link to="/hr/create-job" className="hidden sm:block">
                    <Button size="sm">Create Job</Button>
                </Link>

                <Button variant="ghost" size="icon" className="relative">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-2 right-2 w-2 h-2 bg-destructive rounded-full" />
                </Button>

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <User className="w-5 h-5" />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                        <DropdownMenuItem asChild>
                            <Link to="/hr/profile">Profile</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    );
}