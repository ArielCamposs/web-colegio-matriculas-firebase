"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/app/providers";
import { useRouter } from "next/navigation";

export default function BootstrapAdminPage() {
    const { user } = useAuth();
    const router = useRouter();
    const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
    const [message, setMessage] = useState("");

    useEffect(() => {
        async function bootstrap() {
            if (!user) {
                router.push("/login?next=/admin/bootstrap");
                return;
            }

            try {
                const token = await user.getIdToken();
                const res = await fetch("/api/admin/bootstrap", {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                    },
                });

                const data = await res.json();

                if (res.ok) {
                    setStatus("success");
                    setMessage(data.message || "Admin permissions granted!");
                } else {
                    setStatus("error");
                    setMessage(data.error || "Failed to grant admin permissions");
                }
            } catch (error: any) {
                setStatus("error");
                setMessage(error?.message || "An error occurred");
            }
        }

        bootstrap();
    }, [user, router]);

    if (status === "loading") {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="text-center space-y-4">
                    <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-slate-900 mx-auto"></div>
                    <p className="text-slate-600">Activating admin permissions...</p>
                </div>
            </div>
        );
    }

    if (status === "error") {
        return (
            <div className="flex min-h-screen items-center justify-center p-4">
                <div className="max-w-md rounded-xl border border-red-200 bg-red-50 p-8 text-center">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100">
                        <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <h2 className="mb-2 text-xl font-bold text-red-900">Error</h2>
                    <p className="text-sm text-red-700">{message}</p>
                    <p className="mt-4 text-xs text-red-600">
                        Make sure your email is in ADMIN_BOOTSTRAP_EMAILS
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex min-h-screen items-center justify-center p-4">
            <div className="max-w-md rounded-xl border border-emerald-200 bg-emerald-50 p-8 text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                    <svg className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <h2 className="mb-2 text-xl font-bold text-emerald-900">Success!</h2>
                <p className="mb-6 text-sm text-emerald-700">{message}</p>
                <div className="space-y-3">
                    <button
                        onClick={() => {
                            // Sign out and redirect to login
                            import("@/lib/firebase/client").then(({ auth }) => {
                                auth.signOut().then(() => {
                                    router.push("/login?next=/admin");
                                });
                            });
                        }}
                        className="w-full rounded-lg bg-emerald-600 px-4 py-3 font-semibold text-white transition-colors hover:bg-emerald-700"
                    >
                        Sign Out & Sign In Again
                    </button>
                    <p className="text-xs text-emerald-600">
                        You need to sign in again for the changes to take effect
                    </p>
                </div>
            </div>
        </div>
    );
}
