import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://mahdiarfarsi.com"),
  title: {
    default: "The Mahdiar Archive",
    template: "%s | The Mahdiar Archive",
  },
  description:
    "The official digital museum and research archive of Mohammad Mahdiar Farsi.",
  openGraph: {
    title: "The Mahdiar Archive",
    description:
      "History, architecture, civilization and memory through the work of Mohammad Mahdiar Farsi.",
    type: "website",
    siteName: "The Mahdiar Archive",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
