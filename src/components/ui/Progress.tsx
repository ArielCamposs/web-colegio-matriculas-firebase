import { cn } from "@/lib/utils";

interface ProgressProps {
    value: number;
    className?: string;
}

export function Progress({ value, className }: ProgressProps) {
    const percentage = Math.min(100, Math.max(0, value));

    return (
        <div className={cn("h-2 w-full overflow-hidden rounded-full bg-slate-200", className)}>
            <div
                className="h-full bg-slate-900 transition-all duration-300 ease-in-out"
                style={{ width: `${percentage}%` }}
            />
        </div>
    );
}
