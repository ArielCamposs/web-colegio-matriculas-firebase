"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useAuth } from "@/app/providers";
import { listMyApplications } from "@/lib/firebase/firestore";

export default function PortalDashboard() {
    const { user, profile } = useAuth();
    const [applications, setApplications] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function load() {
            if (user) {
                const apps = await listMyApplications(user.uid);
                setApplications(apps);
            }
            setLoading(false);
        }
        load();
    }, [user]);

    return (
        <div className="space-y-8">
            {/* Header / Welcome */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">
                        ¡Hola, {profile?.full_name?.split(" ")[0] || "Bienvenido"}! 👋
                    </h1>
                    <p className="text-slate-500">Bienvenido a tu panel de gestión escolar.</p>
                </div>
                <Link
                    href="/portal/admision/nueva"
                    className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:bg-slate-800 hover:scale-[1.02] active:scale-[0.98]"
                >
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Nueva Postulación
                </Link>
            </div>

            {/* Quick Stats / Summary Cards */}
            <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Mis Postulaciones</p>
                    <h3 className="text-2xl font-bold text-slate-900 mt-1">{applications.length}</h3>
                </div>
                <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-6 shadow-sm">
                    <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Estado Actual</p>
                    <h3 className="text-2xl font-bold text-slate-900 mt-1">
                        {applications.length > 0 ? "En proceso" : "Sin postulaciones"}
                    </h3>
                </div>
                <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-6 shadow-sm">
                    <p className="text-sm font-semibold text-emerald-600 uppercase tracking-wider">Año Lectivo</p>
                    <h3 className="text-2xl font-bold text-slate-900 mt-1">2025</h3>
                </div>
            </div>

            {/* Applications List */}
            <div className="space-y-4">
                <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                    Estado de mis Trámites
                </h2>

                {loading ? (
                    <div className="flex h-32 items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-sm">
                        <div className="flex items-center gap-2 text-slate-500">
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            Cargando información...
                        </div>
                    </div>
                ) : applications.length === 0 ? (
                    <div className="rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50/50 p-12 text-center">
                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 text-slate-400">
                            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-slate-800">No hay postulaciones registradas</h3>
                        <p className="mt-2 text-slate-500">Aún no has iniciado ningún proceso de admisión para el año 2025.</p>
                        <Link
                            href="/portal/admision/nueva"
                            className="mt-6 inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-500 transition-colors"
                        >
                            Comenzar ahora
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                    </div>
                ) : (
                    <div className="grid gap-4">
                        {applications.map((app) => (
                            <div key={app.id} className="flex flex-col gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all hover:shadow-md md:flex-row md:items-center md:justify-between">
                                <div className="space-y-1">
                                    <div className="flex items-center gap-3">
                                        <h3 className="font-bold text-slate-900 text-lg">Postulación No.{app.id.slice(0, 8)}</h3>
                                        <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider ${app.status === "approved" ? "bg-emerald-100 text-emerald-700" :
                                                app.status === "rejected" ? "bg-red-100 text-red-700" :
                                                    app.status === "submitted" ? "bg-blue-100 text-blue-700" :
                                                        "bg-slate-100 text-slate-600"
                                            }`}>
                                            {app.status === "draft" ? "Borrador" :
                                                app.status === "submitted" ? "Enviada" :
                                                    app.status === "approved" ? "Aprobada" :
                                                        app.status === "observed" ? "Observada" : "Rechazada"}
                                        </span>
                                    </div>
                                    <p className="text-sm text-slate-500">Iniciada el {app.created_at ? new Date(app.created_at.toDate()).toLocaleDateString() : 'N/A'}</p>
                                </div>
                                <div className="flex gap-2">
                                    <Link
                                        href={`/portal/admision/${app.id}`}
                                        className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition-all hover:bg-slate-50"
                                    >
                                        Ver Detalles
                                    </Link>
                                    {app.status === "draft" && (
                                        <Link
                                            href={`/portal/admision/nueva?id=${app.id}`}
                                            className="inline-flex items-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-slate-800"
                                        >
                                            Continuar
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
