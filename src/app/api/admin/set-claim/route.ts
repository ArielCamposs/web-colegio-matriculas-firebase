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
    const token = getBearerToken(req);
    if (!token) return NextResponse.json({ error: "Missing token" }, { status: 401 });

    const decoded = await adminAuth().verifyIdToken(token);
    const callerIsAdmin = decoded.admin === true;
    const callerIsBootstrap = isBootstrappedEmail(decoded.email);

    if (!callerIsAdmin && !callerIsBootstrap) {
        return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    const body = await req.json().catch(() => null);
    const uid = body?.uid as string | undefined;
    const admin = body?.admin as boolean | undefined;

    if (!uid || typeof admin !== "boolean") {
        return NextResponse.json({ error: "Bad request" }, { status: 400 });
    }

    await adminAuth().setCustomUserClaims(uid, { admin });
    return NextResponse.json({ ok: true });
}
