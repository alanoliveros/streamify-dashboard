"use client";

import { Pie, PieChart } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { revenueData } from "@/data/data";

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
} satisfies ChartConfig;

export function RevenuePieChart() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Revenue Distribution</CardTitle>
            </CardHeader>
            <CardContent>
                <ChartContainer config={chartConfig} className="mx-auto pb-0 [&_.recharts-pie-label-text]:fill-foreground">
                    <PieChart>
                        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                        <Pie data={revenueData} dataKey="value" label nameKey="name" />
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    );
}
