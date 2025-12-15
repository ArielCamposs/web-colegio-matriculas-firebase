import Link from "next/link";

export default function HomePage() {
    return (
        <section className="grid gap-8 md:grid-cols-2 md:items-center">
            <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Educación con propósito</h1>
                <p className="text-slate-700">
                    Sitio oficial del colegio: información, noticias y postulación en línea con carga de documentos.
                </p>

                <div className="flex flex-wrap gap-3">
                    <Link href="/admision" className="rounded-md bg-slate-900 px-4 py-2 text-white hover:bg-slate-800">Admisión</Link>
                    <Link href="/colegio" className="rounded-md border border-slate-300 bg-white px-4 py-2 hover:bg-slate-100">Conócenos</Link>
                    <Link href="/portal" className="rounded-md border border-slate-300 bg-white px-4 py-2 hover:bg-slate-100">Portal</Link>
                </div>

                <div className="grid gap-3 pt-4 sm:grid-cols-2">
                    <div className="rounded-lg border bg-white p-4">
                        <p className="text-sm font-semibold">Proyecto Educativo</p>
                        <p className="text-sm text-slate-600">Misión, visión, valores, convivencia.</p>
                    </div>
                    <div className="rounded-lg border bg-white p-4">
                        <p className="text-sm font-semibold">Comunicados</p>
                        <p className="text-sm text-slate-600">Noticias, calendarios y documentos.</p>
                    </div>
                </div>
            </div>

            <div className="rounded-2xl border bg-gradient-to-br from-slate-900 to-slate-700 p-8 text-white">
                <p className="text-sm uppercase tracking-widest text-white/80">Postulación</p>
                <h2 className="mt-2 text-2xl font-semibold">Admisión en línea</h2>
                <p className="mt-2 text-white/80">Crea tu cuenta, completa la ficha y sube documentos.</p>
                <Link href="/register" className="mt-6 inline-block rounded-md bg-white px-4 py-2 text-slate-900 hover:bg-slate-100">
                    Crear cuenta
                </Link>
            </div>
        </section>
    );
}
