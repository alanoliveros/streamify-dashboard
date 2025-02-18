export function MetricsCard({ title, value, description }: {
    title: string;
    value: string;
    description: string
}) {
    return (
        <div className="rounded-xl bg-muted/50 p-4">
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-xl font-bold">{value}</p>
            <p className="text-sm">{description}</p>
        </div>
    );
}
