import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';

export function LayoutWrapper({ children }) {
    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar - Desktop */}
            <div className="w-64 bg-sidebar border-r border-sidebar-border flex flex-col overflow-y-auto hidden md:flex">
                <Sidebar />
            </div>

            {/* Main */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <Navbar />
                <main className="flex-1 overflow-y-auto bg-background">
                    {children}
                </main>
            </div>
        </div>
    );
}