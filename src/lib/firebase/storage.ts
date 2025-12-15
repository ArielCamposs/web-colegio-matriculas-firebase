import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "./client";

export async function uploadAdmissionFile(params: {
    uid: string;
    appId: string;
    docType: string;
    file: File;
}) {
    const { uid, appId, docType, file } = params;

    const allowed = ["application/pdf", "image/png", "image/jpeg"];
    if (!allowed.includes(file.type)) throw new Error("Tipo no permitido (PDF/JPG/PNG).");
    if (file.size > 8 * 1024 * 1024) throw new Error("Máximo 8MB.");

    const safeName = file.name.replace(/[^\w.\-]+/g, "_");
    const path = `admissions/${uid}/${appId}/${docType}/${crypto.randomUUID()}-${safeName}`;
    const storageRef = ref(storage, path);

    await uploadBytes(storageRef, file, { contentType: file.type });
    const url = await getDownloadURL(storageRef);

    return { path, url };
}
