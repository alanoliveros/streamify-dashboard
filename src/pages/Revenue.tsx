import { Card, CardContent } from "@/components/ui/card";
import { BarChart, LineChart } from "lucide-react";

export default function Revenue() {
    return (
        <div className="p-4 space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Placeholder for Revenue Chart */}
                <Card className="h-64 flex items-center justify-center text-gray-400">
                    <CardContent className="flex flex-col items-center justify-center h-full">
                        <BarChart className="w-12 h-12" />
                        <p className="mt-2 text-sm">Revenue Chart (Coming Soon)</p>
                    </CardContent>
                </Card>

                {/* Placeholder for Key Metrics */}
                <Card className="h-64 flex items-center justify-center text-gray-400">
                    <CardContent className="flex flex-col items-center justify-center h-full">
                        <LineChart className="w-12 h-12" />
                        <p className="mt-2 text-sm">Key Metrics (Coming Soon)</p>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
