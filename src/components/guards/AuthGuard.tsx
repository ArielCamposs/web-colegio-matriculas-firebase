"use client";

import { useEffect } from "react";
import { useAuth } from "@/app/providers";
import { usePathname, useRouter } from "next/navigation";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
    const { user, loading } = useAuth();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        if (!loading && !user) router.replace(`/login?next=${encodeURIComponent(pathname)}`);
    }, [loading, user, router, pathname]);

    if (loading) return <p className="text-sm text-slate-600">Cargando…</p>;
    if (!user) return null;
    return <>{children}</>;
}
