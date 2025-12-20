"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
    getApplication,
    listDocuments,
    setApplicationStatus,
    verifyDocument,
    ApplicationStatus,
} from "@/lib/firebase/firestore";

export default function AdminPostulacionDetallePage() {
    const { id } = useParams<{ id: string }>();
    const router = useRouter();

    const [app, setApp] = useState<any>(null);
    const [docs, setDocs] = useState<any[]>([]);
    const [err, setErr] = useState<string | null>(null);
    const [saving, setSaving] = useState(false);

    async function reload() {
        const a = await getApplication(id);
        const d = await listDocuments(id);
        setApp(a);
        setDocs(d);
    }

    useEffect(() => {
        reload();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id]);

    const docsByType = useMemo(() => {
        const map = new Map<string, any[]>();
        docs.forEach((d) => {
            const key = d.type || "otro";
            const arr = map.get(key) ?? [];
            arr.push(d);
            map.set(key, arr);
        });
        return map;
    }, [docs]);

    async function onStatus(status: ApplicationStatus) {
        setErr(null);
        setSaving(true);
        try {
            await setApplicationStatus(id, status);
            await reload();
        } catch (e: any) {
            setErr(e?.message ?? "No se pudo cambiar estado");
        } finally {
            setSaving(false);
        }
    }

    async function onVerify(docId: string, verified: boolean) {
        setErr(null);
        setSaving(true);
        try {
            await verifyDocument(docId, verified, null);
            await reload();
        } catch (e: any) {
            setErr(e?.message ?? "No se pudo verificar");
        } finally {
            setSaving(false);
        }
    }

    async function onSetNote(docId: string, note: string) {
        setErr(null);
        setSaving(true);
        try {
            await verifyDocument(docId, false, note);
            await reload();
        } catch (e: any) {
            setErr(e?.message ?? "No se pudo guardar la nota");
        } finally {
            setSaving(false);
        }
    }

    if (!app) return (
        <div className="flex h-screen items-center justify-center bg-white">
            <div className="animate-pulse text-slate-400 font-medium">Cargando detalles...</div>
        </div>
    );

    return (
        <div className="max-w-6xl mx-auto py-8 px-4 space-y-8">
            {/* Header / Breadcrumb */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between border-b border-slate-100 pb-6">
                <div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-2">
                        <Link href="/admin/postulaciones" className="hover:text-slate-900 transition-colors">Postulaciones</Link>
                        <span>/</span>
                        <span className="text-slate-900 font-medium">ID {id.slice(0, 8)}</span>
                    </div>
                    <h1 className="text-3xl font-extrabold text-slate-900">
                        {app.student_data?.name || "Sin Nombre"}
                    </h1>
                </div>

                <div className="flex flex-wrap gap-3">
                    <button
                        disabled={saving}
                        onClick={() => onStatus("observed")}
                        className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-2 text-sm font-bold text-amber-700 hover:bg-amber-100 transition-all disabled:opacity-50"
                    >
                        Solicitar Correcciones
                    </button>
                    <button
                        disabled={saving}
                        onClick={() => onStatus("approved")}
                        className="rounded-xl bg-emerald-600 px-6 py-2 text-sm font-bold text-white hover:bg-emerald-500 shadow-lg shadow-emerald-200 transition-all disabled:opacity-50"
                    >
                        Aprobar Postulación
                    </button>
                    <button
                        disabled={saving}
                        onClick={() => onStatus("rejected")}
                        className="rounded-xl bg-orange-600 px-4 py-2 text-sm font-bold text-white hover:bg-orange-500 transition-all disabled:opacity-50"
                    >
                        Rechazar
                    </button>
                </div>
            </div>

            {err && (
                <div className="p-4 rounded-xl bg-red-50 border border-red-100 text-red-600 text-sm font-medium">
                    Error: {err}
                </div>
            )}

            <div className="grid gap-8 lg:grid-cols-3">
                {/* Information Sidebar */}
                <div className="lg:col-span-1 space-y-6">
                    <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm overflow-hidden">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Información del Estudiante</h3>
                        <div className="space-y-4">
                            <div>
                                <p className="text-xs text-slate-500">RUT</p>
                                <p className="font-bold text-slate-900">{app.student_data?.rut || "N/A"}</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500">Curso al que postula</p>
                                <p className="font-bold text-slate-900 uppercase">{app.student_data?.grade || "N/A"}</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500">Colegio Procedencia</p>
                                <p className="font-medium text-slate-900">{app.academic_data?.previous_school || "No indicado"}</p>
                            </div>
                        </div>
                    </section>

                    <section className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                        <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Datos del Apoderado</h3>
                        <div className="space-y-4">
                            <div>
                                <p className="text-xs text-slate-500">ID Apoderado</p>
                                <p className="text-xs font-mono text-slate-400 truncate">{app.guardian_id}</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500">Teléfono</p>
                                <p className="font-bold text-slate-900">{app.guardian_data?.phone || "N/A"}</p>
                            </div>
                            <div>
                                <p className="text-xs text-slate-500">Dirección</p>
                                <p className="font-medium text-slate-900">{app.guardian_data?.address || "N/A"}</p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Main Content: Documents & Review */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm">
                        <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                            <h2 className="text-xl font-bold text-slate-900">Validación de Documentos</h2>
                            <span className="text-xs font-bold text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                                {docs.length} ARCHIVOS
                            </span>
                        </div>

                        <div className="divide-y divide-slate-100">
                            {docs.length === 0 ? (
                                <div className="p-10 text-center text-slate-500 italic">No se han cargado documentos aún.</div>
                            ) : (
                                [...docsByType.entries()].map(([docType, items]) => {
                                    const last = items[0];
                                    return (
                                        <div key={docType} className="p-6 transition-colors hover:bg-slate-50/50">
                                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                                <div className="flex gap-4">
                                                    <div className={`mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-bold ${last.verified ? "bg-emerald-100 text-emerald-600" : "bg-slate-100 text-slate-400"
                                                        }`}>
                                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                        </svg>
                                                    </div>
                                                    <div className="space-y-1">
                                                        <h4 className="font-bold text-slate-900 capitalize">{docType.replace(/([A-Z])/g, ' $1').trim()}</h4>
                                                        <p className="text-sm text-slate-500">{last.name}</p>
                                                        {last.note && (
                                                            <div className="text-xs bg-amber-50 text-amber-800 p-2 rounded-lg border border-amber-100 mt-2">
                                                                <strong>Nota:</strong> {last.note}
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>

                                                <div className="flex flex-wrap gap-2">
                                                    {last.url && (
                                                        <a
                                                            className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all"
                                                            href={last.url}
                                                            target="_blank"
                                                            rel="noreferrer"
                                                        >
                                                            Ver PDF
                                                        </a>
                                                    )}
                                                    <button
                                                        disabled={saving}
                                                        onClick={() => onVerify(last.id, !last.verified)}
                                                        className={`rounded-xl px-4 py-2 text-sm font-bold transition-all shadow-sm ${last.verified
                                                                ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                                                                : "bg-slate-900 text-white shadow-slate-200"
                                                            }`}
                                                    >
                                                        {last.verified ? "Verificado ✓" : "Validar"}
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="mt-6 flex flex-col gap-2 md:flex-row md:items-center">
                                                <input
                                                    placeholder="Añadir nota de observación..."
                                                    className="flex-1 rounded-xl border border-slate-100 bg-slate-50 px-4 py-2 text-sm outline-none focus:bg-white focus:ring-1 focus:ring-slate-900"
                                                    onKeyDown={(e) => {
                                                        if (e.key === "Enter") {
                                                            const val = (e.target as HTMLInputElement).value;
                                                            onSetNote(last.id, val);
                                                        }
                                                    }}
                                                />
                                            </div>
                                        </div>
                                    );
                                })
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
