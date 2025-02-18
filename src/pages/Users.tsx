export default function Users() {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4">
            {/* Placeholder Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* Placeholder Card 1 */}
                <div className="bg-muted/50 p-4 rounded-lg">
                    <h2 className="text-lg font-semibold">
                        Total Users
                    </h2>
                    <p className="text-3xl font-bold mt-2">
                        1,234
                    </p>
                    <p className="text-sm mt-1">
                        +5.2% from last month
                    </p>
                </div>

                {/* Placeholder Card 2 */}
                <div className="bg-muted/50 p-4 rounded-lg">
                    <h2 className="text-lg font-semibold">
                        Active Users
                    </h2>
                    <p className="text-3xl font-bold mt-2">
                        789
                    </p>
                    <p className="text-sm mt-1">
                        +12.3% from last month
                    </p>
                </div>

                {/* Placeholder Card 3 */}
                <div className="bg-muted/50 p-4 rounded-lg">
                    <h2 className="text-lg font-semibold">
                        New Users
                    </h2>
                    <p className="text-3xl font-bold mt-2">
                        123
                    </p>
                    <p className="text-sm mt-1">
                        +8.7% from last month
                    </p>
                </div>
            </div>

            {/* Placeholder Table */}
            <div className="bg-muted/50 p-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-4">
                    Recent Users
                </h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead>
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                Name
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                Email
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                Role
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
                                Status
                            </th>
                        </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {/* Placeholder Rows */}
                        {[1, 2, 3, 4, 5].map((index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    John Doe {index}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    john.doe{index}@example.com
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                    User
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        <span className="px-2 py-1 text-xs font-semibold text-green-800 dark:text-green-100 bg-green-100 dark:bg-green-800 rounded-full">
                                            Active
                                        </span>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}