"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { User, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase/client";

type AuthCtx = { user: User | null; loading: boolean };
const Ctx = createContext<AuthCtx>({ user: null, loading: true });

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => onAuthStateChanged(auth, (u) => { setUser(u); setLoading(false); }), []);
    const value = useMemo(() => ({ user, loading }), [user, loading]);

    return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useAuth = () => useContext(Ctx);
