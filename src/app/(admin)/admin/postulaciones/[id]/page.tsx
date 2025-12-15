"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
    getApplication,
    listDocuments,
    setApplicationStatus,
    verifyDocument,
    ApplicationStatus,
} from "@/lib/firebase/firestore";
import { Badge } from "@/components/ui/Badge";

function statusVariant(status: string) {
    if (status === "approved") return "green";
    if (status === "rejected") return "red";
    if (status === "observed") return "yellow";
    return "gray";
}

export default function AdminPostulacionDetallePage() {
    const { id } = useParams<{ id: string }>();

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
            const arr = map.get(d.doc_type) ?? [];
            arr.push(d);
            map.set(d.doc_type, arr);
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
            setErr(e?.message ?? "No se pudo verificar (revisa rules/claims)");
        } finally {
            setSaving(false);
        }
    }

    async function onSetNote(docId: string, note: string) {
        setErr(null);
        setSaving(true);
        try {
            await verifyDocument(docId, false, note); // dejar observed a nivel doc (verified=false) + nota
            await reload();
        } catch (e: any) {
            setErr(e?.message ?? "No se pudo guardar la nota");
        } finally {
            setSaving(false);
        }
    }

    if (!app) return <p className="text-sm text-slate-600">Cargando…</p>;

    return (
        <div className="space-y-6">
            <div className="flex items-start justify-between gap-3">
                <div>
                    <h2 className="text-lg font-semibold">Detalle postulación</h2>
                    <p className="text-sm text-slate-600 break-all">ID: {id}</p>
                </div>
                <Link className="text-sm underline" href="/admin/postulaciones">
                    ← Volver
                </Link>
            </div>

            <div className="rounded-xl border bg-white p-5 space-y-3">
                <div className="flex items-center justify-between gap-3">
                    <div>
                        <p className="font-medium">Postulación {app.year}</p>
                        <p className="text-sm text-slate-600 break-all">Guardian: {app.guardian_id}</p>
                    </div>
                    <Badge variant={statusVariant(app.status) as any}>{app.status}</Badge>
                </div>

                <div className="flex flex-wrap gap-2">
                    <button
                        disabled={saving}
                        onClick={() => onStatus("submitted")}
                        className="rounded-md border bg-white px-3 py-2 text-sm hover:bg-slate-100 disabled:opacity-60"
                    >
                        Marcar “submitted”
                    </button>
                    <button
                        disabled={saving}
                        onClick={() => onStatus("observed")}
                        className="rounded-md border bg-white px-3 py-2 text-sm hover:bg-slate-100 disabled:opacity-60"
                    >
                        Marcar “observed”
                    </button>
                    <button
                        disabled={saving}
                        onClick={() => onStatus("approved")}
                        className="rounded-md bg-emerald-600 px-3 py-2 text-sm text-white hover:bg-emerald-700 disabled:opacity-60"
                    >
                        Aprobar
                    </button>
                    <button
                        disabled={saving}
                        onClick={() => onStatus("rejected")}
                        className="rounded-md bg-rose-600 px-3 py-2 text-sm text-white hover:bg-rose-700 disabled:opacity-60"
                    >
                        Rechazar
                    </button>
                </div>

                {err && <p className="text-sm text-rose-600">{err}</p>}
            </div>

            <div className="rounded-xl border bg-white p-5 space-y-4">
                <div className="flex items-center justify-between">
                    <p className="font-medium">Documentos</p>
                    <p className="text-sm text-slate-600">{docs.length} cargado(s)</p>
                </div>

                {!docs.length && (
                    <p className="text-sm text-slate-600">Aún no hay documentos para esta postulación.</p>
                )}

                {[...docsByType.entries()].map(([docType, items]) => {
                    const last = items[0]; // vienen ordenados desc por created_at en tu helper
                    return (
                        <div key={docType} className="rounded-lg border p-4 space-y-2">
                            <div className="flex items-start justify-between gap-3">
                                <div>
                                    <p className="font-medium">{docType}</p>
                                    <p className="text-sm text-slate-600">
                                        Estado: {last.verified ? "Verificado" : "No verificado"}
                                        {last.note ? ` · Nota: ${last.note}` : ""}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {last.download_url && (
                                        <a
                                            className="rounded-md border bg-white px-3 py-2 text-sm hover:bg-slate-100"
                                            href={last.download_url}
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            Ver archivo
                                        </a>
                                    )}
                                    <button
                                        disabled={saving}
                                        onClick={() => onVerify(last.id, true)}
                                        className="rounded-md bg-slate-900 px-3 py-2 text-sm text-white hover:bg-slate-800 disabled:opacity-60"
                                    >
                                        Verificar
                                    </button>
                                    <button
                                        disabled={saving}
                                        onClick={() => onVerify(last.id, false)}
                                        className="rounded-md border bg-white px-3 py-2 text-sm hover:bg-slate-100 disabled:opacity-60"
                                    >
                                        Desverificar
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2 md:flex-row md:items-center">
                                <input
                                    defaultValue={last.note ?? ""}
                                    placeholder="Nota/observación (ej: falta firma, documento ilegible...)"
                                    className="w-full rounded-md border px-3 py-2 text-sm"
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            const value = (e.target as HTMLInputElement).value;
                                            onSetNote(last.id, value.trim() ? value : "");
                                        }
                                    }}
                                />
                                <button
                                    disabled={saving}
                                    onClick={() => {
                                        const input = document.querySelector<HTMLInputElement>(`input[placeholder^="Nota/observación"]`);
                                        const value = input?.value ?? "";
                                        onSetNote(last.id, value.trim() ? value : "");
                                    }}
                                    className="rounded-md border bg-white px-3 py-2 text-sm hover:bg-slate-100 disabled:opacity-60"
                                >
                                    Guardar nota
                                </button>
                            </div>

                            {items.length > 1 && (
                                <details className="text-sm text-slate-600">
                                    <summary className="cursor-pointer select-none">
                                        Ver historial ({items.length})
                                    </summary>
                                    <ul className="mt-2 space-y-1">
                                        {items.map((d) => (
                                            <li key={d.id} className="break-all">
                                                {d.id} · verified={String(d.verified)} {d.note ? `· note=${d.note}` : ""}
                                            </li>
                                        ))}
                                    </ul>
                                </details>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
