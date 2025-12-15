import { NextResponse } from "next/server";
import { adminAuth } from "@/lib/firebase/admin";

function getBearerToken(req: Request) {
    const h = req.headers.get("authorization") || "";
    const [type, token] = h.split(" ");
    if (type?.toLowerCase() !== "bearer" || !token) return null;
    return token;
}

function isBootstrappedEmail(email: string | undefined | null) {
    const list = (process.env.ADMIN_BOOTSTRAP_EMAILS || "")
        .split(",")
        .map(s => s.trim().toLowerCase())
        .filter(Boolean);
    return !!email && list.includes(email.toLowerCase());
}

export async function POST(req: Request) {
    try {
        const token = getBearerToken(req);
        if (!token) {
            return NextResponse.json({ error: "Missing token" }, { status: 401 });
        }

        const decoded = await adminAuth().verifyIdToken(token);

        // Verificar si el email del usuario está en la lista de bootstrap
        if (!isBootstrappedEmail(decoded.email)) {
            return NextResponse.json({
                error: "Email not in bootstrap list"
            }, { status: 403 });
        }

        // Auto-asignar permisos de admin al usuario bootstrap
        await adminAuth().setCustomUserClaims(decoded.uid, { admin: true });

        return NextResponse.json({
            ok: true,
            message: "Admin permissions granted. Please sign out and sign in again."
        });
    } catch (error: any) {
        return NextResponse.json({
            error: error?.message || "Internal error"
        }, { status: 500 });
    }
}
