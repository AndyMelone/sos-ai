import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <div className="my-2">
        <button className="py-2 px-3 bg-black border m-1 rounded-xl">
          <p className="text-white">Aujourd&apos;hui</p>
        </button>
        <button className="py-2 px-3 bg-slate-50 border m-1 rounded-xl">
          Hier
        </button>
        <button className="py-2 px-3 bg-slate-50 border m-1 rounded-xl">
          Cette semaine
        </button>
        <button className="py-2 px-3 bg-slate-50 border m-1 rounded-xl">
          Ce mois
        </button>
      </div>
      <div>{children}</div>
    </>
  );
}
