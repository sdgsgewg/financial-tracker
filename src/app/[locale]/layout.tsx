import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";

import "../globals.css";
import AuthProviderServer from "./auth-provider-server";
import IntlProvider from "./intl-provider";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Financial Tracker",
  description: "Track your finances with ease",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "id" }];
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      >
        <Suspense fallback={<div>Loading translations...</div>}>
          <IntlProvider>
            <AuthProviderServer>{children}</AuthProviderServer>
          </IntlProvider>
        </Suspense>
      </body>
    </html>
  );
}
