export function MetricsCard({ title, value, description }: {
    title: string;
    value: string;
    description: string
}) {
    return (
        <div className="rounded-xl bg-muted/50 p-4 flex-1 min-w-[150px] sm:min-w-[200px] md:min-w-[220px] lg:min-w-[250px]">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-xl font-bold">{value}</p>
            <p className="text-sm">{description}</p>
        </div>
    );
}
