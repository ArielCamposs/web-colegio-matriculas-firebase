import { addDoc, collection, doc, getDoc, getDocs, orderBy, query, updateDoc, where } from "firebase/firestore";
import { db } from "./client";

export type ApplicationStatus = "draft" | "submitted" | "observed" | "approved" | "rejected";

export async function createApplication(guardianId: string) {
    const year = new Date().getFullYear() + 1;
    const ref = await addDoc(collection(db, "applications"), {
        guardian_id: guardianId,
        year,
        status: "draft" as ApplicationStatus,
        created_at: new Date(),
        updated_at: new Date(),
    });
    return ref.id;
}

export async function getApplication(appId: string) {
    const snap = await getDoc(doc(db, "applications", appId));
    return snap.exists() ? ({ id: snap.id, ...snap.data() } as any) : null;
}

export async function listMyApplications(guardianId: string) {
    const q = query(
        collection(db, "applications"),
        where("guardian_id", "==", guardianId),
        orderBy("created_at", "desc")
    );
    const snap = await getDocs(q);
    return snap.docs.map(d => ({ id: d.id, ...d.data() } as any));
}

export async function listAllApplications() {
    const q = query(collection(db, "applications"), orderBy("created_at", "desc"));
    const snap = await getDocs(q);
    return snap.docs.map(d => ({ id: d.id, ...d.data() } as any));
}

export async function setApplicationStatus(appId: string, status: ApplicationStatus) {
    await updateDoc(doc(db, "applications", appId), { status, updated_at: new Date() });
}

export async function listDocuments(appId: string) {
    const q = query(collection(db, "documents"), where("application_id", "==", appId), orderBy("created_at", "desc"));
    const snap = await getDocs(q);
    return snap.docs.map(d => ({ id: d.id, ...d.data() } as any));
}

export async function verifyDocument(docId: string, verified: boolean, note: string | null) {
    await updateDoc(doc(db, "documents", docId), { verified, note });
}
