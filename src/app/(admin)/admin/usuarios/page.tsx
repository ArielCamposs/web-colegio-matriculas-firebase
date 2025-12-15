"use client";

import { useEffect, useMemo, useState } from "react";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { db } from "@/lib/firebase/client";
import { useAuth } from "@/app/providers";
import { Badge } from "@/components/ui/Badge";

type ProfileRow = {
    id: string;
    full_name?: string;
    email?: string;
    role?: string; // guardian/admin etc (opcional, tu UI puede ignorarlo)
    created_at?: any;
};

async function fetchProfiles(): Promise<ProfileRow[]> {
    const q = query(collection(db, "profiles"), orderBy("created_at", "desc"));
    const snap = await getDocs(q);
    return snap.docs.map(d => ({ id: d.id, ...(d.data() as any) }));
}

export default function AdminUsuariosPage() {
    const { user } = useAuth();
    const [rows, setRows] = useState<ProfileRow[]>([]);
    const [q, setQ] = useState("");
    const [busyUid, setBusyUid] = useState<string | null>(null);
    const [err, setErr] = useState<string | null>(null);

    async function reload() {
        setErr(null);
        try {
            setRows(await fetchProfiles());
        } catch (e: any) {
            setErr(e?.message ?? "No se pudo cargar profiles (revisa rules admin).");
        }
    }

    useEffect(() => {
        reload();
    }, []);

    const filtered = useMemo(() => {
        const s = q.trim().toLowerCase();
        if (!s) return rows;
        return rows.filter(r =>
            r.id.toLowerCase().includes(s) ||
            (r.full_name || "").toLowerCase().includes(s) ||
            (r.email || "").toLowerCase().includes(s) ||
            (r.role || "").toLowerCase().includes(s)
        );
    }, [rows, q]);

    async function setAdmin(uid: string, admin: boolean) {
        if (!user) return;
        setErr(null);
        setBusyUid(uid);

        try {
            const idToken = await user.getIdToken(true);

            const res = await fetch("/api/admin/set-claim", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer ${idToken}`,
                },
                body: JSON.stringify({ uid, admin }),
            });

            const data = await res.json().catch(() => ({}));
            if (!res.ok) throw new Error(data?.error || "Error set-claim");

            // Solo refresca lista (los claims del usuario afectado aplican en su próximo refresh/login)
            await reload();
        } catch (e: any) {
            setErr(e?.message ?? "No se pudo actualizar rol admin");
        } finally {
            setBusyUid(null);
        }
    }

    return (
        <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                    <h2 className="text-lg font-semibold">Usuarios</h2>
                    <p className="text-sm text-slate-600">Asigna/quita admin (Custom Claims).</p>
                </div>
                <input
                    className="w-full max-w-sm rounded-md border bg-white px-3 py-2 text-sm"
                    placeholder="Buscar por uid / nombre / email…"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                />
            </div>

            {err && <p className="text-sm text-rose-600">{err}</p>}

            <div className="grid gap-2">
                {filtered.map((r) => (
                    <div key={r.id} className="rounded-xl border bg-white p-5">
                        <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                                <p className="font-medium truncate">{r.full_name || "Sin nombre"}</p>
                                <p className="text-sm text-slate-600 break-all">UID: {r.id}</p>
                                {r.email && <p className="text-sm text-slate-600 break-all">Email: {r.email}</p>}
                                {r.role && (
                                    <div className="mt-2">
                                        <Badge>{r.role}</Badge>
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-wrap gap-2">
                                <button
                                    disabled={busyUid === r.id}
                                    onClick={() => setAdmin(r.id, true)}
                                    className="rounded-md bg-slate-900 px-3 py-2 text-sm text-white hover:bg-slate-800 disabled:opacity-60"
                                >
                                    Hacer admin
                                </button>
                                <button
                                    disabled={busyUid === r.id}
                                    onClick={() => setAdmin(r.id, false)}
                                    className="rounded-md border bg-white px-3 py-2 text-sm hover:bg-slate-100 disabled:opacity-60"
                                >
                                    Quitar admin
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                {!filtered.length && (
                    <div className="rounded-xl border bg-white p-5 text-sm text-slate-600">
                        Sin resultados.
                    </div>
                )}
            </div>
        </div>
    );
}
