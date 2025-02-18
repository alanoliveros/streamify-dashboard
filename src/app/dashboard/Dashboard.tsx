import {AppSidebar} from "@/components/app-sidebar"
import {useEffect, useState} from "react";
import {Separator} from "@/components/ui/separator"
import {SidebarInset, SidebarProvider, SidebarTrigger,} from "@/components/ui/sidebar"
import {Breadcrumb, BreadcrumbItem, BreadcrumbList, BreadcrumbPage,} from "@/components/ui/breadcrumb"
import {Button} from "@/components/ui/button.tsx";
import {useTheme} from "@/components/theme-provider.tsx";
import {MetricsCard} from "@/components/custom/MetricsCard.tsx";
import {Moon, Sun} from "lucide-react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    BarChart,
    Bar
} from "recharts";


export default function Dashboard() {

    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setMounted(true);
        }
    }, []);


    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    // Mock Data for Key Metrics
    const metrics = [
        {title: "Total Users", value: "1,250,000", description: "Registered users"},
        {title: "Active Users", value: "950,000", description: "Users in last 30 days"},
        {title: "Total Streams", value: "15,000,000", description: "Total streams"},
        {title: "Revenue", value: "$500,000", description: "Revenue from subs & ads"},
        {title: "Top Artist", value: "Artist XYZ", description: "Most streamed artist"},
    ];

    const userGrowthData = [
        {month: "Jan", total: 1000000, active: 800000},
        {month: "Feb", total: 1050000, active: 850000},
        {month: "Mar", total: 1100000, active: 900000},
        {month: "Apr", total: 1150000, active: 920000},
        {month: "May", total: 1200000, active: 940000},
        {month: "Jun", total: 1250000, active: 950000}
    ];

    const revenueData = [
        {name: "Subscriptions", value: 300000},
        {name: "Ads", value: 200000}
    ];

    const topSongsData = [
        {name: "Song A", streams: 500000},
        {name: "Song B", streams: 450000},
        {name: "Song C", streams: 400000},
        {name: "Song D", streams: 350000},
        {name: "Song E", streams: 300000}
    ];

    const COLORS = ["#0088FE", "#00C49F"];


    return (
        <SidebarProvider>
            <AppSidebar/>
            <SidebarInset>
                <header
                    className="flex sticky top-0 bg-background h-16 shrink-0 justify-between items-center gap-2 border-b px-4">
                    <div className="flex items-center gap-2">
                        <SidebarTrigger className="-ml-1"/>
                        <Separator orientation="vertical" className="mr-2 h-4 hidden md:block"/>
                        <Breadcrumb className="hidden md:block">
                            <BreadcrumbList>
                                <BreadcrumbItem className="hidden md:block">
                                    <BreadcrumbPage>
                                        Dashboard
                                    </BreadcrumbPage>
                                </BreadcrumbItem>
                            </BreadcrumbList>
                        </Breadcrumb>
                    </div>

                    <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
                        {mounted ? (
                            theme === "dark" ? (
                                <Sun className="h-[1.2rem] w-[1.2rem]"/>
                            ) : (
                                <Moon className="h-[1.2rem] w-[1.2rem]"/>
                            )
                        ) : (
                            <div className="h-[1.2rem] w-[1.2rem] animate-spin">
                                <Sun className="h-[1.2rem] w-[1.2rem]"/>
                            </div>
                        )}
                    </Button>

                </header>

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
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 h-full">

                            {/* Line Chart - User Growth */}
                            <div className="rounded-xl bg-muted/50 p-4">
                                <h3 className="text-lg font-semibold mb-2">User Growth (Last 12 Months)</h3>
                                <ResponsiveContainer width="100%" height={300}>
                                    <LineChart data={userGrowthData}>
                                        <CartesianGrid strokeDasharray="3 3"/>
                                        <XAxis dataKey="month"/>
                                        <YAxis/>
                                        <Tooltip/>
                                        <Line type="monotone" dataKey="total" stroke="#8884d8" name="Total Users"/>
                                        <Line type="monotone" dataKey="active" stroke="#82ca9d" name="Active Users"/>
                                    </LineChart>
                                </ResponsiveContainer>
                            </div>

                            {/* Pie Chart - Revenue Distribution */}
                            <div className="rounded-xl bg-muted/50 p-4">
                                <h3 className="text-lg font-semibold mb-2">Revenue Distribution</h3>
                                <ResponsiveContainer width="100%" height={300}>
                                    <PieChart>
                                        <Pie data={revenueData} dataKey="value" nameKey="name" cx="50%" cy="50%"
                                             outerRadius={80}>
                                            {revenueData.map((_, index) => (
                                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                                            ))}
                                        </Pie>
                                        <Tooltip/>
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>

                            {/* Bar Chart - Top 5 Streamed Songs */}
                            <div className="rounded-xl bg-muted/50 p-4">
                                <h3 className="text-lg font-semibold mb-2">Top 5 Streamed Songs</h3>
                                <ResponsiveContainer width="100%" height={300}>
                                    <BarChart data={topSongsData}>
                                        <XAxis dataKey="name"/>
                                        <YAxis/>
                                        <Tooltip/>
                                        <Bar dataKey="streams" fill="#82ca9d"/>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                    </div>


                </div>


            </SidebarInset>
        </SidebarProvider>
    )
}
