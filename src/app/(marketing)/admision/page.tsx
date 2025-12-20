import Link from "next/link";
import Container from "@/components/ui/Container";

export default function AdmisionPage() {
    return (
        <div className="pb-24">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-slate-950 py-24 lg:py-32">
                <div className="absolute left-1/3 top-0 h-96 w-96 -translate-y-1/2 rounded-full bg-emerald-500/10 blur-[100px]" />
                <Container>
                    <div className="relative mx-auto max-w-3xl text-center space-y-6">
                        <h1 className="text-5xl font-black text-white md:text-6xl tracking-tight">Proceso de <span className="text-emerald-400">Admisión</span></h1>
                        <p className="text-xl text-slate-300 font-medium leading-relaxed">
                            Únete a nuestra comunidad educativa. Guía paso a paso para formar parte de la excelencia.
                        </p>
                        <div className="pt-8 space-y-4">
                            <h2 className="text-3xl font-black text-white">Cómo Postular</h2>
                            <p className="text-slate-400 font-medium">Siga estos pasos para iniciar su proceso</p>
                        </div>
                    </div>
                </Container>
            </section>

            <Container>
                <div className="relative -mt-12 space-y-24">
                    {/* Steps Section - Roadshow style */}
                    <div className="space-y-12">

                        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                            {[
                                { step: "1", title: "Cuenta", desc: "Regístrate en el portal como apoderado.", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
                                { step: "2", title: "Postulación", desc: "Indica año y curso para el estudiante.", icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" },
                                { step: "3", title: "Documentos", desc: "Carga certificados y notas en formato PDF.", icon: "M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" },
                                { step: "4", title: "Revisión", desc: "Nuestro equipo evaluará su solicitud.", icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" }
                            ].map((item, idx) => (
                                <div key={idx} className="group relative rounded-3xl border border-slate-100 bg-white p-10 transition-all hover:border-slate-200 hover:shadow-xl hover:shadow-slate-100">
                                    <div className="absolute -right-4 -top-4 text-[120px] font-black leading-none text-slate-200/20 opacity-0 transition-opacity group-hover:opacity-100 select-none">
                                        {item.step}
                                    </div>
                                    <div className="relative z-10">
                                        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg transition-transform group-hover:scale-110">
                                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                                            </svg>
                                        </div>
                                        <h3 className="mb-2 text-xl font-black text-slate-900">{item.title}</h3>
                                        <p className="text-sm font-semibold text-slate-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* CTA Section */}
                        <div className="flex flex-col items-center justify-center gap-6 rounded-[40px] bg-slate-50 p-12 text-center md:flex-row md:text-left border border-slate-100">
                            <div className="flex-1 space-y-2">
                                <h4 className="text-2xl font-black text-slate-900">¿Listo para comenzar?</h4>
                                <p className="text-slate-600 font-medium">Inicia tu postulación 100% online en el portal de apoderados.</p>
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <Link
                                    href="/register"
                                    className="rounded-2xl bg-slate-900 px-8 py-4 font-black text-white shadow-xl transition-all hover:bg-slate-800 hover:scale-105 active:scale-95"
                                >
                                    Crear Cuenta
                                </Link>
                                <Link
                                    href="/portal"
                                    className="rounded-2xl bg-white border-2 border-slate-200 px-8 py-4 font-black text-slate-900 transition-all hover:border-slate-900 hover:scale-105 active:scale-95"
                                >
                                    Ir al Portal
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Documents & Calendar - Modern Look */}
                    <div className="grid gap-8 lg:grid-cols-2">
                        {/* Documents */}
                        <div className="rounded-3xl border border-slate-100 bg-white p-10 shadow-lg shadow-slate-100/50">
                            <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600">
                                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <h3 className="mb-6 text-3xl font-black text-slate-900">Documentación Requerida</h3>
                            <div className="space-y-4">
                                {[
                                    "Cédula de identidad del apoderado",
                                    "Certificado de nacimiento del estudiante",
                                    "Último informe de notas o evaluaciones",
                                    "Certificado anual de estudios"
                                ].map((doc, i) => (
                                    <div key={i} className="flex items-center gap-4 rounded-2xl bg-slate-50 p-4 transition-all hover:bg-emerald-50 border border-slate-100/50">
                                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-emerald-600 shadow-sm border border-emerald-100">
                                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="font-bold text-slate-800">{doc}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-8 rounded-2xl bg-slate-900 p-6 text-white">
                                <p className="text-sm font-medium leading-relaxed opacity-80">
                                    <strong className="text-emerald-400">Importante:</strong> Todos los documentos deben subirse en formato PDF, JPG o PNG con un peso máximo de 8MB por archivo.
                                </p>
                            </div>
                        </div>

                        {/* Calendar */}
                        <div className="rounded-3xl border border-slate-100 bg-slate-50 p-10">
                            <h3 className="mb-10 text-3xl font-black text-slate-900">Calendario Académico</h3>
                            <div className="space-y-8 relative before:absolute before:left-6 before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-200">
                                {[
                                    { period: "Ene - Mar", title: "Postulaciones", desc: "Recepción de solicitudes online" },
                                    { period: "Abr - May", title: "Entrevistas", desc: "Reuniones con dirección y equipo académico" },
                                    { period: "Junio", title: "Resultados", desc: "Publicación de familias seleccionadas" },
                                    { period: "Julio", title: "Matrícula", desc: "Formalización oficial de la matrícula" }
                                ].map((item, i) => (
                                    <div key={i} className="relative pl-14">
                                        <div className="absolute left-[18px] top-1.5 h-3 w-3 rounded-full bg-slate-900 shadow-[0_0_0_4px_rgba(15,23,42,0.1)]"></div>
                                        <div>
                                            <span className="text-xs font-black uppercase tracking-widest text-slate-500">{item.period}</span>
                                            <h4 className="text-xl font-black text-slate-900">{item.title}</h4>
                                            <p className="text-slate-600 font-semibold">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
