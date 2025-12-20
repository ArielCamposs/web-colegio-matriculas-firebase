"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter as useNextRouter } from "next/navigation";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "@/lib/firebase/client";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

export default function RegisterPage() {
    const [fullName, setFullName] = useState("");
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
            const cred = await createUserWithEmailAndPassword(auth, email, password);
            await updateProfile(cred.user, { displayName: fullName });

            await setDoc(doc(db, "profiles", cred.user.uid), {
                full_name: fullName,
                role: "guardian",
                created_at: serverTimestamp(),
            });

            router.push("/portal");
        } catch (e: any) {
            setErr(e?.code === "auth/email-already-in-use"
                ? "El correo ya está en uso"
                : "Error al registrar la cuenta");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="flex min-h-screen items-stretch font-sans">
            {/* Left side: Visual/Marketing */}
            <div className="hidden lg:flex lg:w-1/2 relative bg-slate-900 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 via-slate-900 to-blue-600/20 z-0" />
                <div className="absolute inset-0 z-10 opacity-30">
                    <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-emerald-500 rounded-full blur-[100px]" />
                    <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500 rounded-full blur-[100px]" />
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
                        Comienza tu <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
                            Postulación
                        </span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-lg leading-relaxed">
                        Crea tu cuenta de apoderado para iniciar el proceso de admisión. Es rápido, seguro y totalmente digital.
                    </p>

                    <div className="mt-12 grid grid-cols-2 gap-6">
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                            <h3 className="font-bold text-lg mb-1">100% Online</h3>
                            <p className="text-sm text-slate-400">Gestiona todo desde la comodidad de tu hogar.</p>
                        </div>
                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                            <h3 className="font-bold text-lg mb-1">Soporte Directo</h3>
                            <p className="text-sm text-slate-400">Nuestro equipo te guiará en cada paso.</p>
                        </div>
                    </div>
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

                    <div className="space-y-2 mb-8">
                        <h2 className="text-3xl font-bold text-slate-900">Crear cuenta</h2>
                        <p className="text-slate-500">Regístrate como apoderado para comenzar</p>
                    </div>

                    <form onSubmit={onSubmit} className="space-y-4">
                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-slate-700 ml-1">Nombre Completo</label>
                            <input
                                className="w-full rounded-xl border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-900 transition-all focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none ring-1 ring-slate-200"
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                placeholder="Juan Pérez"
                                required
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-slate-700 ml-1">Correo Electrónico</label>
                            <input
                                className="w-full rounded-xl border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-900 transition-all focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none ring-1 ring-slate-200"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="ejemplo@correo.com"
                                type="email"
                                required
                            />
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-sm font-semibold text-slate-700 ml-1">Contraseña</label>
                            <input
                                className="w-full rounded-xl border-slate-200 bg-slate-50/50 px-4 py-3 text-slate-900 transition-all focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none ring-1 ring-slate-200"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Mínimo 6 caracteres"
                                type="password"
                                minLength={6}
                                required
                            />
                        </div>

                        <div className="flex items-start gap-2 py-2 ml-1">
                            <input type="checkbox" className="mt-1 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500" required />
                            <p className="text-xs text-slate-500 leading-normal">
                                Acepto los <Link href="#" className="text-emerald-600 hover:underline">términos y condiciones</Link> y la <Link href="#" className="text-emerald-600 hover:underline">política de privacidad</Link>.
                            </p>
                        </div>

                        {err && (
                            <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-50 text-red-600 text-sm">
                                <svg className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {err}
                            </div>
                        )}

                        <button
                            disabled={loading}
                            className="w-full rounded-xl bg-slate-900 px-4 py-3.5 text-white font-bold transition-all hover:bg-slate-800 active:scale-[0.98] disabled:opacity-70 disabled:pointer-events-none mt-2 shadow-xl shadow-slate-200"
                        >
                            {loading ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Creando cuenta...
                                </span>
                            ) : "Registrarse Ahora"}
                        </button>
                    </form>

                    <div className="mt-8 text-center">
                        <p className="text-sm text-slate-600">
                            ¿Ya tienes una cuenta? <br />
                            <Link className="text-emerald-600 font-bold hover:underline" href="/login">Inicia sesión aquí</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
