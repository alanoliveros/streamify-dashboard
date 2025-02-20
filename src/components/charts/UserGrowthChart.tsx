"use client"

import { LineChart, Line, XAxis, CartesianGrid } from "recharts";
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

const userGrowthData = [
    { month: "Jan", total: 1000000, active: 800000 },
    { month: "Feb", total: 1050000, active: 850000 },
    { month: "Mar", total: 1100000, active: 900000 },
    { month: "Apr", total: 1150000, active: 920000 },
    { month: "May", total: 1200000, active: 940000 },
    { month: "Jun", total: 1250000, active: 950000 },
    { month: "Jul", total: 1300000, active: 960000 },
    { month: "Aug", total: 1350000, active: 970000 },
    { month: "Sep", total: 1400000, active: 980000 },
    { month: "Oct", total: 1450000, active: 990000 },
    { month: "Nov", total: 1500000, active: 1000000 },
    { month: "Dec", total: 1550000, active: 1020000 }
];

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
