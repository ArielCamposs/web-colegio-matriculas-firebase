"use client";

import Link from "next/link";

const DEMO = [
    {
        id: "bienvenida",
        title: "Bienvenida al año escolar 2026",
        date: "15 Dic 2025",
        excerpt: "Información general sobre el inicio de clases, horarios y actividades de bienvenida para todos los niveles.",
        category: "Académico"
    },
    {
        id: "reunion",
        title: "Reunión de apoderados - Marzo 2026",
        date: "10 Dic 2025",
        excerpt: "Fechas confirmadas para las reuniones de apoderados por curso. Revisa los horarios y temas a tratar.",
        category: "Comunidad"
    },
    {
        id: "deportes",
        title: "Campeonato interescolar de fútbol",
        date: "5 Dic 2025",
        excerpt: "Nuestro equipo participará en el campeonato regional. ¡Ven a apoyar a nuestros estudiantes!",
        category: "Deportes"
    },
];

export default function NoticiasPage() {
    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 p-8 text-white md:p-12">
                <div className="mx-auto max-w-3xl text-center space-y-4">
                    <h1 className="text-3xl font-bold md:text-4xl">Noticias y Comunicados</h1>
                    <p className="text-lg text-white/90">
                        Mantente informado sobre las últimas novedades y eventos de nuestra comunidad educativa.
                    </p>
                </div>
            </div>

            {/* News Grid */}
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-slate-900">Últimas Publicaciones</h2>
                    <div className="flex gap-2">
                        <button className="rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800">
                            Todas
                        </button>
                        <button className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50">
                            Académico
                        </button>
                        <button className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50">
                            Deportes
                        </button>
                    </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {DEMO.map((noticia) => (
                        <Link
                            key={noticia.id}
                            href={`/noticias/${noticia.id}`}
                            className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:border-slate-300 hover:shadow-md"
                        >
                            {/* Category Badge */}
                            <div className="mb-3 inline-flex items-center gap-2">
                                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                                    {noticia.category}
                                </span>
                                <span className="text-xs text-slate-500">{noticia.date}</span>
                            </div>

                            {/* Title */}
                            <h3 className="mb-2 text-lg font-semibold text-slate-900 transition-colors group-hover:text-slate-700">
                                {noticia.title}
                            </h3>

                            {/* Excerpt */}
                            <p className="mb-4 text-sm text-slate-600 line-clamp-3">
                                {noticia.excerpt}
                            </p>

                            {/* Read More Link */}
                            <div className="flex items-center gap-2 text-sm font-medium text-slate-900">
                                Leer más
                                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

