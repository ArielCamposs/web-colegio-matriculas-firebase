import { cn } from "@/lib/utils";

type BadgeVariant = "gray" | "green" | "yellow" | "red" | "blue" | "draft" | "pending" | "under_review" | "approved" | "rejected";

export function Badge({ children, variant = "gray" }: { children: React.ReactNode; variant?: BadgeVariant }) {
    const variantMap: Record<BadgeVariant, string> = {
        gray: "bg-slate-100 text-slate-900 border-slate-200",
        green: "bg-emerald-100 text-emerald-900 border-emerald-200",
        yellow: "bg-amber-100 text-amber-900 border-amber-200",
        red: "bg-rose-100 text-rose-900 border-rose-200",
        blue: "bg-blue-100 text-blue-900 border-blue-200",
        draft: "bg-slate-100 text-slate-900 border-slate-200",
        pending: "bg-amber-100 text-amber-900 border-amber-200",
        under_review: "bg-blue-100 text-blue-900 border-blue-200",
        approved: "bg-emerald-100 text-emerald-900 border-emerald-200",
        rejected: "bg-rose-100 text-rose-900 border-rose-200",
    };

    return (
        <span className={cn("inline-flex items-center rounded-full border px-2 py-0.5 text-xs font-medium", variantMap[variant])}>
            {children}
        </span>
    );
}

