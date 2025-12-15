"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";

export default function SiteHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* Admission Announcement Banner - Enhanced */}
            <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
                <Container>
                    <div className="relative flex flex-col items-center justify-center gap-4 py-5 text-center sm:flex-row sm:justify-between sm:py-6">
                        <div className="flex flex-col items-center gap-2 sm:flex-row sm:gap-4">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="absolute inset-0 animate-ping rounded-full bg-white opacity-75"></div>
                                    <div className="relative h-3 w-3 animate-pulse rounded-full bg-white"></div>
                                </div>
                                <span className="text-lg font-black uppercase tracking-wider text-white sm:text-xl md:text-2xl">
                                    🎓 Admisión 2026 Abierta
                                </span>
                            </div>
                            <span className="text-base font-semibold text-white/95 sm:text-lg">
                                ¡Últimos cupos disponibles!
                            </span>
                        </div>
                        <Link
                            href="/admision"
                            className="group relative overflow-hidden rounded-xl bg-white px-6 py-3.5 text-base font-bold text-emerald-600 shadow-2xl transition-all hover:scale-105 hover:shadow-emerald-900/20 sm:px-8 sm:py-4"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-50 to-teal-50 opacity-0 transition-opacity group-hover:opacity-100"></div>
                            <span className="relative flex items-center gap-2">
                                Postular Ahora
                                <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </span>
                        </Link>
                    </div>
                </Container>
            </div>

            {/* Main Header */}
            <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm">
                <Container>
                    <div className="flex items-center justify-between py-4 md:py-5">
                        <Link href="/" className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight">Colegio Particular</Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-8">
                            <Link href="/colegio" className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-900">Colegio</Link>
                            <Link href="/admision" className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-900">Admisión</Link>
                            <Link href="/aranceles" className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-900">Aranceles</Link>
                            <Link href="/noticias" className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-900">Noticias</Link>
                            <Link href="/contacto" className="text-sm font-medium text-slate-700 transition-colors hover:text-slate-900">Contacto</Link>
                            <Link href="/portal" className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-slate-800 hover:shadow-md">Portal</Link>
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden rounded-md p-2 hover:bg-slate-100"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <nav className="border-t py-4 md:hidden">
                            <div className="flex flex-col space-y-3">
                                <Link href="/colegio" className="py-2 hover:text-slate-900" onClick={() => setIsMenuOpen(false)}>
                                    Colegio
                                </Link>
                                <Link href="/admision" className="py-2 hover:text-slate-900" onClick={() => setIsMenuOpen(false)}>
                                    Admisión
                                </Link>
                                <Link href="/aranceles" className="py-2 hover:text-slate-900" onClick={() => setIsMenuOpen(false)}>
                                    Aranceles
                                </Link>
                                <Link href="/noticias" className="py-2 hover:text-slate-900" onClick={() => setIsMenuOpen(false)}>
                                    Noticias
                                </Link>
                                <Link href="/contacto" className="py-2 hover:text-slate-900" onClick={() => setIsMenuOpen(false)}>
                                    Contacto
                                </Link>
                                <Link href="/portal" className="rounded-md bg-slate-900 px-4 py-3 text-center text-white hover:bg-slate-800" onClick={() => setIsMenuOpen(false)}>
                                    Portal
                                </Link>
                            </div>
                        </nav>
                    )}
                </Container>
            </header>
        </>
    );
}

