import { SongData } from "@/types/types";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

interface TopSongsBarChartProps {
    data: SongData[];
}

export function TopSongsBarChart({ data }: TopSongsBarChartProps) {
    return (
        <ResponsiveContainer width="100%" height={300}>
            <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="streams" fill="#82ca9d" />
            </BarChart>
        </ResponsiveContainer>
    );
}
