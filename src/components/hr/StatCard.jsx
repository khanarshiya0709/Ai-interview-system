import { TrendingUp, TrendingDown } from 'lucide-react';
import { Card } from '../ui/card';

export function StatCard({ label, value, change, trend }) {
    const isUp = trend === 'up';

    return (
        <Card className="p-6">
            <p className="text-sm font-medium text-muted-foreground">{label}</p>

            <div className="mt-2 flex items-end justify-between">
                <p className="text-3xl font-bold text-foreground">{value}</p>

                <div className={`flex items-center gap-1 text-sm font-medium ${isUp ? 'text-green-600' : 'text-red-600'
                    }`}>
                    {isUp ? (
                        <TrendingUp className="w-4 h-4" />
                    ) : (
                        <TrendingDown className="w-4 h-4" />
                    )}
                    <span>{change}%</span>
                </div>
            </div>
        </Card>
    );
}