"use client";
import "leaflet/dist/leaflet.css";
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
import { useState } from "react";
import NotificationContext from "@/context/notification-context";
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

  const [user, setUser] = useState(null);

  const value = {
    user,
    setUser,
  };

  return (
    <NotificationContext.Provider value={value}>
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
                S<span className="text-red-700">O</span>
                S-AI
              </h1>

              <NavigationMenuDemo />
              <div>
                <Input
                  placeholder="Effectuer une recherche avancée"
                  suffix={
                    <SearchOutlined style={{ color: "rgba(0,0,0,.45)" }} />
                  }
                />
              </div>
              <div className="flex gap-8">
                <Link href="/notifications">
                  <Badge count={"1"}>
                    <AiTwotoneAlert size={28} />
                  </Badge>
                </Link>
                <CiLight size={28} className="cursor-pointer" />
                <IoIosLogOut size={28} className="cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="mt-20 h-screen overflow-y-scroll mx-10">
            {children}
          </div>
        </body>
      </html>
    </NotificationContext.Provider>
  );
}
