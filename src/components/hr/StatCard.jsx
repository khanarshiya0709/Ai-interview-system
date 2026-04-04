import { Card } from '../ui/card';

export function StatCard({ label, value }) {
    return (
        <Card className="p-6 border-slate-200 bg-white">

            <p className="text-sm font-medium text-slate-500">
                {label}
            </p>

            <div className="mt-2 flex items-end justify-between">
                <p className="text-3xl font-bold text-slate-900">
                    {value}
                </p>
            </div>

        </Card>
    );
}