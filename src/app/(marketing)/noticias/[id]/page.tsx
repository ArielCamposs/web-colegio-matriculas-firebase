"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

export default function NoticiaDetallePage() {
    const { id } = useParams<{ id: string }>();

    return (
        <div className="space-y-6">
            <Link className="text-sm underline" href="/noticias">← Volver</Link>
            <h1 className="text-2xl font-semibold">Noticia: {id}</h1>

            <div className="rounded-xl border bg-white p-5">
                <p className="text-sm text-slate-600">
                    Contenido de ejemplo. Luego lo conectas a Firestore (posts/{id}) o a un CMS.
                </p>
            </div>
        </div>
    );
}
