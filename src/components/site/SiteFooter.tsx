import Link from "next/link";
import Container from "@/components/ui/Container";

export default function SiteFooter() {
    return (
        <footer className="bg-slate-950 text-white pt-24 border-t border-white/5">
            <Container>
                {/* Main Footer Content */}
                <div className="grid gap-16 pb-20 lg:grid-cols-5">
                    {/* About Column */}
                    <div className="lg:col-span-2 space-y-8">
                        <Link href="/" className="flex items-center gap-3">
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-950 shadow-xl">
                                <span className="text-2xl font-black">C</span>
                            </div>
                            <span className="text-2xl font-black tracking-tight text-white">Colegio <span className="text-slate-500 font-medium">Particular</span></span>
                        </Link>
                        <p className="text-lg text-slate-400 leading-relaxed max-w-sm">
                            Formamos líderes integrales con visión de futuro, excelencia académica y sólidos cimientos éticos desde hace 25 años.
                        </p>
                        {/* Social Media Icons */}
                        <div className="flex gap-4">
                            {[
                                { name: "Facebook", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                                { name: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-white/50 transition-all hover:bg-white/10 hover:text-white"
                                    aria-label={social.name}
                                >
                                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d={social.path} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-black uppercase tracking-widest text-white/40">Institución</h3>
                        <ul className="space-y-4">
                            {["Sobre el Colegio", "Proyecto Educativo", "Equipo Docente", "Noticias", "Contacto"].map((item, i) => (
                                <li key={i}>
                                    <Link href="#" className="text-slate-400 font-medium transition-colors hover:text-white">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-sm font-black uppercase tracking-widest text-white/40">Comunidad</h3>
                        <ul className="space-y-4">
                            {["Admisión 2026", "Portal de Apoderados", "Aranceles", "Reglamento", "Convenios"].map((item, i) => (
                                <li key={i}>
                                    <Link href="#" className="text-slate-400 font-medium transition-colors hover:text-white">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-sm font-black uppercase tracking-widest text-white/40">Info</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                </svg>
                                <span className="text-slate-400 font-medium text-sm">Av. Principal 123, Santiago</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="text-slate-400 font-medium text-sm">+56 2 1234 5678</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 py-10 transition-colors">
                    <div className="flex flex-col items-center justify-between gap-6 text-sm font-medium text-slate-500 sm:flex-row">
                        <p>© {new Date().getFullYear()} Colegio Particular. Crafted with excellence.</p>
                        <div className="flex gap-8">
                            <Link href="/privacidad" className="hover:text-white transition-colors">Privacidad</Link>
                            <Link href="/privacidad" className="hover:text-white transition-colors">Términos</Link>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

