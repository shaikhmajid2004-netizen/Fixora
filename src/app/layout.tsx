import "./globals.css";
import { Toaster } from "sonner";
import type { Metadata } from "next";
import "@fontsource/plus-jakarta-sans/index.css";

export const metadata: Metadata = {
  title: "Fixora | One Platform. Every Service.",
  description:
    "Book trusted professionals for home services, repairs, and more with Fixora.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
  className="min-h-screen bg-white text-slate-900 antialiased"
  style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
>
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}