import Container from "@/components/ui/Container";

export default function ArancelesPage() {
    const aranceles = [
        { nivel: "Pre-Kinder y Kinder", matricula: "$150.000", mensualidad: "$180.000" },
        { nivel: "1° a 4° Básico", matricula: "$180.000", mensualidad: "$220.000" },
        { nivel: "5° a 8° Básico", matricula: "$200.000", mensualidad: "$250.000" },
        { nivel: "I° a IV° Medio", matricula: "$220.000", mensualidad: "$280.000" },
    ];

    return (
        <div className="pb-24">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-slate-950 py-24 lg:py-32">
                <div className="absolute left-1/4 top-0 h-96 w-96 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[100px]" />
                <Container>
                    <div className="relative mx-auto max-w-3xl text-center space-y-6">
                        <h1 className="text-5xl font-black text-white md:text-6xl tracking-tight">Aranceles <span className="text-emerald-400">2026</span></h1>
                        <p className="text-xl text-slate-300 font-medium leading-relaxed">
                            Información transparente y procesos claros para su tranquilidad.
                        </p>
                    </div>
                </Container>
            </section>

            <Container>
                <div className="relative -mt-16 space-y-20">
                    {/* Pricing Table - Premium Glassmorphism */}
                    <div className="rounded-3xl border border-white/5 bg-white/80 p-1 shadow-2xl backdrop-blur-2xl">
                        <div className="overflow-x-auto rounded-[22px] bg-white">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-slate-100 bg-slate-50/50">
                                        <th className="px-8 py-6 text-left text-sm font-black uppercase tracking-widest text-slate-500">Nivel Educativo</th>
                                        <th className="px-8 py-6 text-left text-sm font-black uppercase tracking-widest text-slate-500">Matrícula</th>
                                        <th className="px-8 py-6 text-left text-sm font-black uppercase tracking-widest text-slate-500">Mensualidad</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-50">
                                    {aranceles.map((item, index) => (
                                        <tr key={index} className="group transition-colors hover:bg-slate-50/50">
                                            <td className="px-8 py-6 font-black text-slate-900">{item.nivel}</td>
                                            <td className="px-8 py-6">
                                                <span className="inline-flex rounded-lg bg-slate-100 px-3 py-1 text-sm font-bold text-slate-700">{item.matricula}</span>
                                            </td>
                                            <td className="px-8 py-6">
                                                <span className="text-lg font-black text-emerald-600">{item.mensualidad}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="rounded-2xl bg-blue-50 border border-blue-100 p-6 flex gap-4 items-center">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <p className="text-sm text-blue-800 font-semibold leading-relaxed">
                            <strong>Nota importante:</strong> Los valores aquí presentados son referenciales para el proceso 2026.
                            Para convenios especiales o planes de financiamiento, por favor contactar con administración.
                        </p>
                    </div>

                    {/* Payment Methods & Benefits */}
                    <div className="grid gap-8 lg:grid-cols-2">
                        {/* Payment Methods */}
                        <div className="rounded-3xl border border-slate-100 bg-white p-10 shadow-lg shadow-slate-100/50">
                            <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 shadow-sm">
                                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                </svg>
                            </div>
                            <h3 className="mb-6 text-2xl font-black text-slate-900">Medios de Pago</h3>
                            <div className="grid gap-4 sm:grid-cols-2">
                                {[
                                    "Transferencia",
                                    "Tarjetas Crédito/Débito",
                                    "Pago Presencial",
                                    "Pago Automático (PAC)"
                                ].map((method, i) => (
                                    <div key={i} className="flex items-center gap-3 rounded-2xl border border-slate-50 bg-slate-50/50 p-4 transition-all hover:border-emerald-100 hover:bg-emerald-50/30">
                                        <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
                                        <span className="text-sm font-bold text-slate-700">{method}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Benefits & Discounts */}
                        <div className="rounded-3xl border border-slate-100 bg-slate-900 p-10 shadow-xl text-white">
                            <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-emerald-400">
                                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="mb-6 text-2xl font-black">Descuentos y Becas</h3>
                            <ul className="space-y-4">
                                {[
                                    { label: "10%", text: "Descuento por hermanos" },
                                    { label: "5%", text: "Pago anual anticipado" },
                                    { label: "MÉRITO", text: "Becas académicas y deportivas" },
                                    { label: "SOCIAL", text: "Becas socioconómicas" }
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-4 rounded-2xl bg-white/5 p-4 transition-all hover:bg-white/10">
                                        <div className="rounded-lg bg-emerald-500 px-3 py-1 text-xs font-black text-white">
                                            {item.label}
                                        </div>
                                        <span className="text-sm font-bold text-slate-300">{item.text}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Additional Info Cards */}
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 pb-12">
                        {[
                            { icon: "📅", title: "Coutas", text: "10 mensualidades (marzo a diciembre)" },
                            { icon: "🛡️", title: "Matrícula", text: "Pago anual para asegurar el cupo" },
                            { icon: "🎒", title: "Materiales", text: "Incluye materiales educativos básicos" },
                            { icon: "🤝", title: "Apoyo", text: "Consulte por facilidades de pago" }
                        ].map((info, i) => (
                            <div key={i} className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                                <div className="mb-4 text-3xl">{info.icon}</div>
                                <h4 className="mb-1 font-black text-slate-900">{info.title}</h4>
                                <p className="text-xs text-slate-600 font-semibold leading-relaxed">{info.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}
