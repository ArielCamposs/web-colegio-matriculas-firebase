"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";

export default function SiteHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    // Persist dismiss state
    useEffect(() => {
        const dismissed = localStorage.getItem("admission-banner-dismissed");
        if (dismissed) setIsVisible(false);
    }, []);

    const dismiss = () => {
        setIsVisible(false);
        localStorage.setItem("admission-banner-dismissed", "true");
    };

    return (
        <>
            {/* Professional Admission Banner - Dark Emerald Mesh */}
            {isVisible && (
                <div className="relative overflow-hidden bg-slate-950 px-4 py-4 sm:px-6">
                    {/* Decorative mesh/light gradients */}
                    <div className="absolute left-1/4 top-0 h-64 w-64 -translate-y-1/2 rounded-full bg-emerald-500/20 blur-[80px]" />
                    <div className="absolute right-1/4 bottom-0 h-64 w-64 translate-y-1/2 rounded-full bg-teal-500/10 blur-[80px]" />

                    <Container>
                        <div className="relative flex flex-col items-center justify-between gap-4 md:flex-row">
                            <div className="flex flex-col items-center gap-3 text-center md:flex-row md:text-left">
                                <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1">
                                    <span className="relative flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                    </span>
                                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-400">
                                        Abierto
                                    </span>
                                </div>
                                <p className="text-sm font-bold text-white sm:text-base">
                                    <span className="text-emerald-400">Admisión 2026:</span> ¡Asegura los últimos cupos disponibles ahora!
                                </p>
                            </div>

                            <div className="flex items-center gap-4">
                                <Link
                                    href="/admision"
                                    className="group relative overflow-hidden rounded-xl bg-white px-6 py-2 text-xs font-black text-slate-950 transition-all hover:scale-105 active:scale-95"
                                >
                                    <span className="relative z-10">Postular Ahora</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-100 to-white opacity-0 transition-opacity group-hover:opacity-100" />
                                </Link>

                                <button
                                    onClick={dismiss}
                                    className="flex h-8 w-8 items-center justify-center rounded-lg text-white/40 transition-colors hover:bg-white/5 hover:text-white"
                                    aria-label="Cerrar aviso"
                                >
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </Container>
                </div>
            )}

            {/* Main Header */}
            <header className="sticky top-0 z-50 border-b border-white/10 bg-white/70 backdrop-blur-xl shadow-sm transition-all duration-300">
                <Container>
                    <div className="flex items-center justify-between py-4 md:py-6">
                        <Link href="/" className="group flex items-center gap-2">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white shadow-lg transition-transform group-hover:scale-110">
                                <span className="text-xl font-black">C</span>
                            </div>
                            <span className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">Colegio <span className="text-slate-500 font-medium">Particular</span></span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center gap-1">
                            {[
                                { name: "Colegio", href: "/colegio" },
                                { name: "Admisión", href: "/admision" },
                                { name: "Aranceles", href: "/aranceles" },
                                { name: "Noticias", href: "/noticias" },
                                { name: "Contacto", href: "/contacto" },
                            ].map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="px-4 py-2 text-sm font-bold text-slate-600 transition-all hover:bg-slate-50 hover:text-slate-900 rounded-xl"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="ml-4 h-6 w-[1px] bg-slate-200" />
                            <Link href="/portal" className="ml-4 rounded-xl bg-slate-900 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-slate-200 transition-all hover:bg-slate-800 hover:scale-105 active:scale-95">
                                Acceder
                            </Link>
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
