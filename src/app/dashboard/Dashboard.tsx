import { RevenuePieChart, TopSongsBarChart, UserGrowthChart } from "@/components/charts";
import { DataTable, MetricsCard } from "@/components/custom";
import { metrics, userGrowthData, revenueData, topSongsData, recentStreams, COLORS } from "@/data/data";

export default function Dashboard() {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4">
            {/* Key Metrics Cards */}
            <div className="flex flex-wrap gap-4">
                {metrics.map((metric, index) => (
                    <MetricsCard
                        key={index}
                        title={metric.title}
                        value={metric.value}
                        description={metric.description}
                    />
                ))}
            </div>

            {/* Container for the second part of the layout with dynamic height and column arrangement */}
            <div className="rounded-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 h-full">
                    {/* Line Chart - User Growth */}
                    <div className="rounded-xl bg-muted/50 p-4 col-span-1 lg:col-span-2 xl:col-span-1">
                        <h3 className="text-lg font-semibold mb-2">User Growth (Last 12 Months)</h3>
                        <UserGrowthChart data={userGrowthData} />
                    </div>

                    {/* Pie Chart - Revenue Distribution */}
                    <div className="rounded-xl bg-muted/50 p-4">
                        <h3 className="text-lg font-semibold mb-2">Revenue Distribution</h3>
                        <RevenuePieChart data={revenueData} colors={COLORS} />
                    </div>

                    {/* Bar Chart - Top 5 Streamed Songs */}
                    <div className="rounded-xl bg-muted/50 p-4">
                        <h3 className="text-lg font-semibold mb-2">Top 5 Streamed Songs</h3>
                        <TopSongsBarChart data={topSongsData} />
                    </div>
                </div>
            </div>

            {/* Data Table - Recent Streams */}
            <div className="bg-muted/50 p-4 rounded-xl">
                <h3 className="text-lg font-semibold mb-2">Recent Streams</h3>
                <DataTable
                    columns={[
                        { key: "song", label: "Song Name", filterable: true },
                        { key: "artist", label: "Artist", filterable: true },
                        { key: "dateStreamed", label: "Date Streamed" },
                        { key: "streamCount", label: "Stream Count" },
                        { key: "userId", label: "User ID" },
                    ]}
                    data={recentStreams}
                />
            </div>
        </div>
    );
}