"use client";

import AuthGuard from "@/components/guards/AuthGuard";
import PortalSidebar from "@/components/portal/Sidebar";

export default function PortalLayout({ children }: { children: React.ReactNode }) {
    return (
        <AuthGuard>
            <div className="min-h-screen bg-slate-50 font-sans">
                <PortalSidebar />
                <main className="min-h-screen p-4 lg:ml-64 lg:p-8">
                    <div className="mx-auto max-w-5xl">
                        {children}
                    </div>
                </main>
            </div>
        </AuthGuard>
    );
}
