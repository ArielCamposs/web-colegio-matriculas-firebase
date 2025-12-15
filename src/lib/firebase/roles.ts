import { User } from "firebase/auth";

export async function isAdmin(user: User | null): Promise<boolean> {
    if (!user) return false;
    const res = await user.getIdTokenResult(); // trae claims
    return res.claims.admin === true;
}
