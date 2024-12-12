"use client";
import { Toaster } from "react-hot-toast";
import MapComponent from "@/components/shared/MapComponent";
import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

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
