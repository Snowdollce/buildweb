import type { Metadata } from "next";
import { Inter, Kanit, Sarabun } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const kanit = Kanit({
  variable: "--font-kanit",
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["thai", "latin"],
});

const sarabun = Sarabun({
  variable: "--font-sarabun",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["thai", "latin"],
});

export const metadata: Metadata = {
  title: "คอร์ส AI กับคลังแสงแห่งการเรียนรู้ ทดลองเล่น",
  description: "เปลี่ยนไอเดียในหัวของคุณให้กลายเป็นระบบจริงด้วยขุมพลัง AI ใน 1 วัน โดยไม่ต้องเขียนโค้ดสักบรรทัด กับหลักสูตร DX-09 สอนโดย อ.แพรว จันทกานต์ คูชัมภู",
  icons: {
    icon: "/favicon.ico", // Standard Next.js favicon
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="th"
      className={`${inter.variable} ${kanit.variable} ${sarabun.variable} scroll-smooth antialiased`}
    >
      <body className="font-sans bg-[#fefdf5] text-[#412d17] min-h-screen">
        <Header />
        {children}
      </body>
    </html>
  );
}
