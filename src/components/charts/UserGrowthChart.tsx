import { UserGrowthData } from "@/types/types";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

interface UserGrowthChartProps {
    data: UserGrowthData[];
}

export function UserGrowthChart({ data }: UserGrowthChartProps) {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="total" stroke="#8884d8" name="Total Users" />
                <Line type="monotone" dataKey="active" stroke="#82ca9d" name="Active Users" />
            </LineChart>
        </ResponsiveContainer>
    );
}
