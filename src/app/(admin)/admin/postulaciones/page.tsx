"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { listAllApplications } from "@/lib/firebase/firestore";
import { Badge } from "@/components/ui/Badge";

export default function AdminPostulacionesPage() {
    const [apps, setApps] = useState<any[]>([]);
    const [q, setQ] = useState("");

    useEffect(() => {
        (async () => setApps(await listAllApplications()))();
    }, []);

    const filtered = useMemo(() => {
        const s = q.trim().toLowerCase();
        if (!s) return apps;
        return apps.filter(a =>
            String(a.id).toLowerCase().includes(s) ||
            String(a.guardian_id).toLowerCase().includes(s) ||
            String(a.status).toLowerCase().includes(s) ||
            String(a.year).includes(s)
        );
    }, [apps, q]);

    return (
        <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                    <h2 className="text-lg font-semibold">Postulaciones</h2>
                    <p className="text-sm text-slate-600">Búsqueda por id, guardian_id, estado o año.</p>
                </div>
                <input
                    className="w-full max-w-sm rounded-md border bg-white px-3 py-2 text-sm"
                    placeholder="Buscar…"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                />
            </div>

            <div className="grid gap-2">
                {filtered.map((a) => (
                    <Link key={a.id} href={`/admin/postulaciones/${a.id}`} className="rounded-xl border bg-white p-5 hover:bg-slate-50">
                        <div className="flex items-center justify-between gap-3">
                            <div>
                                <p className="font-medium">Postulación {a.year}</p>
                                <p className="mt-1 text-sm text-slate-600">ID: {a.id}</p>
                                <p className="text-sm text-slate-600">Guardian: {a.guardian_id}</p>
                            </div>
                            <Badge>{a.status}</Badge>
                        </div>
                    </Link>
                ))}
                {!filtered.length && (
                    <div className="rounded-xl border bg-white p-5 text-sm text-slate-600">Sin resultados.</div>
                )}
            </div>
        </div>
    );
}
