// ✅ FIX: Changed to default imports to match your Navbar and Sidebar files
import Navbar from './Navbar';
import Sidebar from './Sidebar';

export function LayoutWrapper({ children }) {
    return (
        <div className="flex h-screen overflow-hidden">

            {/* Sidebar Desktop */}
            <div className="w-64 bg-white border-r border-slate-200 flex flex-col overflow-y-auto hidden md:flex">
                <Sidebar />
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <Navbar />
                <main className="flex-1 overflow-y-auto bg-slate-50">
                    {children}
                </main>
            </div>
        </div>
    );
}