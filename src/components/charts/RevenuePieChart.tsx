import { RevenueData } from "@/types/types";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

interface RevenuePieChartProps {
    data: RevenueData[];
    colors: string[];
}

export function RevenuePieChart({ data, colors }: RevenuePieChartProps) {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <PieChart>
                <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(1)}%)`}
                >
                    {data.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    );
}
