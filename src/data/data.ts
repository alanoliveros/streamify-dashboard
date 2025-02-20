import { RevenueData, StreamData, TopSongData, UserGrowthData } from "@/types/types";

// Mock Data for Key Metrics
export const metrics = [
    { title: "Total Users", value: "1,273,892", description: "Registered users" },
    { title: "Active Users", value: "963,472", description: "Users in last 30 days" },
    { title: "Total Streams", value: "18,342,150", description: "Total streams" },
    { title: "Revenue", value: "$512,347", description: "Revenue from subs & ads" },
    { title: "Top Artist", value: "Taylor Swift", description: "Most streamed artist" },
];

export const recentStreams: StreamData[] = [
    {
        id: 1,
        song: "Anti-Hero",
        artist: "Taylor Swift",
        dateStreamed: "2025-02-19",
        streamCount: 15620,
        userId: "user_7A23F1",
    },
    {
        id: 2,
        song: "Shape of You",
        artist: "Ed Sheeran",
        dateStreamed: "2025-02-19",
        streamCount: 13285,
        userId: "user_4C89D3",
    },
    {
        id: 3,
        song: "Bad Habits",
        artist: "Ed Sheeran",
        dateStreamed: "2025-02-18",
        streamCount: 14950,
        userId: "user_1F23B6",
    },
    {
        id: 4,
        song: "Flowers",
        artist: "Miley Cyrus",
        dateStreamed: "2025-02-18",
        streamCount: 12789,
        userId: "user_8D41E7",
    },
    {
        id: 5,
        song: "Blinding Lights",
        artist: "The Weeknd",
        dateStreamed: "2025-02-17",
        streamCount: 16274,
        userId: "user_5B62A3",
    },
];

export const revenueData: RevenueData[] = [
    { name: "Subscriptions", value: 342347, fill: "hsl(var(--chart-1))" },
    { name: "Ads", value: 170000, fill: "hsl(var(--chart-2))" },
];

export const userGrowthData: UserGrowthData[] = [
    { month: "Jan", total: 987650, active: 785000 },
    { month: "Feb", total: 1043200, active: 832450 },
    { month: "Mar", total: 1105920, active: 874100 },
    { month: "Apr", total: 1162740, active: 901240 },
    { month: "May", total: 1209830, active: 918700 },
    { month: "Jun", total: 1253470, active: 935420 },
    { month: "Jul", total: 1298700, active: 950280 },
    { month: "Aug", total: 1348720, active: 960210 },
    { month: "Sep", total: 1403920, active: 972000 },
    { month: "Oct", total: 1458120, active: 981340 },
    { month: "Nov", total: 1512300, active: 992800 },
    { month: "Dec", total: 1573892, active: 1024500 },
];

export const topSongsData: TopSongData[] = [
    { name: "Anti-Hero", streams: 525430 },
    { name: "Shape of You", streams: 489720 },
    { name: "Bad Habits", streams: 472850 },
    { name: "Flowers", streams: 451670 },
    { name: "Blinding Lights", streams: 430125 },
];
