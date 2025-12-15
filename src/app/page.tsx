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
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          {/* Background Image with Lazy Loading */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/colegio-campus.jpg"
              alt="Campus del colegio"
              fill
              loading="lazy"
              quality={85}
              sizes="100vw"
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/"
            />
            {/* Gradient Overlay for Better Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/50 to-white/30" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-32">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
              {/* Left Column - Content */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <span className="inline-block rounded-full bg-slate-900 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
                    Excelencia Educativa
                  </span>
                  <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                    Educación con{" "}
                    <span className="text-slate-700">propósito</span>
                  </h1>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Formamos estudiantes integrales con valores sólidos,
                    preparados para los desafíos del futuro en un ambiente
                    de excelencia académica y desarrollo personal.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/admision"
                    className="group inline-flex items-center gap-2 rounded-lg bg-slate-900 px-6 py-3.5 font-semibold text-white shadow-lg shadow-slate-900/10 transition-all hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/20"
                  >
                    Proceso de Admisión
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <Link
                    href="/colegio"
                    className="inline-flex items-center gap-2 rounded-lg border-2 border-slate-200 bg-white px-6 py-3.5 font-semibold text-slate-900 transition-all hover:border-slate-300 hover:bg-slate-50"
                  >
                    Conoce el Colegio
                  </Link>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  <div className="space-y-1">
                    <p className="text-2xl sm:text-3xl font-bold text-slate-900">
                      <AnimatedCounter end={25} suffix="+" />
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600">Años de experiencia</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-2xl sm:text-3xl font-bold text-slate-900">
                      <AnimatedCounter end={95} suffix="%" />
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600">Aprobación PSU</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-2xl sm:text-3xl font-bold text-slate-900">
                      <AnimatedCounter end={500} suffix="+" />
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600">Estudiantes</p>
                  </div>
                </div>
              </div>

              {/* Right Column - Visual Card */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-700 p-8 shadow-2xl lg:p-12">
                  {/* Decorative elements */}
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/5 blur-2xl"></div>
                  <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-white/5 blur-2xl"></div>

                  <div className="relative space-y-6">
                    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
                      <div className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></div>
                      <span className="text-xs font-medium text-white/90">Admisión 2026 Abierta</span>
                    </div>

                    <h2 className="text-3xl font-bold text-white">
                      Postulación en línea
                    </h2>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-white/80">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm">Crea tu cuenta en minutos</span>
                      </div>
                      <div className="flex items-center gap-3 text-white/80">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm">Completa la ficha de postulación</span>
                      </div>
                      <div className="flex items-center gap-3 text-white/80">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-sm">Sube tus documentos de forma segura</span>
                      </div>
                    </div>

                    <Link
                      href="/register"
                      className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-6 py-3.5 font-semibold text-slate-900 transition-all hover:bg-slate-50"
                    >
                      Comenzar Postulación
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                ¿Por qué elegirnos?
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Comprometidos con la formación integral de nuestros estudiantes
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Feature 1 */}
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-slate-300 hover:shadow-lg">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 text-slate-900 transition-colors group-hover:bg-slate-900 group-hover:text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  Excelencia Académica
                </h3>
                <p className="text-slate-600">
                  Programas educativos de alto nivel que preparan a nuestros estudiantes para el éxito universitario.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-slate-300 hover:shadow-lg">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 text-slate-900 transition-colors group-hover:bg-slate-900 group-hover:text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  Formación en Valores
                </h3>
                <p className="text-slate-600">
                  Educación integral que fomenta el respeto, la responsabilidad y la solidaridad.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-slate-300 hover:shadow-lg">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 text-slate-900 transition-colors group-hover:bg-slate-900 group-hover:text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  Tecnología Educativa
                </h3>
                <p className="text-slate-600">
                  Infraestructura moderna y herramientas digitales para potenciar el aprendizaje.
                </p>
              </div>

              {/* Feature 4 */}
              <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-slate-300 hover:shadow-lg">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-slate-100 text-slate-900 transition-colors group-hover:bg-slate-900 group-hover:text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-slate-900">
                  Desarrollo Integral
                </h3>
                <p className="text-slate-600">
                  Actividades extracurriculares que complementan la formación académica y personal.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-slate-900 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 px-8 py-16 shadow-2xl sm:px-16">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-grid-white/5 [mask-image:linear-gradient(0deg,transparent,black)]"></div>
              <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-white/5 blur-3xl"></div>

              <div className="relative">
                <div className="mx-auto max-w-3xl text-center space-y-6">
                  <h2 className="text-3xl font-bold text-white sm:text-4xl">
                    ¿Listo para formar parte de nuestra comunidad?
                  </h2>
                  <p className="text-lg text-white/80">
                    Comienza el proceso de admisión hoy mismo y asegura el futuro de tu hijo/a en una institución comprometida con la excelencia.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4 pt-4">
                    <Link
                      href="/register"
                      className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-4 font-semibold text-slate-900 shadow-xl transition-all hover:bg-slate-50 hover:shadow-2xl"
                    >
                      Iniciar Postulación
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                    <Link
                      href="/contacto"
                      className="inline-flex items-center gap-2 rounded-lg border-2 border-white/20 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur transition-all hover:bg-white/20"
                    >
                      Contactar
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Link
                href="/colegio"
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-slate-300 hover:shadow-lg"
              >
                <div className="space-y-3">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 transition-colors group-hover:bg-slate-900">
                    <svg className="h-6 w-6 text-slate-900 transition-colors group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">Proyecto Educativo</h3>
                  <p className="text-sm text-slate-600">Conoce nuestra misión, visión y valores institucionales.</p>
                </div>
              </Link>

              <Link
                href="/noticias"
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-slate-300 hover:shadow-lg"
              >
                <div className="space-y-3">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 transition-colors group-hover:bg-slate-900">
                    <svg className="h-6 w-6 text-slate-900 transition-colors group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">Noticias y Comunicados</h3>
                  <p className="text-sm text-slate-600">Mantente informado sobre eventos y actividades del colegio.</p>
                </div>
              </Link>

              <Link
                href="/portal"
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:border-slate-300 hover:shadow-lg"
              >
                <div className="space-y-3">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100 transition-colors group-hover:bg-slate-900">
                    <svg className="h-6 w-6 text-slate-900 transition-colors group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">Portal de Apoderados</h3>
                  <p className="text-sm text-slate-600">Accede a tu cuenta para gestionar postulaciones y documentos.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

