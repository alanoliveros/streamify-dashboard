"use client"

import { Pie, PieChart } from "recharts"

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"

const chartConfig = {
    value: {
        label: "Revenue",
    },
    Subscriptions: {
        label: "Subscriptions",
        color: "hsl(var(--chart-1))",
    },
    Ads: {
        label: "Ads",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

const revenueData = [
    {name: "Subscriptions", value: 300000, fill: "hsl(var(--chart-1))"},
    {name: "Ads", value: 200000, fill: "hsl(var(--chart-2))"},
    {name: "Ads", value: 200000, fill: "hsl(var(--chart-2))"},
    {name: "Ads", value: 200000, fill: "hsl(var(--chart-2))"},
];

export function RevenuePieChart() {
    return (
        <Card className="flex flex-col">
            <CardHeader className="pb-0">
                <CardTitle>Revenue Distribution</CardTitle>
                {/*<CardDescription>January - June 2024</CardDescription>*/}
            </CardHeader>
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto max-h-[250px] pb-0 [&_.recharts-pie-label-text]:fill-foreground"
                >
                    <PieChart>
                        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                        <Pie data={revenueData} dataKey="value" label nameKey="name" />
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
