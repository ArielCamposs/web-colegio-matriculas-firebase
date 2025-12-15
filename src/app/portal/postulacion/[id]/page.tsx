"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addDoc, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { storage, db } from "@/lib/firebase/client";
import { useAuth } from "@/app/providers";
import { Badge } from "@/components/ui/Badge";
import { Progress } from "@/components/ui/Progress";

const REQUIRED_DOCS = [
    { key: "id_guardian", label: "Cédula apoderado", icon: "👤" },
    { key: "birth_certificate", label: "Certificado de nacimiento", icon: "📄" },
    { key: "last_report", label: "Último informe/notas", icon: "📊" },
];

const STATUS_LABELS: Record<string, { label: string; variant: "draft" | "pending" | "under_review" | "approved" | "rejected" }> = {
    draft: { label: "Borrador", variant: "draft" },
    pending: { label: "Pendiente", variant: "pending" },
    under_review: { label: "En Revisión", variant: "under_review" },
    approved: { label: "Aprobada", variant: "approved" },
    rejected: { label: "Rechazada", variant: "rejected" },
};

export default function ApplicationPage() {
    const { id } = useParams<{ id: string }>();
    const { user, loading } = useAuth();
    const router = useRouter();

    const [app, setApp] = useState<any>(null);
    const [docs, setDocs] = useState<any[]>([]);
    const [busy, setBusy] = useState<string | null>(null);
    const [err, setErr] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    useEffect(() => {
        if (!loading && !user) router.push("/login");
    }, [loading, user, router]);

    useEffect(() => {
        async function load() {
            if (!user) return;

            const appSnap = await getDoc(doc(db, "applications", id));
            const data = appSnap.data();
            if (!data || data.guardian_id !== user.uid) {
                router.push("/portal");
                return;
            }
            setApp({ id: appSnap.id, ...data });

            const q = query(collection(db, "documents"), where("application_id", "==", id));
            const snap = await getDocs(q);
            setDocs(snap.docs.map(d => ({ id: d.id, ...d.data() })));
        }
        load();
    }, [id, user, router]);

    const lastByType = useMemo(() => {
        const m = new Map<string, any>();
        docs.forEach((d) => { if (!m.has(d.doc_type)) m.set(d.doc_type, d); });
        return m;
    }, [docs]);

    const uploadedCount = REQUIRED_DOCS.filter(d => lastByType.has(d.key)).length;
    const verifiedCount = REQUIRED_DOCS.filter(d => lastByType.get(d.key)?.verified).length;
    const progress = (uploadedCount / REQUIRED_DOCS.length) * 100;

    async function onUpload(docType: string, file: File) {
        if (!user) return;
        setErr(null);
        setSuccess(null);
        setBusy(docType);

        try {
            const allowed = ["application/pdf", "image/png", "image/jpeg"];
            if (!allowed.includes(file.type)) throw new Error("Tipo de archivo no permitido (PDF/JPG/PNG).");
            if (file.size > 8 * 1024 * 1024) throw new Error("Máximo 8MB.");

            const path = `admissions/${user.uid}/${id}/${docType}/${crypto.randomUUID()}-${file.name}`;
            const storageRef = ref(storage, path);

            await uploadBytes(storageRef, file, { contentType: file.type });
            const url = await getDownloadURL(storageRef);

            await addDoc(collection(db, "documents"), {
                application_id: id,
                owner_id: user.uid,
                doc_type: docType,
                storage_path: path,
                download_url: url,
                verified: false,
                note: null,
                created_at: new Date(),
            });

            const q = query(collection(db, "documents"), where("application_id", "==", id));
            const snap = await getDocs(q);
            setDocs(snap.docs.map(d => ({ id: d.id, ...d.data() })));
            setSuccess("Documento cargado exitosamente");
        } catch (e: any) {
            setErr(e?.message ?? "Error subiendo archivo");
        } finally {
            setBusy(null);
        }
    }

    function formatDate(timestamp: any): string {
        if (!timestamp) return "";
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        return date.toLocaleDateString("es-CL", { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });
    }

    if (loading) return (
        <div className="flex items-center justify-center min-h-screen">
            <p className="text-slate-600">Cargando…</p>
        </div>
    );
    if (!user) return null;

    const statusInfo = STATUS_LABELS[app?.status] || STATUS_LABELS.draft;

    return (
        <div className="min-h-screen bg-slate-50 p-4 sm:p-6">
            <div className="mx-auto max-w-4xl space-y-4 sm:space-y-6">
                {/* Back button */}
                <button
                    onClick={() => router.push("/portal")}
                    className="flex items-center gap-2 text-slate-600 transition-colors hover:text-slate-900"
                >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span className="font-medium">Volver al Portal</span>
                </button>

                {/* Application summary card */}
                <div className="rounded-lg border border-slate-200 bg-white p-4 sm:p-6 shadow-sm">
                    <div className="flex items-start justify-between">
                        <div>
                            <h1 className="text-xl sm:text-2xl font-bold text-slate-900">
                                Postulación {app?.year ?? ""}
                            </h1>
                            <p className="mt-1 text-sm text-slate-500">
                                Creada el {formatDate(app?.created_at)}
                            </p>
                        </div>
                        <Badge variant={statusInfo.variant}>
                            {statusInfo.label}
                        </Badge>
                    </div>

                    {/* Progress section */}
                    <div className="mt-6 space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="text-sm font-medium text-slate-700">Progreso de documentos</span>
                            <span className="text-sm font-semibold text-slate-900">
                                {uploadedCount}/{REQUIRED_DOCS.length}
                            </span>
                        </div>
                        <Progress value={progress} className="h-3" />
                        <div className="flex items-center justify-between text-xs text-slate-600">
                            <span>{verifiedCount} verificado{verifiedCount !== 1 ? "s" : ""}</span>
                            <span>{REQUIRED_DOCS.length - uploadedCount} pendiente{REQUIRED_DOCS.length - uploadedCount !== 1 ? "s" : ""}</span>
                        </div>
                    </div>
                </div>

                {/* Alerts */}
                {err && (
                    <div className="rounded-lg border border-red-200 bg-red-50 p-4">
                        <p className="text-sm text-red-800">{err}</p>
                    </div>
                )}
                {success && (
                    <div className="rounded-lg border border-emerald-200 bg-emerald-50 p-4">
                        <p className="text-sm text-emerald-800">{success}</p>
                    </div>
                )}

                {/* Documents section */}
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold text-slate-900">Documentos requeridos</h2>

                    <div className="grid gap-4">
                        {REQUIRED_DOCS.map((d) => {
                            const last = lastByType.get(d.key);
                            const isVerified = last?.verified;
                            const isUploading = busy === d.key;

                            return (
                                <div
                                    key={d.key}
                                    className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-slate-300"
                                >
                                    <div className="flex items-start gap-3 sm:gap-4">
                                        {/* Icon */}
                                        <div className="flex h-10 w-10 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-lg bg-slate-100 text-xl sm:text-2xl">
                                            {d.icon}
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center justify-between gap-3">
                                                <h3 className="font-semibold text-slate-900">{d.label}</h3>
                                                {last && (
                                                    <Badge variant={isVerified ? "approved" : "pending"}>
                                                        {isVerified ? "Verificado" : "En revisión"}
                                                    </Badge>
                                                )}
                                            </div>

                                            {last ? (
                                                <div className="mt-2 space-y-1">
                                                    <p className="text-sm text-slate-600">
                                                        Subido el {formatDate(last.created_at)}
                                                    </p>
                                                    {last.note && (
                                                        <p className="text-sm italic text-slate-500">
                                                            Nota: {last.note}
                                                        </p>
                                                    )}
                                                    {last.download_url && (
                                                        <a
                                                            href={last.download_url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800"
                                                        >
                                                            Ver documento
                                                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                                            </svg>
                                                        </a>
                                                    )}
                                                </div>
                                            ) : (
                                                <p className="mt-1 text-sm text-slate-500">
                                                    No se ha cargado este documento
                                                </p>
                                            )}
                                        </div>

                                        {/* Upload button */}
                                        <label className="flex-shrink-0 cursor-pointer w-full sm:w-auto">
                                            <div className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors text-center ${isUploading
                                                ? "bg-slate-200 text-slate-500 cursor-not-allowed"
                                                : "bg-slate-900 text-white hover:bg-slate-800"
                                                }`}>
                                                {isUploading ? "Subiendo..." : last ? "Reemplazar" : "Subir"}
                                            </div>
                                            <input
                                                className="hidden"
                                                type="file"
                                                accept="application/pdf,image/png,image/jpeg"
                                                onChange={(e) => {
                                                    const f = e.target.files?.[0];
                                                    if (f) onUpload(d.key, f);
                                                    e.currentTarget.value = "";
                                                }}
                                                disabled={isUploading}
                                            />
                                        </label>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Help text */}
                <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
                    <p className="text-sm text-blue-800">
                        <strong>Nota:</strong> Los documentos deben estar en formato PDF, JPG o PNG y no superar los 8MB.
                        Una vez subidos, serán revisados por el equipo de admisiones.
                    </p>
                </div>
            </div>
        </div>
    );
}

