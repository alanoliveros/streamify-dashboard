// types.ts

export interface RevenueData {
    name: string;
    value: number;
    fill: string;
}

export interface UserGrowthData {
    month: string;
    total: number;
    active: number;
}

export interface TopSongData {
    name: string;
    streams: number;
}

export interface StreamData {
    id: number;
    song: string;
    artist: string;
    dateStreamed: string;
    streamCount: number;
    userId: string;
}

// Generic Table Column Type
export interface Column<T> {
    key: Extract<keyof T, string>;
    label: string;
    filterable?: boolean;
}

// Generic Table Props
export interface DataTableProps<T> {
    columns: Column<T>[];
    data: T[];
}

// Sorting Configuration
export interface SortConfig<T> {
    key: keyof T;
    direction: "asc" | "desc";
}
