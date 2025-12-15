import Link from "next/link";

export default function AdmisionPage() {
    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 p-8 text-white md:p-12">
                <div className="mx-auto max-w-3xl text-center space-y-4">
                    <h1 className="text-3xl font-bold md:text-4xl">Proceso de Admisión</h1>
                    <p className="text-lg text-white/90">
                        Únete a nuestra comunidad educativa. Sigue estos pasos para completar tu postulación.
                    </p>
                </div>
            </div>

            {/* Steps Section */}
            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-slate-900">Cómo Postular</h2>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {/* Step 1 */}
                    <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-slate-300 hover:shadow-lg">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-900 transition-colors group-hover:bg-slate-900 group-hover:text-white">
                            <span className="text-xl font-bold">1</span>
                        </div>
                        <h3 className="mb-2 font-semibold text-slate-900">Crear Cuenta</h3>
                        <p className="text-sm text-slate-600">
                            Regístrate como apoderado en nuestro portal de admisión.
                        </p>
                    </div>

                    {/* Step 2 */}
                    <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-slate-300 hover:shadow-lg">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-900 transition-colors group-hover:bg-slate-900 group-hover:text-white">
                            <span className="text-xl font-bold">2</span>
                        </div>
                        <h3 className="mb-2 font-semibold text-slate-900">Crear Postulación</h3>
                        <p className="text-sm text-slate-600">
                            Inicia una nueva postulación indicando año y curso deseado.
                        </p>
                    </div>

                    {/* Step 3 */}
                    <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-slate-300 hover:shadow-lg">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-900 transition-colors group-hover:bg-slate-900 group-hover:text-white">
                            <span className="text-xl font-bold">3</span>
                        </div>
                        <h3 className="mb-2 font-semibold text-slate-900">Subir Documentos</h3>
                        <p className="text-sm text-slate-600">
                            Carga todos los documentos requeridos en formato PDF o imagen.
                        </p>
                    </div>

                    {/* Step 4 */}
                    <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-6 transition-all hover:border-slate-300 hover:shadow-lg">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 text-slate-900 transition-colors group-hover:bg-slate-900 group-hover:text-white">
                            <span className="text-xl font-bold">4</span>
                        </div>
                        <h3 className="mb-2 font-semibold text-slate-900">Esperar Revisión</h3>
                        <p className="text-sm text-slate-600">
                            Nuestro equipo revisará tu postulación y te contactará.
                        </p>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                    <Link
                        href="/register"
                        className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white shadow-md transition-all hover:bg-slate-800 hover:shadow-lg"
                    >
                        Crear Cuenta
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </Link>
                    <Link
                        href="/portal"
                        className="inline-flex items-center gap-2 rounded-lg border-2 border-slate-200 bg-white px-6 py-3 font-semibold text-slate-900 transition-all hover:border-slate-300 hover:bg-slate-50"
                    >
                        Ir al Portal
                    </Link>
                </div>
            </div>

            {/* Documents & Calendar Section */}
            <div className="grid gap-6 lg:grid-cols-2">
                {/* Documents Card */}
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100">
                        <svg className="h-6 w-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-slate-900">Documentos Requeridos</h3>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <svg className="h-5 w-5 flex-shrink-0 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-slate-700">Cédula de identidad del apoderado</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <svg className="h-5 w-5 flex-shrink-0 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-slate-700">Certificado de nacimiento del estudiante</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <svg className="h-5 w-5 flex-shrink-0 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-sm text-slate-700">Último informe de notas o evaluaciones</span>
                        </li>
                    </ul>
                    <div className="mt-4 rounded-lg bg-blue-50 p-3">
                        <p className="text-xs text-blue-800">
                            <strong>Nota:</strong> Todos los documentos deben estar en formato PDF, JPG o PNG (máx. 8MB)
                        </p>
                    </div>
                </div>

                {/* Calendar Card */}
                <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100">
                        <svg className="h-6 w-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h3 className="mb-3 text-xl font-semibold text-slate-900">Calendario de Admisión</h3>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 rounded-lg bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                                Ene-Mar
                            </div>
                            <div>
                                <p className="font-medium text-slate-900">Período de Postulaciones</p>
                                <p className="text-sm text-slate-600">Recepción de solicitudes y documentos</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 rounded-lg bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                                Abr-May
                            </div>
                            <div>
                                <p className="font-medium text-slate-900">Entrevistas</p>
                                <p className="text-sm text-slate-600">Reuniones con apoderados y estudiantes</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 rounded-lg bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                                Jun
                            </div>
                            <div>
                                <p className="font-medium text-slate-900">Resultados</p>
                                <p className="text-sm text-slate-600">Publicación de admitidos</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 rounded-lg bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
                                Jul
                            </div>
                            <div>
                                <p className="font-medium text-slate-900">Matrícula</p>
                                <p className="text-sm text-slate-600">Proceso de matrícula oficial</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
