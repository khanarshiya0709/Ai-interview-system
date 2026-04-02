import { Navbar } from './Navbar';
import { Sidebar } from './Sidebar';

export function LayoutWrapper({ children }) {
    return (
        <div className="flex h-screen overflow-hidden">
            {/* Sidebar - Desktop */}
            {/* bg-white and border-slate-200 for a clean professional look */}
            <div className="w-64 bg-white border-r border-slate-200 flex flex-col overflow-y-auto hidden md:flex">
                <Sidebar />
            </div>

            {/* Main */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <Navbar />
                {/* bg-slate-50 provides a subtle contrast against white cards and sidebar */}
                <main className="flex-1 overflow-y-auto bg-slate-50">
                    {children}
                </main>
            </div>
        </div>
    );
}