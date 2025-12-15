"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import { addDoc, collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { auth, db } from "@/lib/firebase/client";
import { useAuth } from "@/app/providers";
import { Badge } from "@/components/ui/Badge";
import { Progress } from "@/components/ui/Progress";

type AppRow = { id: string; year: number; status: string; created_at: any };

const STATUS_LABELS: Record<string, { label: string; variant: "draft" | "pending" | "under_review" | "approved" | "rejected" }> = {
    draft: { label: "Borrador", variant: "draft" },
    pending: { label: "Pendiente", variant: "pending" },
    under_review: { label: "En Revisión", variant: "under_review" },
    approved: { label: "Aprobada", variant: "approved" },
    rejected: { label: "Rechazada", variant: "rejected" },
};

export default function PortalPage() {
    const { user, loading } = useAuth();
    const router = useRouter();
    const [apps, setApps] = useState<AppRow[]>([]);
    const [docsCount, setDocsCount] = useState<Record<string, { total: number; verified: number }>>({});

    useEffect(() => {
        if (!loading && !user) router.push("/login");
    }, [loading, user, router]);

    useEffect(() => {
        async function load() {
            if (!user) return;
            const q = query(
                collection(db, "applications"),
                where("guardian_id", "==", user.uid),
                orderBy("created_at", "desc"),
            );
            const snap = await getDocs(q);
            const applications = snap.docs.map(d => ({ id: d.id, ...(d.data() as any) }));
            setApps(applications);

            // Load document counts for each application
            const counts: Record<string, { total: number; verified: number }> = {};
            for (const app of applications) {
                const docsQuery = query(collection(db, "documents"), where("application_id", "==", app.id));
                const docsSnap = await getDocs(docsQuery);
                const docs = docsSnap.docs.map(d => d.data());
                counts[app.id] = {
                    total: docs.length,
                    verified: docs.filter(d => d.verified).length,
                };
            }
            setDocsCount(counts);
        }
        load();
    }, [user]);

    async function createApplication() {
        if (!user) return;
        const year = new Date().getFullYear() + 1;
        const ref = await addDoc(collection(db, "applications"), {
            guardian_id: user.uid,
            year,
            status: "draft",
            created_at: new Date(),
        });
        router.push(`/portal/postulacion/${ref.id}`);
    }

    function formatDate(timestamp: any): string {
        if (!timestamp) return "";
        const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
        return date.toLocaleDateString("es-CL", { year: "numeric", month: "short", day: "numeric" });
    }

    if (loading) return (
        <div className="flex items-center justify-center min-h-screen">
            <p className="text-slate-600">Cargando…</p>
        </div>
    );
    if (!user) return null;

    return (
        <div className="min-h-screen bg-slate-50 p-6">
            <div className="mx-auto max-w-5xl space-y-8">
                {/* Header */}
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">Portal de Admisión</h1>
                        <p className="mt-1 text-sm sm:text-base text-slate-600">Gestiona tus postulaciones y documentos</p>
                    </div>
                    <button
                        className="w-full sm:w-auto rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition-colors hover:bg-slate-50"
                        onClick={() => signOut(auth)}
                    >
                        Cerrar sesión
                    </button>
                </div>

                {/* Create new application button */}
                <button
                    className="w-full sm:w-auto rounded-lg bg-slate-900 px-6 py-3 font-medium text-white shadow-md transition-all hover:bg-slate-800 hover:shadow-lg"
                    onClick={createApplication}
                >
                    + Crear nueva postulación
                </button>

                {/* Applications list */}
                {apps.length === 0 ? (
                    <div className="rounded-lg border border-slate-200 bg-white p-12 text-center">
                        <p className="text-slate-500">No tienes postulaciones aún. ¡Crea tu primera postulación!</p>
                    </div>
                ) : (
                    <div className="grid gap-4">
                        {apps.map((a) => {
                            const statusInfo = STATUS_LABELS[a.status] || STATUS_LABELS.draft;
                            const docInfo = docsCount[a.id] || { total: 0, verified: 0 };
                            const requiredDocs = 3; // As defined in REQUIRED_DOCS
                            const progress = requiredDocs > 0 ? (docInfo.total / requiredDocs) * 100 : 0;

                            return (
                                <button
                                    key={a.id}
                                    className="group rounded-lg border border-slate-200 bg-white p-6 text-left shadow-sm transition-all hover:border-slate-300 hover:shadow-md"
                                    onClick={() => router.push(`/portal/postulacion/${a.id}`)}
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3">
                                                <h3 className="text-lg font-semibold text-slate-900">
                                                    Postulación {a.year}
                                                </h3>
                                                <Badge variant={statusInfo.variant}>
                                                    {statusInfo.label}
                                                </Badge>
                                            </div>
                                            <p className="mt-1 text-sm text-slate-500">
                                                Creada el {formatDate(a.created_at)}
                                            </p>
                                        </div>
                                        <svg
                                            className="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>

                                    {/* Progress section */}
                                    <div className="mt-4 space-y-2">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-slate-600">Documentos cargados</span>
                                            <span className="font-medium text-slate-900">
                                                {docInfo.total}/{requiredDocs}
                                            </span>
                                        </div>
                                        <Progress value={progress} />
                                        {docInfo.verified > 0 && (
                                            <p className="text-xs text-emerald-600">
                                                {docInfo.verified} documento{docInfo.verified !== 1 ? "s" : ""} verificado{docInfo.verified !== 1 ? "s" : ""}
                                            </p>
                                        )}
                                    </div>
                                </button>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}

