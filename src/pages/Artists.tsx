export default function Artists() {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4">
            <div className="bg-muted/50 p-4 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-4">
                    Top Artists
                </h2>
                <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((index) => (
                        <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 bg-primary/50 rounded-full"></div>
                                <p className="text-sm font-medium">
                                    Artist {index}
                                </p>
                            </div>
                            <p className="text-sm">
                                1,234 streams
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}