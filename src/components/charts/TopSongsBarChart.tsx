"use client";

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";


const chartConfig = {
    streams: {
        label: "Streams",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig;


const topSongsData = [
    {name: "Song A", streams: 500000},
    {name: "Song B", streams: 450000},
    {name: "Song C", streams: 400000},
    {name: "Song D", streams: 350000},
    {name: "Song E", streams: 300000},
    {name: "Song E", streams: 300000},
    {name: "Song E", streams: 300000},
    {name: "Song E", streams: 300000},
    {name: "Song E", streams: 300000},
];

export function TopSongsBarChart() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Top 5 Streamed Songs</CardTitle>
                {/*<CardDescription>Most streamed songs</CardDescription>*/}
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={topSongsData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="name"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                        />
                        <YAxis tickFormatter={(value) => value.toLocaleString()} />
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Bar dataKey="streams" fill="var(--color-streams)" radius={8} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
