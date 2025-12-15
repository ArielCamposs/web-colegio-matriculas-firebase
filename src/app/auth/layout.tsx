export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="mx-auto max-w-md px-4 py-12">
            {children}
        </main>
    );
}
