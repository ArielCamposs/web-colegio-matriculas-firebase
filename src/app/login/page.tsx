"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router"; // Using next/navigation but for safety checking imports
import { useRouter as useNextRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase/client";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [err, setErr] = useState<string | null>(null);
    const router = useNextRouter();

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        setErr(null);
        setLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push("/portal");
        } catch (e: any) {
            setErr(e?.code === "auth/invalid-credential"
                ? "Correo o contraseña incorrectos"
                : "Error al iniciar sesión");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex min-h-screen items-stretch font-sans">
            {/* Left side: Visual/Marketing */}
            <div className="hidden lg:flex lg:w-1/2 relative bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-slate-900 to-emerald-600/20 z-0" />
                <div className="absolute inset-0 z-10 opacity-30">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full blur-[100px]" />
                    <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-emerald-500 rounded-full blur-[100px]" />
                </div>

                <div className="relative z-20 flex flex-col justify-center px-16 text-white">
                    <div className="mb-8">
                        <Link href="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors group">
                            <span className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-all">
                                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                </svg>
                            </span>
                            Volver al inicio
                        </Link>
                    </div>
                    <h1 className="text-5xl font-extrabold tracking-tight mb-6">
                        Portal de <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                            Admisión 2025
                        </span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-lg leading-relaxed">
                        Bienvenido de vuelta. Inicia sesión para gestionar las postulaciones y estar al tanto del proceso educativo de tus hijos.
                    </p>
                </div>

                <div className="absolute bottom-8 left-16 z-20">
                    <p className="text-sm text-slate-500">© 2024 Colegio Tecnológico. Todos los derechos reservados.</p>
                </div>
            </div>

            {/* Right side: Form */}
            <div className="flex flex-col w-full lg:w-1/2 bg-white px-8 py-12 md:px-16 lg:px-24 justify-center relative">
                <div className="mx-auto w-full max-w-sm">
                    {/* Mobile Back Button */}
                    <div className="lg:hidden mb-8">
                        <Link href="/" className="text-slate-600 font-medium inline-flex items-center gap-2">
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Inicio
                        </Link>
                    </div>

                    <div className="space-y-2 mb-10">
                        <h2 className="text-3xl font-bold text-slate-900">Ingresar</h2>
                        <p className="text-slate-500">Introduzca sus credenciales para acceder</p>
                    </div>

                    <form onSubmit={onSubmit} className="space-y-5">
                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-slate-700 ml-1">Correo Electrónico</label>
                            <input
                                className="w-full rounded-xl border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-900 transition-all focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ring-1 ring-slate-200"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="ejemplo@correo.com"
                                type="email"
                                required
                            />
                        </div>

                        <div className="space-y-1.5">
                            <div className="flex justify-between items-center ml-1">
                                <label className="text-sm font-semibold text-slate-700">Contraseña</label>
                                <Link href="#" className="text-xs font-medium text-blue-600 hover:text-blue-500">¿Olvidó su contraseña?</Link>
                            </div>
                            <input
                                className="w-full rounded-xl border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-900 transition-all focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none ring-1 ring-slate-200"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                type="password"
                                required
                            />
                        </div>

                        {err && (
                            <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-50 text-red-600 text-sm animate-shake">
                                <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {err}
                            </div>
                        )}

                        <button
                            disabled={loading}
                            className="w-full rounded-xl bg-slate-900 px-4 py-3.5 text-white font-bold transition-all hover:bg-slate-800 active:scale-[0.98] disabled:opacity-70 disabled:pointer-events-none mt-4 shadow-xl shadow-slate-200"
                        >
                            {loading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Iniciando sesión...
                                </span>
                            ) : "Entrar al Portal"}
                        </button>
                    </form>

                    <div className="mt-10 text-center">
                        <p className="text-sm text-slate-600">
                            ¿Aún no tienes una cuenta? <br />
                            <Link className="text-blue-600 font-bold hover:underline" href="/register">Regístrate aquí para postular</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
