import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <SiteHeader />
            <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>
            <SiteFooter />
        </>
    );
}
