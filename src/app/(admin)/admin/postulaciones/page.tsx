"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { listAllApplications } from "@/lib/firebase/firestore";

export default function AdminPostulacionesPage() {
    const [apps, setApps] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [q, setQ] = useState("");

    useEffect(() => {
        (async () => {
            const data = await listAllApplications();
            setApps(data);
            setLoading(false);
        })();
    }, []);

    const filtered = useMemo(() => {
        const s = q.trim().toLowerCase();
        if (!s) return apps;
        return apps.filter(a =>
            String(a.student_data?.name || "").toLowerCase().includes(s) ||
            String(a.student_data?.rut || "").toLowerCase().includes(s) ||
            String(a.id).toLowerCase().includes(s)
        );
    }, [apps, q]);

    return (
        <div className="space-y-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-slate-900">Postulaciones</h1>
                    <p className="text-slate-500">Gestione y revise todos los procesos de admisión activos.</p>
                </div>
                <div className="relative">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        className="w-full md:w-80 rounded-xl border border-slate-200 bg-white pl-10 pr-4 py-2 text-sm transition-all focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none"
                        placeholder="Buscar por estudiante o RUT..."
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                    />
                </div>
            </div>

            {loading ? (
                <div className="flex h-64 items-center justify-center rounded-2xl border border-slate-100 bg-white">
                    <div className="flex flex-col items-center gap-2">
                        <svg className="animate-spin h-8 w-8 text-slate-900" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <p className="text-slate-500 font-medium">Cargando postulaciones...</p>
                    </div>
                </div>
            ) : (
                <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-slate-50/50 border-b border-slate-200">
                            <tr>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Estudiante</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Curso</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Fecha</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Estado</th>
                                <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Acciones</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {filtered.map((a) => (
                                <tr key={a.id} className="hover:bg-slate-50/50 transition-colors group">
                                    <td className="px-6 py-4">
                                        <div className="font-bold text-slate-900">{a.student_data?.name || "Sin Nombre"}</div>
                                        <div className="text-xs text-slate-500">{a.student_data?.rut || "S/R"}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="text-sm text-slate-700 font-medium uppercase">{a.student_data?.grade || "N/A"}</div>
                                        <div className="text-xs text-slate-400">Año {a.year}</div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-600">
                                        {a.created_at ? new Date(a.created_at.toDate()).toLocaleDateString() : "-"}
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-tight ${a.status === "approved" ? "bg-emerald-100 text-emerald-700" :
                                                a.status === "rejected" ? "bg-red-100 text-red-700" :
                                                    a.status === "submitted" ? "bg-blue-100 text-blue-700" :
                                                        "bg-amber-100 text-amber-700"
                                            }`}>
                                            {a.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <Link
                                            href={`/admin/postulaciones/${a.id}`}
                                            className="inline-flex items-center gap-2 rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700 transition-all hover:bg-slate-900 hover:text-white"
                                        >
                                            Revisar
                                            <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {!filtered.length && (
                        <div className="p-12 text-center">
                            <p className="text-slate-500 font-medium">No se encontraron postulaciones que coincidan con la búsqueda.</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
