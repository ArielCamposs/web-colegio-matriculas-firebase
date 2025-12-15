"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/app/providers";
import { isAdmin } from "@/lib/firebase/roles";
import { useRouter } from "next/navigation";

export default function AdminGuard({ children }: { children: React.ReactNode }) {
    const { user, loading } = useAuth();
    const [ok, setOk] = useState<boolean | null>(null);
    const router = useRouter();

    useEffect(() => {
        async function run() {
            if (!user) return;
            const allowed = await isAdmin(user);
            setOk(allowed);
            if (!allowed) router.replace("/portal");
        }
        if (!loading && !user) router.replace("/login?next=/admin");
        if (!loading && user) run();
    }, [loading, user, router]);

    if (loading || ok === null) return <p className="text-sm text-slate-600">Validando permisos…</p>;
    if (!ok) return null;
    return <>{children}</>;
}
