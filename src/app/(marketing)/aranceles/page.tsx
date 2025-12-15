export default function ArancelesPage() {
    const aranceles = [
        { nivel: "Pre-Kinder y Kinder", matricula: "$150.000", mensualidad: "$180.000" },
        { nivel: "1° a 4° Básico", matricula: "$180.000", mensualidad: "$220.000" },
        { nivel: "5° a 8° Básico", matricula: "$200.000", mensualidad: "$250.000" },
        { nivel: "I° a IV° Medio", matricula: "$220.000", mensualidad: "$280.000" },
    ];

    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 p-8 text-white md:p-12">
                <div className="mx-auto max-w-3xl text-center space-y-4">
                    <h1 className="text-3xl font-bold md:text-4xl">Aranceles y Pagos</h1>
                    <p className="text-lg text-white/90">
                        Información transparente sobre costos de matrícula y mensualidades.
                    </p>
                </div>
            </div>

            {/* Pricing Table */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-900">Tabla de Aranceles 2026</h2>

                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="border-b border-slate-200 bg-slate-50">
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Nivel Educativo</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Matrícula</th>
                                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-900">Mensualidad</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-200">
                                {aranceles.map((item, index) => (
                                    <tr key={index} className="transition-colors hover:bg-slate-50">
                                        <td className="px-6 py-4 text-sm font-medium text-slate-900">{item.nivel}</td>
                                        <td className="px-6 py-4 text-sm text-slate-700">{item.matricula}</td>
                                        <td className="px-6 py-4 text-sm text-slate-700">{item.mensualidad}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="rounded-lg bg-blue-50 p-4">
                    <p className="text-sm text-blue-800">
                        <strong>Nota:</strong> Los valores son referenciales y pueden estar sujetos a cambios.
                        Contacta con administración para información actualizada.
                    </p>
                </div>
            </div>

            {/* Payment Methods & Benefits */}
            <div className="grid gap-6 lg:grid-cols-2">
                {/* Payment Methods */}
                <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100">
                        <svg className="h-6 w-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                    </div>
                    <h3 className="mb-4 text-xl font-semibold text-slate-900">Medios de Pago</h3>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <svg className="h-5 w-5 flex-shrink-0 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-slate-700">Transferencia bancaria</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <svg className="h-5 w-5 flex-shrink-0 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-slate-700">Tarjetas de crédito y débito</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <svg className="h-5 w-5 flex-shrink-0 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-slate-700">Pago presencial en administración</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <svg className="h-5 w-5 flex-shrink-0 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-slate-700">Pago automático (PAC)</span>
                        </li>
                    </ul>
                </div>

                {/* Benefits & Discounts */}
                <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100">
                        <svg className="h-6 w-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>
                    <h3 className="mb-4 text-xl font-semibold text-slate-900">Beneficios y Descuentos</h3>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <div className="flex-shrink-0 rounded-lg bg-slate-900 px-2 py-1 text-xs font-semibold text-white">
                                10%
                            </div>
                            <span className="text-sm text-slate-700">Descuento por hermanos (2° hijo en adelante)</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="flex-shrink-0 rounded-lg bg-slate-900 px-2 py-1 text-xs font-semibold text-white">
                                5%
                            </div>
                            <span className="text-sm text-slate-700">Pago anual anticipado</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="flex-shrink-0 rounded-lg bg-slate-900 px-2 py-1 text-xs font-semibold text-white">
                                BECA
                            </div>
                            <span className="text-sm text-slate-700">Becas por mérito académico y deportivo</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="flex-shrink-0 rounded-lg bg-slate-900 px-2 py-1 text-xs font-semibold text-white">
                                BECA
                            </div>
                            <span className="text-sm text-slate-700">Becas socioeconómicas (según evaluación)</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Additional Info */}
            <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
                <h3 className="mb-4 text-xl font-semibold text-slate-900">Información Adicional</h3>
                <div className="space-y-4 text-sm text-slate-700">
                    <div className="flex items-start gap-3">
                        <svg className="h-5 w-5 flex-shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p>La matrícula se paga una vez al año y asegura el cupo del estudiante.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <svg className="h-5 w-5 flex-shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p>Las mensualidades se pagan durante 10 meses (marzo a diciembre).</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <svg className="h-5 w-5 flex-shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p>Los aranceles incluyen materiales educativos básicos y uso de instalaciones.</p>
                    </div>
                    <div className="flex items-start gap-3">
                        <svg className="h-5 w-5 flex-shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <p>Para consultas sobre becas y convenios de pago, contactar con administración.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
