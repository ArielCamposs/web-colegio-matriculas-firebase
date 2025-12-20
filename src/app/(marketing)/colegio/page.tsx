import Container from "@/components/ui/Container";
import Image from "next/image";

export default function ColegioPage() {
    return (
        <div className="pb-24">
            {/* Immersive Hero Section */}
            <section className="relative overflow-hidden bg-slate-950 py-24 lg:py-32">
                {/* Decorative mesh gradients */}
                <div className="absolute left-0 top-0 h-full w-full opacity-30">
                    <div className="absolute left-[10%] top-[20%] h-96 w-96 rounded-full bg-emerald-500/20 blur-[120px]" />
                    <div className="absolute right-[10%] bottom-[20%] h-96 w-96 rounded-full bg-teal-500/10 blur-[120px]" />
                </div>

                <Container>
                    <div className="relative mx-auto max-w-4xl text-center space-y-8">
                        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 backdrop-blur-md">
                            <span className="text-xs font-black uppercase tracking-[0.2em] text-emerald-400">Desde hace 25 años</span>
                        </div>
                        <h1 className="text-5xl font-black text-white md:text-7xl tracking-tight">
                            Nuestro <span className="text-emerald-400">Colegio</span>
                        </h1>
                        <p className="text-xl text-slate-300 font-medium leading-relaxed max-w-2xl mx-auto">
                            Formamos líderes integrales con visión de futuro, excelencia académica y sólidos cimientos éticos.
                        </p>
                    </div>
                </Container>
            </section>

            <Container>
                <div className="relative -mt-16 space-y-24">
                    {/* Mission & Vision - Premium Glassmorphism */}
                    <div className="grid gap-8 lg:grid-cols-2">
                        <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/70 p-10 shadow-2xl backdrop-blur-2xl transition-all hover:-translate-y-1">
                            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-xl transition-all group-hover:scale-110">
                                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h2 className="mb-4 text-3xl font-black text-slate-900">Misión</h2>
                            <p className="text-lg text-slate-600 font-medium leading-relaxed">
                                Formar estudiantes integrales con sólidos valores, preparados para enfrentar los desafíos del futuro
                                en un ambiente de excelencia académica, desarrollo personal y compromiso social.
                            </p>
                        </div>

                        <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/70 p-10 shadow-2xl backdrop-blur-2xl transition-all hover:-translate-y-1">
                            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-xl transition-all group-hover:scale-110">
                                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h2 className="mb-4 text-3xl font-black text-slate-900">Visión</h2>
                            <p className="text-lg text-slate-600 font-medium leading-relaxed">
                                Ser reconocidos como una institución educativa de excelencia que forma ciudadanos responsables,
                                críticos y comprometidos con el desarrollo de una sociedad más justa y equitativa.
                            </p>
                        </div>
                    </div>

                    {/* Values - Refined Cards */}
                    <div className="space-y-12">
                        <div className="text-center space-y-4">
                            <h2 className="text-4xl font-black text-slate-900">Nuestros Valores</h2>
                            <p className="text-slate-600 font-medium">Los pilares que sustentan nuestra educación</p>
                        </div>
                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {[
                                { title: "Excelencia", desc: "Compromiso con la calidad total", icon: "🎯", color: "bg-blue-50 text-blue-600" },
                                { title: "Respeto", desc: "Valoramos la diversidad humana", icon: "🤝", color: "bg-emerald-50 text-emerald-600" },
                                { title: "Responsabilidad", desc: "Compromiso con el entorno", icon: "💪", color: "bg-purple-50 text-purple-600" },
                                { title: "Solidaridad", desc: "Empatía y apoyo mutuo", icon: "❤️", color: "bg-rose-50 text-rose-600" }
                            ].map((value, idx) => (
                                <div key={idx} className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-8 text-center transition-all hover:border-slate-200 hover:shadow-xl hover:shadow-slate-100/50">
                                    <div className={`mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl ${value.color} text-3xl shadow-sm transition-transform group-hover:scale-110 group-hover:rotate-3`}>
                                        {value.icon}
                                    </div>
                                    <h3 className="mb-2 text-xl font-black text-slate-900">{value.title}</h3>
                                    <p className="text-sm text-slate-600 font-semibold">{value.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Community in Action - Premium Image Section */}
                    <div className="space-y-16">
                        <div className="text-center space-y-4">
                            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-4 py-1.5 backdrop-blur-md mx-auto">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-emerald-600">Vivencias</span>
                            </div>
                            <h2 className="text-4xl font-black text-slate-900 md:text-5xl tracking-tight">Comunidad en Acción</h2>
                            <p className="text-slate-600 font-medium max-w-2xl mx-auto text-lg leading-relaxed">
                                Descubre cómo vivimos el día a día en nuestro colegio, fomentando el desarrollo integral de cada estudiante a través de experiencias significativas.
                            </p>
                        </div>

                        <div className="grid gap-8 lg:grid-cols-12">
                            {/* Sports Workshop - Large Card */}
                            <div className="group relative overflow-hidden rounded-[3rem] bg-slate-100 lg:col-span-7 h-[550px] shadow-2xl shadow-slate-200/50">
                                <Image
                                    src="/img/colegio/taller-deportivo.png"
                                    alt="Talleres Deportivos"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
                                <div className="absolute bottom-0 left-0 p-10 text-white transform transition-transform duration-500 group-hover:-translate-y-2">
                                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-1 text-[10px] font-black uppercase tracking-widest shadow-lg shadow-emerald-500/40">
                                        <span className="h-1 w-1 rounded-full bg-white animate-pulse" />
                                        Extraprogramático
                                    </div>
                                    <h3 className="mb-3 text-4xl font-black md:text-5xl tracking-tight">Talleres Deportivos</h3>
                                    <p className="max-w-md text-slate-300 font-medium leading-relaxed">
                                        Fomentamos el trabajo en equipo, la disciplina y la vida sana a través de diversas disciplinas deportivas en instalaciones de primer nivel.
                                    </p>
                                </div>
                            </div>

                            {/* PIE Program - Side Card */}
                            <div className="group relative overflow-hidden rounded-[3rem] bg-slate-100 lg:col-span-5 h-[550px] shadow-2xl shadow-slate-200/50">
                                <Image
                                    src="/img/colegio/programa-pie.png"
                                    alt="Programa PIE"
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/95 via-emerald-950/30 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
                                <div className="absolute bottom-0 left-0 p-10 text-white transform transition-transform duration-500 group-hover:-translate-y-2">
                                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur-md px-4 py-1 text-[10px] font-black uppercase tracking-widest border border-white/10">
                                        <span className="h-1 w-1 rounded-full bg-emerald-400" />
                                        Inclusión Real
                                    </div>
                                    <h3 className="mb-3 text-3xl font-black md:text-4xl tracking-tight">Programa PIE</h3>
                                    <p className="text-emerald-100/80 font-medium leading-relaxed">
                                        Contamos con un equipo multidisciplinario dedicado al apoyo personalizado de estudiantes con TDA y TEA, asegurando un aprendizaje significativo.
                                    </p>
                                </div>
                            </div>

                            {/* Innovation/Library - Full Width Card */}
                            <div className="group relative overflow-hidden rounded-[3rem] bg-slate-100 lg:col-span-12 h-[450px] shadow-2xl shadow-slate-200/50">
                                <Image
                                    src="/img/colegio/biblioteca-moderna.png"
                                    alt="Excelencia Académica"
                                    fill
                                    className="object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />
                                <div className="absolute inset-y-0 left-0 flex flex-col justify-center p-12 text-white max-w-2xl transform transition-transform duration-700 group-hover:translate-x-2">
                                    <div className="mb-6 w-fit inline-flex items-center gap-2 rounded-full bg-blue-500 px-4 py-1 text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-500/40">
                                        <span className="h-1 w-1 rounded-full bg-white" />
                                        Innovación
                                    </div>
                                    <h3 className="mb-4 text-4xl font-black md:text-5xl tracking-tight leading-none">Vanguardia y Excelencia Académica</h3>
                                    <p className="text-slate-300 font-medium text-lg leading-relaxed max-w-lg">
                                        Nuestros espacios de aprendizaje están diseñados para potenciar la curiosidad y la investigación, integrando tecnología en un ambiente inspirador.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Info Grid - Modernized */}
                    <div className="grid gap-8 lg:grid-cols-3">
                        {/* Contact Info */}
                        <div className="rounded-3xl border border-slate-100 bg-slate-50 p-8">
                            <h3 className="mb-6 text-xl font-black text-slate-900">Contacto Directo</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-slate-400 shadow-sm">
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-black text-slate-900 uppercase tracking-wider">Dirección</p>
                                        <p className="text-slate-600 font-medium">Av. Principal 123, Santiago</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-slate-400 shadow-sm">
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-sm font-black text-slate-900 uppercase tracking-wider">Teléfono</p>
                                        <p className="text-slate-600 font-medium">+56 2 1234 5678</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        {/* Education Levels */}
                        <div className="rounded-3xl border border-slate-100 bg-slate-50 p-8">
                            <h3 className="mb-6 text-xl font-black text-slate-900">Estructura Académica</h3>
                            <div className="space-y-4">
                                {[
                                    "Pre-Kinder y Kinder",
                                    "Educación Básica (1° a 8°)",
                                    "Educación Media (I° a IV°)"
                                ].map((level, i) => (
                                    <div key={i} className="flex items-center gap-3 rounded-2xl bg-white p-4 shadow-sm">
                                        <div className="h-2 w-2 rounded-full bg-emerald-500"></div>
                                        <span className="font-bold text-slate-700">{level}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Documents */}
                        <div className="rounded-3xl border border-slate-100 bg-slate-900 p-8 text-white">
                            <h3 className="mb-6 text-xl font-black opacity-60">Recursos</h3>
                            <ul className="space-y-4">
                                {[
                                    "Reglamento Interno",
                                    "Protocolo de Convivencia",
                                    "Lista de Útiles"
                                ].map((doc, i) => (
                                    <li key={i}>
                                        <a href="#" className="flex items-center justify-between rounded-xl bg-white/10 p-4 transition-all hover:bg-white/20">
                                            <span className="font-bold">{doc}</span>
                                            <svg className="h-5 w-5 opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
