"use client";
import { Toaster } from "react-hot-toast";
import dynamic from "next/dynamic";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const MapComponent = dynamic(() => import("@/components/shared/MapComponent"), {
  ssr: false,
});
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="w-full mt-5">
      <div className="flex">
        <div className="w-3/5">{children}</div>
        <div className="w-2/5 border z-0">
          <MapComponent />
        </div>
      </div>
      <Toaster />
    </div>
  );
}
