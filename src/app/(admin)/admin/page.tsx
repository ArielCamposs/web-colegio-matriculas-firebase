"use client";

import { useEffect, useMemo, useState } from "react";
import { listAllApplications } from "@/lib/firebase/firestore";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

export default function AdminDashboardPage() {
    const [apps, setApps] = useState<any[]>([]);

    useEffect(() => {
        (async () => setApps(await listAllApplications()))();
    }, []);

    const stats = useMemo(() => {
        const s = { draft: 0, submitted: 0, observed: 0, approved: 0, rejected: 0 };
        apps.forEach(a => { s[a.status as keyof typeof s] = (s[a.status as keyof typeof s] ?? 0) + 1; });
        return s;
    }, [apps]);

    return (
        <div className="space-y-6">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
                {Object.entries(stats).map(([k, v]) => (
                    <div key={k} className="rounded-xl border bg-white p-4">
                        <p className="text-xs uppercase tracking-widest text-slate-500">{k}</p>
                        <p className="mt-1 text-2xl font-semibold">{v}</p>
                    </div>
                ))}
            </div>

            <div className="rounded-xl border bg-white p-5">
                <div className="flex items-center justify-between">
                    <p className="font-medium">Últimas postulaciones</p>
                    <Link className="text-sm underline" href="/admin/postulaciones">Ver todas</Link>
                </div>

                <div className="mt-4 grid gap-2">
                    {apps.slice(0, 8).map((a) => (
                        <Link key={a.id} href={`/admin/postulaciones/${a.id}`} className="rounded-lg border bg-white p-4 hover:bg-slate-50">
                            <div className="flex items-center justify-between gap-3">
                                <div>
                                    <p className="text-sm font-medium">Postulación {a.year}</p>
                                    <p className="text-xs text-slate-600">Guardian: {a.guardian_id}</p>
                                </div>
                                <Badge>{a.status}</Badge>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
