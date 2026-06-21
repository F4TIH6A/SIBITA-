import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SIBITA — Sistem Bimbingan Tugas Akhir",
  description:
    "SIBITA membantu mahasiswa melacak setiap tahapan tugas akhir, dari diskusi konsep hingga ujian akhir, dengan timeline, deadline, dan komunikasi dosen pembimbing dalam satu platform.",
  keywords: [
    "bimbingan tugas akhir",
    "skripsi",
    "tesis",
    "pembimbingan",
    "SIBITA",
    "tugas akhir",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${plusJakartaSans.variable} ${inter.variable}`}
    >
      <body>
        {children}
      </body>
    </html>
  );
}
