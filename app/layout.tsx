"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NavigationMenuDemo } from "@/components/shared/navigation-menu-custum";
import { AiTwotoneAlert } from "react-icons/ai";
import { IoIosLogOut } from "react-icons/io";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { Badge } from "antd";
import { CiLight } from "react-icons/ci";
import Link from "next/link";
import { useRouter } from "next/navigation";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const router = useRouter();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
          <div className="flex justify-between items-center p-4">
            <h1
              onClick={() => router.push("/")}
              className="text-2xl font-bold cursor-pointer"
            >
              SOS-AI
            </h1>

            <NavigationMenuDemo />
            <div>
              <Input
                placeholder="Effectuer une recherche avancée"
                suffix={<SearchOutlined style={{ color: "rgba(0,0,0,.45)" }} />}
              />
            </div>
            <div className="flex gap-8">
              <Link href="/notifications">
                <Badge count={5}>
                  <AiTwotoneAlert size={28} />
                </Badge>
              </Link>
              <CiLight size={28} />
              <IoIosLogOut size={28} />
            </div>
          </div>
        </div>
        <div className="mt-20 h-screen overflow-y-scroll mx-10">{children}</div>
      </body>
    </html>
  );
}
