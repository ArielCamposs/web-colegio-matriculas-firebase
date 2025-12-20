import Link from "next/link";
import Image from "next/image";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Hero Section - Premium Overhaul */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/colegio-campus.jpg"
              alt="Campus del colegio"
              fill
              priority
              quality={90}
              className="object-cover scale-105"
            />
            {/* Multi-layered Gradient for Depth */}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900/60 to-transparent" />
            <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[2px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="max-w-3xl space-y-10">
              <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur-md border border-white/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-white/90">
                    Proceso de Admisión 2026 Abierto
                  </span>
                </div>

                <h1 className="text-5xl font-black tracking-tight text-white sm:text-7xl lg:text-8xl leading-[1.1]">
                  Liderazgo que <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">transforma</span>.
                </h1>

                <p className="text-xl text-white/70 leading-relaxed max-w-2xl font-medium">
                  Una educación de excelencia basada en valores, innovación tecnológica
                  y un compromiso inquebrantable con el futuro de nuestros estudiantes.
                </p>
              </div>

              <div className="flex flex-wrap gap-5 pt-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
                <Link
                  href="/portal/admision/nueva"
                  className="group relative inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-black text-slate-900 shadow-2xl transition-all hover:bg-emerald-50 hover:scale-105 active:scale-95"
                >
                  Postular Ahora
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-900 text-white transition-transform group-hover:rotate-45">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </Link>
                <Link
                  href="/colegio"
                  className="inline-flex items-center gap-3 rounded-2xl border-2 border-white/20 bg-white/5 px-8 py-4 font-black text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/40"
                >
                  Ver Proyecto Educativo
                </Link>
              </div>

              {/* Quick Stats Over Hero */}
              <div className="grid grid-cols-3 gap-8 pt-10 border-t border-white/10 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-400">
                {[
                  { label: "Años de Tradición", value: 25, suffix: "+" },
                  { label: "Excelencia PSU", value: 95, suffix: "%" },
                  { label: "Cupos Limitados", value: 50, suffix: "" },
                ].map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <p className="text-3xl font-black text-white">
                      <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                    </p>
                    <p className="text-xs font-bold uppercase tracking-widest text-white/50">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Decorative scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-1 h-12 rounded-full bg-gradient-to-b from-white/20 to-transparent" />
          </div>
        </section>

        {/* Features Section - Glassmorphism & Refinement */}
        <section className="bg-slate-50 py-32 relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(15,23,42,0.05),transparent)] pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-24">
              <h2 className="text-4xl font-black text-slate-900 sm:text-6xl tracking-tight">
                Forjando el <span className="text-slate-400">futuro</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
                Un entorno educativo diseñado para potenciar el talento y la curiosidad.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Excelencia Académica",
                  desc: "Preparación de alto nivel para los desafíos universitarios globales.",
                  icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                },
                {
                  title: "Formación en Valores",
                  desc: "Educación integral que fomenta el respeto y la integridad personal.",
                  icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                },
                {
                  title: "Tech Innovation",
                  desc: "Herramientas digitales avanzadas integradas en el ecosistema de aprendizaje.",
                  icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                },
                {
                  title: "Desarrollo Creativo",
                  desc: "Programas extracurriculares que potencian habilidades artísticas y sociales.",
                  icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                }
              ].map((feat, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-3xl border border-white bg-white/40 p-10 backdrop-blur-md transition-all hover:bg-white hover:shadow-2xl hover:shadow-slate-200 hover:-translate-y-2"
                >
                  <div className="absolute top-0 right-0 -mr-8 -mt-8 h-32 w-32 rounded-full bg-slate-900/5 transition-transform group-hover:scale-150" />

                  <div className="relative mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-lg shadow-slate-900/10 transition-colors group-hover:bg-slate-800">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feat.icon} />
                    </svg>
                  </div>

                  <h3 className="relative mb-4 text-2xl font-black text-slate-900">
                    {feat.title}
                  </h3>
                  <p className="relative text-slate-600 font-medium leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section - Magnetic Design */}
        <section className="bg-slate-900 py-32 relative overflow-hidden">
          {/* Advanced background elements */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_-20%,rgba(52,211,153,0.15),transparent)] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_100%,rgba(20,184,166,0.1),transparent)] pointer-events-none" />
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-4xl mx-auto space-y-10">
              <h2 className="text-4xl font-black text-white sm:text-7xl tracking-tight leading-tight">
                El primer paso hacia <br />
                un <span className="text-emerald-400 underline decoration-white/10 underline-offset-8">futuro brillante</span>.
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto font-medium leading-relaxed">
                Únete a una comunidad educativa que inspira confianza,
                excelencia académica y crecimiento personal.
              </p>

              <div className="flex flex-wrap justify-center gap-6 pt-6">
                <Link
                  href="/portal/admision/nueva"
                  className="inline-flex items-center gap-3 rounded-2xl bg-emerald-500 px-10 py-5 font-black text-slate-950 shadow-2xl shadow-emerald-500/20 transition-all hover:bg-emerald-400 hover:scale-105 active:scale-95"
                >
                  Iniciar Postulación
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
                <Link
                  href="/contacto"
                  className="inline-flex items-center gap-3 rounded-2xl border-2 border-white/10 bg-white/5 px-10 py-5 font-black text-white backdrop-blur-md transition-all hover:bg-white/10 hover:border-white/20"
                >
                  Hablar con nosotros
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links Section - Reimagined */}
        <section className="bg-white py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { title: "Proyecto Educativo", desc: "Conoce nuestra visión y valores institucionales.", href: "/colegio", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
                { title: "Noticias y Eventos", desc: "Mantente informado sobre las actividades del colegio.", href: "/noticias", icon: "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" },
                { title: "Portal de Apoderados", desc: "Gestiona trámites y revisa el estado de postulación.", href: "/portal", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" }
              ].map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href}
                  className="group relative flex flex-col items-center text-center rounded-3xl border border-slate-100 bg-white p-12 transition-all hover:border-slate-200 hover:shadow-xl hover:shadow-slate-100"
                >
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 text-slate-900 transition-all group-hover:bg-slate-900 group-hover:text-white group-hover:scale-110">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.icon} />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">{link.title}</h3>
                  <p className="mt-3 text-slate-500 font-medium">{link.desc}</p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-black text-slate-900 opacity-0 transition-all group-hover:opacity-100">
                    Saber más
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

