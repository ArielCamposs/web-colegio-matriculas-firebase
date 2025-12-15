import AdminGuard from "@/components/guards/AdminGuard";
import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <AdminGuard>
            <div className="mx-auto max-w-6xl px-4 py-10 space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-xs uppercase tracking-widest text-slate-500">Admin</p>
                        <h1 className="text-xl font-semibold">Gestión de Admisión</h1>
                    </div>
                    <nav className="flex items-center gap-3 text-sm">
                        <Link className="hover:underline" href="/admin">Dashboard</Link>
                        <Link className="hover:underline" href="/admin/postulaciones">Postulaciones</Link>
                        <Link className="hover:underline" href="/admin/usuarios">Usuarios</Link>
                        <Link className="hover:underline" href="/portal">Portal</Link>
                    </nav>
                </div>
                {children}
            </div>
        </AdminGuard>
    );
}
