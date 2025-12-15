import { getApps, initializeApp, applicationDefault } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";

export function adminAuth() {
    if (!getApps().length) {
        initializeApp({
            credential: applicationDefault(),
            projectId: process.env.FIREBASE_PROJECT_ID,
        });
    }
    return getAuth();
}
