import { notFound } from "next/navigation";
import { isLocale, locales } from "@/lib/content";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dir = locale === "fa" ? "rtl" : "ltr";

  return (
    <div lang={locale} dir={dir} className="locale-shell min-h-screen">
      <Header locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
    </div>
  );
}
