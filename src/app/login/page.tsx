"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase/client";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState<string | null>(null);
    const router = useRouter();

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        setErr(null);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push("/portal");
        } catch (e: any) {
            setErr(e?.message ?? "Error al iniciar sesión");
        }
    }

    return (
        <div className="mx-auto max-w-md rounded-xl border bg-white p-6">
            <div className="mb-4">
                <Link href="/" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900">
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Volver al inicio
                </Link>
            </div>
            <h1 className="text-xl font-semibold">Ingresar</h1>

            <form onSubmit={onSubmit} className="mt-6 space-y-3">
                <input className="w-full rounded-md border px-3 py-2" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo" type="email" required />
                <input className="w-full rounded-md border px-3 py-2" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" type="password" required />
                {err && <p className="text-sm text-red-600">{err}</p>}
                <button className="w-full rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-slate-800">Entrar</button>
            </form>

            <p className="mt-4 text-sm text-slate-600">
                ¿No tienes cuenta? <Link className="underline" href="/register">Regístrate</Link>
            </p>
        </div>
    );
}
