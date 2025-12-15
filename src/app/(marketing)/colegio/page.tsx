export default function ColegioPage() {
    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 p-8 text-white md:p-12">
                <div className="mx-auto max-w-3xl text-center space-y-4">
                    <h1 className="text-3xl font-bold md:text-4xl">Nuestro Colegio</h1>
                    <p className="text-lg text-white/90">
                        Formando estudiantes integrales con valores sólidos desde hace más de 25 años.
                    </p>
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100">
                        <svg className="h-6 w-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h2 className="mb-3 text-2xl font-bold text-slate-900">Misión</h2>
                    <p className="text-slate-700 leading-relaxed">
                        Formar estudiantes integrales con sólidos valores, preparados para enfrentar los desafíos del futuro
                        en un ambiente de excelencia académica, desarrollo personal y compromiso social.
                    </p>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100">
                        <svg className="h-6 w-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    </div>
                    <h2 className="mb-3 text-2xl font-bold text-slate-900">Visión</h2>
                    <p className="text-slate-700 leading-relaxed">
                        Ser reconocidos como una institución educativa de excelencia que forma ciudadanos responsables,
                        críticos y comprometidos con el desarrollo de una sociedad más justa y equitativa.
                    </p>
                </div>
            </div>

            {/* Values */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-900">Nuestros Valores</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all hover:shadow-md">
                        <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
                            <span className="text-2xl">🎯</span>
                        </div>
                        <h3 className="mb-2 font-semibold text-slate-900">Excelencia</h3>
                        <p className="text-sm text-slate-600">Compromiso con la calidad en todo lo que hacemos</p>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all hover:shadow-md">
                        <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
                            <span className="text-2xl">🤝</span>
                        </div>
                        <h3 className="mb-2 font-semibold text-slate-900">Respeto</h3>
                        <p className="text-sm text-slate-600">Valoramos la diversidad y la dignidad de cada persona</p>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all hover:shadow-md">
                        <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
                            <span className="text-2xl">💪</span>
                        </div>
                        <h3 className="mb-2 font-semibold text-slate-900">Responsabilidad</h3>
                        <p className="text-sm text-slate-600">Formamos estudiantes comprometidos con su entorno</p>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all hover:shadow-md">
                        <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-slate-100">
                            <span className="text-2xl">❤️</span>
                        </div>
                        <h3 className="mb-2 font-semibold text-slate-900">Solidaridad</h3>
                        <p className="text-sm text-slate-600">Fomentamos la empatía y el apoyo mutuo</p>
                    </div>
                </div>
            </div>

            {/* Info Grid */}
            <div className="grid gap-6 lg:grid-cols-3">
                {/* Contact Info */}
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="mb-4 text-lg font-semibold text-slate-900">Información de Contacto</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-3">
                            <svg className="h-5 w-5 flex-shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            <span className="text-slate-700">Av. Principal 123, Santiago, Chile</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <svg className="h-5 w-5 flex-shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <span className="text-slate-700">+56 2 1234 5678</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <svg className="h-5 w-5 flex-shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            <span className="text-slate-700">contacto@colegio.cl</span>
                        </li>
                    </ul>
                </div>

                {/* Education Levels */}
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="mb-4 text-lg font-semibold text-slate-900">Niveles Educativos</h3>
                    <ul className="space-y-2 text-sm text-slate-700">
                        <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-slate-900"></div>
                            Pre-Kinder y Kinder
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-slate-900"></div>
                            Educación Básica (1° a 8°)
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-slate-900"></div>
                            Educación Media (I° a IV°)
                        </li>
                    </ul>
                </div>

                {/* Documents */}
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                    <h3 className="mb-4 text-lg font-semibold text-slate-900">Documentos</h3>
                    <ul className="space-y-2 text-sm">
                        <li>
                            <a href="#" className="flex items-center gap-2 text-slate-700 transition-colors hover:text-slate-900">
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Reglamento Interno
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2 text-slate-700 transition-colors hover:text-slate-900">
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Protocolo de Convivencia
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2 text-slate-700 transition-colors hover:text-slate-900">
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                Lista de Útiles
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
