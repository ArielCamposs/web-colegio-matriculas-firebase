"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/app/providers";
import { auth } from "@/lib/firebase/client";
import { signOut } from "firebase/auth";

export default function PortalSidebar() {
    const pathname = usePathname();
    const { profile } = useAuth();

    const menuItems = [
        { name: "Inicio", href: "/portal", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
        { name: "Mis Postulaciones", href: "/portal", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
        { name: "Nueva Postulación", href: "/portal/admision/nueva", icon: "M12 4v16m8-8H4" },
    ];

    return (
        <aside className="fixed left-0 top-0 z-40 h-screen w-64 -translate-x-full transition-transform lg:translate-x-0">
            <div className="flex h-full flex-col border-r border-slate-200 bg-white px-4 py-6">
                <div className="mb-10 px-2">
                    <Link href="/portal" className="flex items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white">
                            <span className="text-xl font-bold">C</span>
                        </div>
                        <span className="text-xl font-bold text-slate-900">Colegio Portal</span>
                    </Link>
                </div>

                <nav className="flex-1 space-y-2">
                    {menuItems.map((item) => {
                        const active = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${active
                                    ? "bg-slate-900 text-white shadow-lg shadow-slate-200"
                                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                                    }`}
                            >
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                                </svg>
                                {item.name}
                            </Link>
                        );
                    })}
                </nav>

                <div className="mt-auto border-t border-slate-100 pt-6 px-2">
                    <div className="mb-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600 font-bold">
                            {profile?.full_name?.charAt(0) || "U"}
                        </div>
                        <div className="overflow-hidden">
                            <p className="truncate text-sm font-bold text-slate-900">{profile?.full_name || "Usuario"}</p>
                            <p className="text-xs text-slate-500 capitalize">{profile?.role || "Apoderado"}</p>
                        </div>
                    </div>
                    <button
                        onClick={() => signOut(auth)}
                        className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-red-600 transition-all hover:bg-red-50"
                    >
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                        </svg>
                        Cerrar Sesión
                    </button>
                </div>
            </div>
        </aside>
    );
}
