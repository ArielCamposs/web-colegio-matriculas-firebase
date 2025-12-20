import Link from "next/link";
import Container from "@/components/ui/Container";

export default function ContactoPage() {
    return (
        <div className="pb-24">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-slate-950 py-24 lg:py-32">
                <div className="absolute left-1/4 top-0 h-96 w-96 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[100px]" />
                <Container>
                    <div className="relative mx-auto max-w-3xl text-center space-y-6">
                        <h1 className="text-5xl font-black text-white md:text-6xl tracking-tight">Contáctanos</h1>
                        <p className="text-xl text-slate-400 font-medium">
                            Estamos aquí para acompañarte en el futuro de tus hijos.
                        </p>
                    </div>
                </Container>
            </section>

            <Container>
                <div className="relative -mt-16 space-y-12">
                    {/* Contact Cards */}
                    <div className="grid gap-6 lg:grid-cols-3">
                        {[
                            { title: "Teléfono", val: "+56 2 1234 5678", sub: "Lun - Vie: 8:00 - 18:00", icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" },
                            { title: "Email", val: "contacto@colegio.cl", sub: "Respuesta en 24-48 hrs", icon: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
                            { title: "Ubicación", val: "Av. Principal 123", sub: "Santiago, Chile", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" }
                        ].map((card, i) => (
                            <div key={i} className="group relative overflow-hidden rounded-[32px] border border-slate-100 bg-white p-10 text-center shadow-xl shadow-slate-200/50 transition-all hover:-translate-y-2">
                                <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 text-slate-900 shadow-sm transition-all group-hover:bg-slate-900 group-hover:text-white">
                                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.icon} />
                                    </svg>
                                </div>
                                <h3 className="mb-2 text-xl font-black text-slate-900">{card.title}</h3>
                                <p className="font-bold text-slate-600">{card.val}</p>
                                <p className="text-sm font-semibold text-slate-400">{card.sub}</p>
                            </div>
                        ))}
                    </div>

                    <div className="grid gap-8 lg:grid-cols-5">
                        {/* Form - Glassmorphism */}
                        <div className="lg:col-span-3 rounded-[40px] border border-white/10 bg-white/70 p-10 shadow-2xl backdrop-blur-2xl md:p-12">
                            <h2 className="mb-8 text-3xl font-black text-slate-900">Envíanos un Mensaje</h2>
                            <form className="space-y-8">
                                <div className="grid gap-8 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Nombre Completo</label>
                                        <input
                                            type="text"
                                            className="w-full rounded-2xl border-none bg-slate-100 px-6 py-4 font-bold text-slate-900 transition-all focus:bg-white focus:ring-4 focus:ring-slate-900/5 focus:outline-none"
                                            placeholder="Juan Pérez"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Email</label>
                                        <input
                                            type="email"
                                            className="w-full rounded-2xl border-none bg-slate-100 px-6 py-4 font-bold text-slate-900 transition-all focus:bg-white focus:ring-4 focus:ring-slate-900/5 focus:outline-none"
                                            placeholder="juan@ejemplo.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Asunto</label>
                                    <input
                                        type="text"
                                        className="w-full rounded-2xl border-none bg-slate-100 px-6 py-4 font-bold text-slate-900 transition-all focus:bg-white focus:ring-4 focus:ring-slate-900/5 focus:outline-none"
                                        placeholder="¿En qué podemos ayudarte?"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-black uppercase tracking-widest text-slate-400 ml-1">Mensaje</label>
                                    <textarea
                                        rows={6}
                                        className="w-full rounded-[24px] border-none bg-slate-100 px-6 py-4 font-bold text-slate-900 transition-all focus:bg-white focus:ring-4 focus:ring-slate-900/5 focus:outline-none"
                                        placeholder="Escribe tu mensaje aquí..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="inline-flex w-full items-center justify-center gap-3 rounded-[20px] bg-slate-900 px-10 py-5 text-lg font-black text-white shadow-xl shadow-slate-200 transition-all hover:bg-slate-800 hover:scale-[1.02] active:scale-95 md:w-auto"
                                >
                                    Enviar Mensaje
                                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </form>
                        </div>

                        {/* Office Hours & More - Premium Slate */}
                        <div className="lg:col-span-2 space-y-8">
                            <div className="rounded-[40px] bg-slate-900 p-10 text-white shadow-2xl">
                                <h3 className="mb-8 text-2xl font-black">Atención Presencial</h3>
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-5">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-emerald-400">
                                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-black">Lunes a Viernes</p>
                                            <p className="font-bold text-slate-400">08:00 - 18:00 hrs</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4 rounded-2xl bg-white/5 p-5 opacity-50">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10">
                                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="font-black">Sábado y Domingo</p>
                                            <p className="font-bold text-slate-400">Cerrado</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-[40px] border border-slate-100 bg-slate-50 p-10">
                                <h3 className="mb-4 text-xl font-black text-slate-900">Otras Consultas</h3>
                                <p className="text-sm font-semibold text-slate-500 leading-relaxed mb-6">
                                    Para consultas académicas directas, por favor utilice los canales internos del portal de apoderados.
                                </p>
                                <Link href="/portal" className="text-sm font-black text-slate-900 underline underline-offset-4 hover:text-emerald-600 transition-colors">
                                    Acceder al Portal →
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
