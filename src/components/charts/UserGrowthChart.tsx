"use client"

import { LineChart, Line, XAxis, CartesianGrid } from "recharts";
import {Card, CardContent, CardHeader, CardTitle,} from "@/components/ui/card";
import {ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent,} from "@/components/ui/chart";
import {userGrowthData} from "@/data/data.ts";

const chartConfig = {
    total: {
        label: "Total Users",
        color: "hsl(var(--chart-1))",
    },
    active: {
        label: "Active Users",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig;

export function UserGrowthChart() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>User Growth (Last 12 Months)</CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <LineChart
                        accessibilityLayer
                        data={userGrowthData}
                        margin={{ left: 12, right: 12 }}
                    >
                        <CartesianGrid vertical={false} strokeDasharray="3 3" />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            axisLine={false}
                            tickMargin={8}
                        />
                        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
                        <Line
                            dataKey="total"
                            type="monotone"
                            stroke="var(--color-total)"
                            strokeWidth={2}
                            dot={false}
                        />
                        <Line
                            dataKey="active"
                            type="monotone"
                            stroke="var(--color-active)"
                            strokeWidth={2}
                            dot={false}
                        />
                    </LineChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
