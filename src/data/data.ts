import { StreamData } from "@/types/types";

// Mock Data for Key Metrics
export const metrics = [
    {title: "Total Users", value: "1,250,000", description: "Registered users"},
    {title: "Active Users", value: "950,000", description: "Users in last 30 days"},
    {title: "Total Streams", value: "15,000,000", description: "Total streams"},
    {title: "Revenue", value: "$500,000", description: "Revenue from subs & ads"},
    {title: "Top Artist", value: "Artist XYZ", description: "Most streamed artist"},
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