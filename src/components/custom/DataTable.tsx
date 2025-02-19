import React, {useCallback, useState} from "react";
import {DataTableProps, SortConfig, StreamData} from "@/types/types";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Input} from "../ui/input";

export function DataTable<T extends StreamData>({ columns, data }: DataTableProps<T>) {
    const [sortConfig, setSortConfig] = useState<SortConfig<T> | null>(null);
    const [filters, setFilters] = useState<Partial<Record<keyof T, string>>>({});

    const sortedData = React.useMemo(() => {
        if (!sortConfig) return data;

        return [...data].sort((a, b) => {
            const aValue = a[sortConfig.key];
            const bValue = b[sortConfig.key];

            if (typeof aValue === "string" && typeof bValue === "string") {
                return sortConfig.direction === "asc"
                    ? aValue.localeCompare(bValue)
                    : bValue.localeCompare(aValue);
            }

            if (typeof aValue === "number" && typeof bValue === "number") {
                return sortConfig.direction === "asc" ? aValue - bValue : bValue - aValue;
            }

            return 0;
        });
    }, [data, sortConfig]);

    const filteredData = React.useMemo(() => {
        return sortedData.filter((row) => {
            return columns.every((column) => {
                if (!column.filterable || !filters[column.key]) return true;
                const rowValue = (row[column.key as keyof T] as unknown as string).toLowerCase();
                const filterValue = String(filters[column.key] ?? "").toLowerCase();
                return rowValue.includes(filterValue);
            });
        });
    }, [sortedData, filters, columns]);

    const handleSort = useCallback((key: keyof T) => {
        const direction = sortConfig?.key === key && sortConfig.direction === "asc" ? "desc" : "asc";
        setSortConfig({ key, direction });
    }, [sortConfig]);

    const handleFilterChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFilters((prevFilters) => ({
            ...prevFilters,
            [name]: value,
        }));
    }, []);

    return (
        <div>
            <div className="mb-4 flex flex-wrap gap-4">
                {columns
                    .filter((column) => column.filterable)
                    .map((column) => (
                        <Input
                            key={String(column.key)}
                            type="text"
                            name={String(column.key)}
                            value={filters[column.key] || ""}
                            onChange={handleFilterChange}
                            placeholder={`Filter by ${column.label}`}
                            className="p-2 sm:min-w-[150px] sm:max-w-[300px]"
                        />
                    ))}
            </div>

            <Table>
                <TableHeader>
                    <TableRow>
                        {columns.map((column) => (
                            <TableHead
                                key={String(column.key)}
                                onClick={() => handleSort(column.key)}
                                aria-label={`Sort by ${column.label}`}
                            >
                                <div className="cursor-pointer flex items-center">
                                    {column.label}
                                    {sortConfig?.key === column.key && (
                                        <span className="ml-2" aria-label={sortConfig.direction === "asc" ? "Sorted ascending" : "Sorted descending"}>
                                            {sortConfig.direction === "asc" ? "↑" : "↓"}
                                        </span>
                                    )}
                                </div>
                            </TableHead>
                        ))}
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredData.map((row, rowIndex) => (
                        <TableRow key={rowIndex}>
                            {columns.map((column) => (
                                <TableCell key={String(column.key)}>
                                    {row[column.key] !== undefined ? (row[column.key] as React.ReactNode) : ""}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}