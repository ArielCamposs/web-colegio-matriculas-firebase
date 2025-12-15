export default function ContactoPage() {
    return (
        <div className="space-y-12">
            {/* Hero Section */}
            <div className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-700 p-8 text-white md:p-12">
                <div className="mx-auto max-w-3xl text-center space-y-4">
                    <h1 className="text-3xl font-bold md:text-4xl">Contáctanos</h1>
                    <p className="text-lg text-white/90">
                        Estamos aquí para responder tus preguntas y ayudarte en lo que necesites.
                    </p>
                </div>
            </div>

            {/* Contact Grid */}
            <div className="grid gap-6 lg:grid-cols-3">
                {/* Phone */}
                <div className="group rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all hover:border-slate-300 hover:shadow-md">
                    <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 transition-colors group-hover:bg-slate-900">
                        <svg className="h-8 w-8 text-slate-900 transition-colors group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-slate-900">Teléfono</h3>
                    <p className="text-slate-600">+56 2 1234 5678</p>
                    <p className="mt-1 text-sm text-slate-500">Lun - Vie: 8:00 - 18:00</p>
                </div>

                {/* Email */}
                <div className="group rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all hover:border-slate-300 hover:shadow-md">
                    <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 transition-colors group-hover:bg-slate-900">
                        <svg className="h-8 w-8 text-slate-900 transition-colors group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-slate-900">Email</h3>
                    <p className="text-slate-600">contacto@colegio.cl</p>
                    <p className="mt-1 text-sm text-slate-500">Respuesta en 24-48 hrs</p>
                </div>

                {/* Location */}
                <div className="group rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all hover:border-slate-300 hover:shadow-md">
                    <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 transition-colors group-hover:bg-slate-900">
                        <svg className="h-8 w-8 text-slate-900 transition-colors group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-slate-900">Ubicación</h3>
                    <p className="text-slate-600">Av. Principal 123</p>
                    <p className="mt-1 text-sm text-slate-500">Santiago, Chile</p>
                </div>
            </div>

            {/* Contact Form */}
            <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="mb-6 text-2xl font-bold text-slate-900">Envíanos un Mensaje</h2>
                <form className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                        <div>
                            <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
                                Nombre Completo
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 transition-colors focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                                placeholder="Juan Pérez"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 transition-colors focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                                placeholder="juan@ejemplo.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="subject" className="mb-2 block text-sm font-medium text-slate-700">
                            Asunto
                        </label>
                        <input
                            type="text"
                            id="subject"
                            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 transition-colors focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                            placeholder="¿En qué podemos ayudarte?"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
                            Mensaje
                        </label>
                        <textarea
                            id="message"
                            rows={6}
                            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 transition-colors focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
                            placeholder="Escribe tu mensaje aquí..."
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-8 py-3 font-semibold text-white shadow-md transition-all hover:bg-slate-800 hover:shadow-lg"
                    >
                        Enviar Mensaje
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </button>
                </form>
            </div>

            {/* Office Hours */}
            <div className="rounded-xl border border-slate-200 bg-white p-8 shadow-sm">
                <h2 className="mb-6 text-2xl font-bold text-slate-900">Horario de Atención</h2>
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="flex items-center gap-4 rounded-lg border border-slate-200 p-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-slate-100">
                            <svg className="h-6 w-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <p className="font-semibold text-slate-900">Lunes a Viernes</p>
                            <p className="text-sm text-slate-600">8:00 - 18:00</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4 rounded-lg border border-slate-200 p-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-slate-100">
                            <svg className="h-6 w-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                        <div>
                            <p className="font-semibold text-slate-900">Sábado y Domingo</p>
                            <p className="text-sm text-slate-600">Cerrado</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
