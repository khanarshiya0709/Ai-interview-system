import { TrendingUp, TrendingDown } from 'lucide-react';
import { Card } from '../ui/card';

export function StatCard({ label, value }) {

    return (
        <Card className="p-6 border-slate-200 bg-white">
            {/* Label: Using Slate-500 for a clean muted look */}
            <p className="text-sm font-medium text-slate-500">{label}</p>

            <div className="mt-2 flex items-end justify-between">
                {/* Value: Using Slate-900 for maximum readability */}
                <p className="text-3xl font-bold text-slate-900">{value}</p>
            </div>
        </Card>
    );
}