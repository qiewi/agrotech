import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
    title: "Info Harga Pangan",
    description: "Informasi harga pangan berdasarkan nasional dan wilayah",
  }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen w-full flex justify-center bg-slate-100 ${dmSans.className}`}
      >
        <main className="w-full max-w-[390px] flex flex-col items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
