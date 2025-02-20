import { StreamData } from "@/types/types";

// Mock Data for Key Metrics
export const metrics = [
    {title: "Total Users", value: "1,250,000", description: "Registered users"},
    {title: "Active Users", value: "950,000", description: "Users in last 30 days"},
    {title: "Total Streams", value: "15,000,000", description: "Total streams"},
    {title: "Revenue", value: "$500,000", description: "Revenue from subs & ads"},
    {title: "Top Artist", value: "Artist XYZ", description: "Most streamed artist"},
];

export const userGrowthData = [
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


export const revenueData = [
    {name: "Subscriptions", value: 300000},
    {name: "Ads", value: 200000}
];

export const topSongsData = [
    {name: "Song A", streams: 500000},
    {name: "Song B", streams: 450000},
    {name: "Song C", streams: 400000},
    {name: "Song D", streams: 350000},
    {name: "Song E", streams: 300000}
];

export const recentStreams: StreamData[] = [
    {
        id: 1,
        song: "Blinding Lights",
        artist: "The Weeknd",
        dateStreamed: "2025-02-17",
        streamCount: 15000,
        userId: "user_1234",
    },
    {
        id: 2,
        song: "Levitating",
        artist: "Dua Lipa",
        dateStreamed: "2025-02-17",
        streamCount: 12000,
        userId: "user_5678",
    },
    {
        id: 3,
        song: "Save Your Tears",
        artist: "The Weeknd",
        dateStreamed: "2025-02-16",
        streamCount: 18000,
        userId: "user_9101",
    },
    {
        id: 4,
        song: "Peaches",
        artist: "Justin Bieber",
        dateStreamed: "2025-02-16",
        streamCount: 10000,
        userId: "user_1121",
    },
    {
        id: 5,
        song: "Stay",
        artist: "The Kid LAROI & Justin Bieber",
        dateStreamed: "2025-02-15",
        streamCount: 22000,
        userId: "user_3141",
    },
];

export const COLORS = ["#0088FE", "#00C49F"];