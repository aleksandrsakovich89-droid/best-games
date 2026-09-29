import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SITE_NAME, SITE_URL } from "./seo";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — легендарные игры всех времён`,
    template: `%s | ${SITE_NAME}`,
  },
  description: "Каталог легендарных видеоигр с описаниями, жанрами и годами выхода.",
  applicationName: SITE_NAME,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: `${SITE_NAME} — легендарные игры всех времён`,
    description: "Каталог легендарных видеоигр с описаниями, жанрами и годами выхода.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — легендарные игры всех времён`,
    description: "Каталог легендарных видеоигр с описаниями, жанрами и годами выхода.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
