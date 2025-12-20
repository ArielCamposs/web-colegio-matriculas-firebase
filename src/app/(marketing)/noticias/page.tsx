"use client";

import Link from "next/link";
import Container from "@/components/ui/Container";

const DEMO = [
    {
        id: "bienvenida",
        title: "Bienvenida al año escolar 2026",
        date: "15 Dic 2025",
        excerpt: "Información general sobre el inicio de clases, horarios y actividades de bienvenida para todos los niveles.",
        category: "Académico",
        image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "reunion",
        title: "Reunión de apoderados - Marzo 2026",
        date: "10 Dic 2025",
        excerpt: "Fechas confirmadas para las reuniones de apoderados por curso. Revisa los horarios y temas a tratar.",
        category: "Comunidad",
        image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=800&auto=format&fit=crop"
    },
    {
        id: "deportes",
        title: "Campeonato interescolar de fútbol",
        date: "5 Dic 2025",
        excerpt: "Nuestro equipo participará en el campeonato regional. ¡Ven a apoyar a nuestros estudiantes!",
        category: "Deportes",
        image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=800&auto=format&fit=crop"
    },
];

export default function NoticiasPage() {
    return (
        <div className="pb-24">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-slate-950 py-24 lg:py-32">
                <div className="absolute right-1/4 top-0 h-96 w-96 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[100px]" />
                <Container>
                    <div className="relative mx-auto max-w-3xl text-center space-y-6">
                        <h1 className="text-5xl font-black text-white md:text-6xl tracking-tight">Noticias y <span className="text-emerald-400">Eventos</span></h1>
                        <p className="text-xl text-slate-300 font-medium leading-relaxed">
                            Mantente al día con lo que sucede en nuestra comunidad educativa.
                        </p>
                    </div>
                </Container>
            </section>

            <Container>
                <div className="relative -mt-16 space-y-12">
                    {/* Filters & Header */}
                    <div className="flex flex-col items-center justify-between gap-6 rounded-3xl border border-white/10 bg-white/70 p-6 shadow-2xl backdrop-blur-2xl md:flex-row md:p-8">
                        <h2 className="text-2xl font-black text-slate-900">Últimas Publicaciones</h2>
                        <div className="flex flex-wrap justify-center gap-2">
                            {["Todas", "Académico", "Comunidad", "Deportes"].map((cat, i) => (
                                <button
                                    key={cat}
                                    className={`rounded-xl px-5 py-2.5 text-sm font-black transition-all ${i === 0
                                        ? "bg-slate-900 text-white shadow-lg shadow-slate-200"
                                        : "bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-100 dark:border-white/10"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* News Grid */}
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {DEMO.map((noticia) => (
                            <Link
                                key={noticia.id}
                                href={`/noticias/${noticia.id}`}
                                className="group flex flex-col overflow-hidden rounded-[32px] border border-white bg-white shadow-xl shadow-slate-200/50 transition-all hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200"
                            >
                                {/* image placeholder/aspect ratio header */}
                                <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                                    <img
                                        src={noticia.image}
                                        alt={noticia.title}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute left-6 top-6">
                                        <span className="rounded-xl bg-slate-900/80 px-3 py-1.5 text-xs font-black uppercase tracking-widest text-white backdrop-blur-md">
                                            {noticia.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex flex-1 flex-col p-8">
                                    <div className="mb-4 flex items-center gap-2 text-xs font-bold text-slate-500">
                                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                        {noticia.date}
                                    </div>
                                    <h3 className="mb-4 text-xl font-black leading-tight text-slate-900 group-hover:text-emerald-600 transition-colors">
                                        {noticia.title}
                                    </h3>
                                    <p className="mb-8 text-sm font-semibold leading-relaxed text-slate-600 line-clamp-3">
                                        {noticia.excerpt}
                                    </p>
                                    <div className="mt-auto flex items-center gap-2 text-sm font-black text-slate-900">
                                        Leer comunicado
                                        <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}
